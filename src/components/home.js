import React from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Skype,
  Linkedin,
} from "react-bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <div className="profile ms-5">
                <div className="img">
                  <img
                    src="images/profile-img.jpeg"
                    className="img-fluid rounded-circle d-block m-2  "
                    alt="my-photo"
                  />
                  <h1 className="imgtitle fs-3 fw-normal">Anbarasu D</h1>
                </div>

                <div>
                  <a href="#" className="twitter p-1 text-light">
                    <Twitter />
                  </a>

                  <a href="#" className="facebook p-1 text-light">
                    <Facebook />
                  </a>

                  <a href="#" className="instagram p-1 text-light">
                    <Instagram />
                  </a>

                  <a href="#" className="google-plus p-1 text-light">
                    <Skype />
                  </a>

                  <a href="#" className="linkedin p-1 text-light">
                    <Linkedin />
                  </a>
                </div>
              </div>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li class="nav-item">
                  <Link to="/" class="nav-link align-middle px-0">
                    <i class="fs-4 bi-house text-light"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">Home</span>
                  </Link>
                </li>

                <li>
                  <a href="#" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-table text-light"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle "
                  >
                    <i class="fs-4 bi-bootstrap text-light"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">
                      Resume
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                  >
                    <i class="fs-4 bi-grid text-light"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">
                      Portfolio
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-people text-light"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline text-light">
                      Contact
                    </span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
              <div class="dropdown pb-4">
                <a
                  href="#"
                  class="d-flex align-items-center text-white text-decoration-none "
                  id="dropdownUser1"
                  aria-expanded="false"
                >
                  <div class="copyright">
                    &copy; Copyright{" "}
                    <strong>
                      <span>iPortfolio</span>
                    </strong>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div class="col py-3">
            <section
              id="hero"
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <h1 data-aos="fade-in">Anbarasu D</h1>
              <p>
                I'm webdeveloper
                <span
                  class="typed"
                  data-typed-items="Designer, Developer, Freelancer, Photographer"
                ></span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
