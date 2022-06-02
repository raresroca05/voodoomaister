import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

import { metaMask } from './utils/web3Functions';

export function useEagerConnect() {
  const { activate, active } = useWeb3React();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    metaMask.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(metaMask, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum !== undefined) {
      if (ethereum && ethereum.on && !active && !error && !suppress) {
        const handleConnect = () => {
          console.log("Handling 'connect' event");
          activate(metaMask);
        };
        const handleChainChanged = (chainId) => {
          console.log(
            "Handling 'chainChanged' event with payload",
            chainId
          );
          activate(metaMask);
        };
        const handleAccountsChanged = (accounts) => {
          console.log(
            "Handling 'accountsChanged' event with payload",
            accounts
          );
          if (accounts.length > 0) {
            activate(metaMask);
          }
        };
        const handleNetworkChanged = (networkId) => {
          console.log(
            "Handling 'networkChanged' event with payload",
            networkId
          );
          activate(metaMask);
        };

        ethereum.on('connect', handleConnect);
        ethereum.on('chainChanged', handleChainChanged);
        ethereum.on('accountsChanged', handleAccountsChanged);
        ethereum.on('networkChanged', handleNetworkChanged);

        return () => {
          if (ethereum.removeListener) {
            ethereum.removeListener('connect', handleConnect);
            ethereum.removeListener(
              'chainChanged',
              handleChainChanged
            );
            ethereum.removeListener(
              'accountsChanged',
              handleAccountsChanged
            );
            ethereum.removeListener(
              'networkChanged',
              handleNetworkChanged
            );
          }
        };
      }
    }
  }, [active, error, suppress, activate]);
}
