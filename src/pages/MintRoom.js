import React, { useState, useEffect } from 'react';

import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { serializeError } from 'eth-rpc-errors';
import { useAlert } from '@blaumaus/react-alert';

import logo from '../assets/images/logo.png';
import normalPass from '../assets/images/normal.png';
import brokenPass from '../assets/images/broken.png';

import Footer from '../sections/Footer';
import { metaMask } from '../utils/web3Functions';
import { getContract } from '../utils/contractFunctions';
import { useEagerConnect, useInactiveListener } from '../hooks';
import {
  MINTING_PRICE_NORMAL,
  TOTAL_NFTS_NORMAL,
  MINTING_PRICE_BROKEN,
  TOTAL_NFTS_BROKEN,
} from '../utils/constants';

const MintRoom = () => {
  let ethersProvider;
  let canGetTotalSupply = undefined;
  let totalSupply;

  const alert = useAlert();

  const web3reactContext = useWeb3React();
  const { connector, account } = web3reactContext;

  const [nftType, setNftType] = useState('normal');
  const [nftsToMint, setNftsToMint] = useState(1);
  const [nftsRemaining, setNftsRemaining] = useState(undefined);
  const [isMinting, setIsMinting] = useState(false);
  const [activatingConnector, setActivatingConnector] = useState(
    undefined
  );

  const getInitTotalSupply = async () => {
    ethersProvider = new ethers.providers.Web3Provider(
      window.ethereum,
      'any'
    );

    canGetTotalSupply =
      ethersProvider &&
      ethersProvider.provider.isMetaMask &&
      ethersProvider.provider.chainId === '0x4' &&
      account;

    if (canGetTotalSupply) {
      const nftContract = getContract(ethersProvider, nftType);

      await nftContract.totalSupply().then((result) => {
        totalSupply = parseInt(result);
        const actualSupply =
          nftType === 'normal'
            ? TOTAL_NFTS_NORMAL
            : TOTAL_NFTS_BROKEN;
        setNftsRemaining(actualSupply - totalSupply);
      });
    }
  };

  if (typeof window.ethereum !== 'undefined') {
    getInitTotalSupply();
  }

  const handleNormalType = () => {
    setNftType('normal');
    getInitTotalSupply();
  };

  const handleBrokenType = () => {
    setNftType('broken');
    getInitTotalSupply();
  };

  const decrementnftsToMint = () => {
    if (nftsToMint === 1) {
      alert.removeAll();
      alert.error('You cannot mint less than 1 NFT.');
      return;
    }
    setNftsToMint(nftsToMint - 1);
  };

  const incrementnftsToMint = () => {
    if (nftsToMint === 10) {
      alert.removeAll();
      alert.error('You cannot mint more than 10 NFTs.');
      return;
    }
    setNftsToMint(nftsToMint + 1);
  };

  const handleWalletDisconect = () => {
    const { deactivate } = web3reactContext;

    try {
      deactivate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleWalletConnect = async () => {
    if (ethersProvider) {
      const { activate } = web3reactContext;
      await activate(metaMask);
    } else {
      alert.removeAll();
      alert.error('Please install MetaMask (https://metamask.io//)');
    }
  };

  const mintNftHandler = async () => {
    const { account, library, chainId } = web3reactContext;
    const actualSupply =
      nftType === 'normal' ? TOTAL_NFTS_NORMAL : TOTAL_NFTS_BROKEN;
    const actualPrice =
      nftType === 'normal'
        ? MINTING_PRICE_NORMAL
        : MINTING_PRICE_BROKEN;

    if (!account && !library) {
      alert.removeAll();
      alert.error('Connect MetaMask Wallet first.');
      return;
    }

    if (chainId !== 4) {
      alert.removeAll();
      alert.error('Please use only Ethereum MainNet.');
      return;
    }

    if (
      totalSupply + nftsToMint > actualSupply ||
      totalSupply === actualSupply
    ) {
      alert.removeAll();
      alert.error('Maximum minting number has been reached.');
      return;
    }

    try {
      const nftsToMintValue = nftsToMint * actualPrice;
      const nftContract = getContract(library, nftType);

      let nftTxn = await nftContract.buy(nftsToMint, {
        value: ethers.utils.parseEther(
          `${nftsToMintValue.toFixed(4)}`
        ),
      });

      setIsMinting(true);
      await nftTxn.wait();
      setIsMinting(false);

      alert.removeAll();
      alert.success(
        `Mined, see transaction: https://etherscan.io/tx/${nftTxn.hash}.`
      );
    } catch (err) {
      let errorMessage;

      if (err.code === 4001) {
        errorMessage = err.message;
      } else if (err.code === 'INSUFFICIENT_FUNDS') {
        errorMessage = 'Insufficient ETH for mint.';
      } else {
        const serializerError = serializeError(err).data.originalError
          .error.message;
        errorMessage = serializerError
          ? serializerError
          : 'Smart contract error!';
      }

      alert.error(errorMessage);
    }
  };

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <>
      <header className="mb-auto">
        <nav className="navbar navbar-dark fixed-top bg-transparent">
          <div className="container">
            <a className="navbar-brand text-white" href="/">
              <div className="d-flex align-items-center">
                <img
                  src={logo}
                  alt=""
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top me-2"
                ></img>
                Voodoo Vault
              </div>
            </a>
            <ul className="navbar-nav ms-auto">
              {!web3reactContext.account && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-outline-light text-white"
                    onClick={handleWalletConnect}
                  >
                    Connect Wallet
                  </button>
                </li>
              )}
              {web3reactContext.account && (
                <li className="nav-item">
                  <div className="d-flex align-items-center">
                    <p
                      className="account-text-truncate mb-0 text-white"
                      style={{ maxWidth: '150px' }}
                    >
                      {web3reactContext.account}
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-light text-white"
                      onClick={handleWalletDisconect}
                    >
                      Disconnect
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="row align-items-center justify-content-center bg-transparent rounded">
            <div className="col-md-5">
              <div className="row p-3">
                <div className="col-md-12 d-grid">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Select mint"
                  >
                    <button
                      type="button"
                      className={`btn btn-${
                        nftType === 'normal' ? 'dark' : 'secondary'
                      }`}
                      onClick={handleNormalType}
                    >
                      NORMAL PASS
                    </button>
                    <button
                      type="button"
                      className={`btn btn-${
                        nftType === 'broken' ? 'dark' : 'secondary'
                      }`}
                      onClick={handleBrokenType}
                    >
                      BROKEN PASS
                    </button>
                  </div>
                </div>
              </div>
              {canGetTotalSupply && (
                <div className="row p-3">
                  <div className="col-md-12 d-grid">
                    <h5 className="mb-0 text-center text-white">
                      {nftsRemaining} REMAINING
                    </h5>
                  </div>
                </div>
              )}
              <div className="row p-3">
                <div className="col-md-12 d-grid">
                  <div className="input-group">
                    <span
                      className="input-group-text"
                      onClick={decrementnftsToMint}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      className="form-control text-center"
                      value={nftsToMint}
                      aria-label="Amount (to the mint)"
                      readOnly
                    />
                    <span
                      className="input-group-text"
                      onClick={incrementnftsToMint}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-md-12 d-grid">
                  <button
                    className="btn btn-dark"
                    type="button"
                    onClick={mintNftHandler}
                  >
                    MINT
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="w-100 text-center">
                {nftType === 'normal' && (
                  <img
                    src={normalPass}
                    class="rounded mx-auto d-block coin-img"
                    alt="Normal"
                  />
                )}
                {nftType === 'broken' && (
                  <img
                    src={brokenPass}
                    class="rounded mx-auto d-block coin-img"
                    alt="Broken"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MintRoom;
