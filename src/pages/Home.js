import React from 'react';

import Footer from '../sections/Footer';

import logo from '../assets/images/logo.png';
import mapImage from '../assets/images/maptransparent.png';

const Home = () => {
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
              <li className="nav-item">
                <a
                  href="/mint-room"
                  className="btn btn-outline-light text-white"
                >
                  Mint Room
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="h-lg-75 overflow-scroll">
        <div className="container">
          <h2 className="pb-2 border-bottom text-white text-center">
            Road Map
          </h2>
        </div>
        <div className="text-center">
          <img
            src={mapImage}
            className="img-fluid"
            width="1600"
            height="900"
            alt=""
          ></img>
        </div>
        <div className="container">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">
                  CHAPTER 1: Voodoo Vault Access Pass
                </h4>
                <p className="text-white">
                  a) 3 x NFT ready to import
                  <br />
                  b) Reducere la toate drop-urile de merch oficial{' '}
                  <br /> c) Acces la comunitatea inchisa prin
                  verificare Wallet pentru semnatura NFT <br /> d)
                  Whitelist + reducere la colectia de 5555 figurine 3D
                  unice ready to Metaverse <br />
                  e) Whitelist + reducere la colectia de Real Estate
                  din cadrul Universului Voodoo – care va avea
                  utilitate atat in Metaverse cat si in viata reala.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">
                  CHAPTER 2: Voodoo Vault BROKEN Access Pass
                </h4>
                <p className="text-white">
                  a) 1 x tricou merch (pre-order) <br />
                  b) 1 x intrare eveniment VOODOO VAULT <br />
                  c) 1 x NFT ERC-721 pe 3 nivele de raritati
                  <br />
                  d) acces la grupul VIP - apartenenta la o noua lume
                  cu o multime de beneficii (ex: hosting gratuit la
                  site/server)
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">
                  CHAPTER 3: Voodoo Companion
                </h4>
                <p className="text-white">
                  a) NFT drop pe 3 nivele de raritate, ready to
                  Metaverse - pentru toti detinatorii de Acces Pass
                  (CHAPTER 1)
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">CHAPTER4: VoodooLogo</h4>
                <p className="text-white">
                  a) NFT drop pe 5 nivele de raritate, Companion ready
                  to Metaverse
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">
                  CHAPTER 5: NFT drop sub forma de benzi desenate
                </h4>
                <p className="text-white">
                  a) Unlock the Voodoo Vault Storyline - 12 editii
                  confirmate care vor duce spre explorarea unor noi
                  caractere ce vor ramane pentru eternitate in
                  blockchain
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">
                  CHAPTER 6: NFT drop pe 10 nivele de raritate
                </h4>
                <p className="text-white">
                  a) Colectie de 5555 caractere 3D unice care vor
                  popula universul Voodoo Vault. Vor avea legatura
                  directa cu drop-ul din CHAPTER 4.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">
                  FINAL CHAPTER: Unlock the Voodoo Universe
                </h4>
                <p className="text-white">
                  a) 5555 NFT tip Real Estate, pe 3 categorii diferite
                  + 12 nivele de raritate
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">BENEFICII EXTRA:</h4>
                <p className="text-white">
                  • Eveniment privat pentru toti detinatorii de Acces
                  Pass, concerte live cu piese unreleased si multe
                  alte surprize. <br />• Apartenenta la o comunitate
                  axata pe dezvoltare in web3 si in zona DeFi.
                  <br />• Posibilitatea de a colabora si lega
                  conexiuni cu producatori si artisti la nivel
                  national si nu numai.
                </p>
              </div>
            </div>
          </div>
          <h2 className="pb-2 border-bottom text-white text-center">
            Proiecte Viitoare
          </h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">
                  VOODOO VAULT HEADQUARTERS
                </h4>
                <p className="text-white">
                  Evenimente organizate in cadrul SANDBOX METAVERSE
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">VOODOO VAULT CHARITY</h4>
                <p className="text-white">
                  Implicarea in dotarea si dezvoltarea scolilor din
                  zonele rurale din Romania
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-transparent text-white flex-shrink-0 me-3">
                <h1 className="mb-0">*</h1>
              </div>
              <div>
                <h4 className="text-white">
                  VOODOO VAULT PLAY2EARN GAME
                </h4>
                <p className="text-white">
                  Lansarea unui joc RPG 2D Play2Earn pe baza celor
                  5555 caractere 3D unicat din CHAPTER 5 - Voodoo
                  Vault Storyline
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isHome={true} />
    </>
  );
};

export default Home;
