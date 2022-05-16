import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faItunes,
  faSpotify,
  faYoutube,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="footer mt-md-auto py-md-3 text-white bg-transparent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 mb-small">
              <a className="text-decoration-none text-white" href="/">
                <span>
                  &copy; {new Date().getUTCFullYear()} Voodoo Vault
                </span>
              </a>
            </div>
            <div className="col-md-4 mb-small">
              <section className="mb-1 text-center">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://discord.com/invite/voodoovlt"
                  target={'_blank'}
                  role="button"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://music.apple.com/ro/album/voodoo/1603420607?l=ro"
                  target={'_blank'}
                  role="button"
                >
                  <FontAwesomeIcon icon={faItunes} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://open.spotify.com/artist/0GoJXmDr5UBG8ValCZe4om"
                  target={'_blank'}
                  role="button"
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.youtube.com/c/Ianixxx"
                  target={'_blank'}
                  role="button"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.instagram.com/nusuntian/"
                  target={'_blank'}
                  role="button"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.tiktok.com/@nusuntian"
                  target={'_blank'}
                  role="button"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </section>
            </div>
            <div className="col-md-4 mb-small">
              <div className="float-md-end">
                <button
                  type="button"
                  className="btn btn-link text-decoration-none text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#staticTeam"
                >
                  Team
                </button>
                <button
                  type="button"
                  className="btn btn-link text-decoration-none text-white"
                  onClick={(e) => {
                    window.location.href =
                      'mailto:voodoovault1@gmai.com';
                    e.preventDefault();
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="modal fade modal-tour bg-transparent py-5"
        id="staticTeam"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={'-1'}
        aria-labelledby="staticTeamLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content rounded-6 shadow">
            <div className="modal-body p-5">
              <h2 className="fw-bold mb-0">Team Members</h2>
              <ul className="d-grid gap-4 my-5 list-unstyled">
                <li className="d-flex gap-4">
                  <a
                    href="https://instagram.com/nusuntian?igshid=YmMyMTA2M2Y="
                    target={'_blank'}
                    className="text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <div>
                    <h5 className="mb-0">IAN</h5>
                    founder - art vision
                  </div>
                </li>
                <li className="d-flex gap-4">
                  <a
                    href="https://instagram.com/razvan.eth?igshid=YmMyMTA2M2Y="
                    target={'_blank'}
                    className="text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <div>
                    <h5 className="mb-0">SBURATORUL</h5>
                    co-founder - project manager - real estate project
                    manager background and web3 background
                  </div>
                </li>
                <li className="d-flex gap-4">
                  <a
                    href="https://instagram.com/rankervan?igshid=YmMyMTA2M2Y="
                    target={'_blank'}
                    className="text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <div>
                    <h5 className="mb-0">RANKERVAN</h5>
                    co-founder - financial manager with real business
                    background
                  </div>
                </li>
                <li className="d-flex gap-4">
                  <a
                    href="https://instagram.com/giuscaandrei?igshid=YmMyMTA2M2Y="
                    target={'_blank'}
                    className="text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <div>
                    <h5 className="mb-0">TheCarGuy</h5>
                    NFT expert with web3 background and a real Diamond
                    Holder of Clone-X
                  </div>
                </li>
                <li className="d-flex gap-4">
                  <a
                    href="https://instagram.com/lexgbr?igshid=YmMyMTA2M2Y="
                    target={'_blank'}
                    className="text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <div>
                    <h5 className="mb-0">ALEXANDRU</h5>
                    Discord Manager - marketing&management background
                    in Holland
                  </div>
                </li>
                <li className="d-flex gap-4">
                  <a
                    href="https://www.instagram.com/danmitrea00"
                    target={'_blank'}
                    className="text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <div>
                    <h5 className="mb-0">Dan:Mitrea</h5>
                    BlockChain Master
                  </div>
                </li>
                <li className="d-flex gap-4">
                  <a
                    href="https://www.instagram.com/raresroca05/"
                    target={'_blank'}
                    className="text-decoration-none"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <div>
                    <h5 className="mb-0">Panda05</h5>
                    Software Engineer - WEB3 Developer
                  </div>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-primary mt-5 w-100"
                data-bs-dismiss="modal"
              >
                Thanks!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
