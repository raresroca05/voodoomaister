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
      </main>

      <Footer isHome={true} />
    </>
  );
};

export default Home;
