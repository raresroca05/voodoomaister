import React from 'react';
import { Link } from 'react-router-dom';

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
  const EmailButton = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <footer className="footer mt-auto py-md-3 text-white bg-transparent">
        <div className="container pb-0">
          <div className="row align-items-center">
            <div className="col-md-4">
              <a className="text-decoration-none text-white" href="/">
                <span>
                  &copy; {new Date().getUTCFullYear()} Voodoo Vault
                </span>
              </a>
            </div>
            <div className="col-md-4">
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
            <div className="col-md-4">
              <div className="float-md-end">
                <button
                  type="button"
                  class="btn btn-link text-decoration-none text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#staticTeam"
                >
                  Team
                </button>
                <button
                  type="button"
                  class="btn btn-link text-decoration-none text-white"
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
        class="modal fade"
        id="staticTeam"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticTeamLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticTeamLabel">
                Team Members
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="row align-items-center justify-content-center mb-3">
                  <div className="col-6">
                    <h6 className="mb-0">
                      <b>IAN</b> <br />
                      founder - art vision
                    </h6>
                  </div>
                  <div className="col-6 text-center">
                    <p className="mb-0">
                      <a
                        href="https://instagram.com/nusuntian?igshid=YmMyMTA2M2Y="
                        target={'_blank'}
                        className="text-decoration-none"
                      >
                        Instagram
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center mb-3">
                  <div className="col-6">
                    <h6 className="mb-0">
                      <b>SBURATORUL</b> <br />
                      co-founder - project manager - real estate
                      project manager background and web3 background
                    </h6>
                  </div>
                  <div className="col-6 text-center">
                    <p className="mb-0">
                      <a
                        href="https://instagram.com/razvan.eth?igshid=YmMyMTA2M2Y="
                        target={'_blank'}
                        className="text-decoration-none"
                      >
                        Instagram
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center mb-3">
                  <div className="col-6">
                    <h6 className="mb-0">
                      <b>RANKERVAN</b> <br />
                      co-founder - financial manager with real
                      business background
                    </h6>
                  </div>
                  <div className="col-6 text-center">
                    <p className="mb-0">
                      <a
                        href="https://instagram.com/rankervan?igshid=YmMyMTA2M2Y="
                        target={'_blank'}
                        className="text-decoration-none"
                      >
                        Instagram
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center mb-3">
                  <div className="col-6">
                    <h6 className="mb-0">
                      <b>TheCarGuy</b> <br />
                      NFT expert with web3 background and a real
                      Diamond Holder of Clone-X
                    </h6>
                  </div>
                  <div className="col-6 text-center">
                    <p className="mb-0">
                      <a
                        href="https://instagram.com/giuscaandrei?igshid=YmMyMTA2M2Y="
                        target={'_blank'}
                        className="text-decoration-none"
                      >
                        Instagram
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center mb-3">
                  <div className="col-6">
                    <h6 className="mb-0">
                      <b>ALEXANDRU</b> <br />
                      Discord Manager - marketing&management
                      background in Holland
                    </h6>
                  </div>
                  <div className="col-6 text-center">
                    <p className="mb-0">
                      <a
                        href="https://instagram.com/lexgbr?igshid=YmMyMTA2M2Y="
                        target={'_blank'}
                        className="text-decoration-none"
                      >
                        Instagram
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
