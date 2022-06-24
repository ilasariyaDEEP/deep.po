import React, { useEffect } from "react";
import person from "./person.jpg";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import snapchat from "./github.png";
import linkedin from "./linkedin.png";
import ss from "./ss.png";
import lg from "./lg.jpg";
import d from "./d.png";
import "./Home.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    AOS.init({ offset: 250, duration: 2000 });
  }, []);
  return (
    <>
      {/* PRofile pic with droplet */}
      <div data-aos="fade-down">
      <div className="avatar img-fluid mx-auto">
        <img className="avatar__image" src={person} alt="person" />
      </div>
      </div>
      <div data-aos="fade-up">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#58B19F"
              fill-opacity="1"
              d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,106.7C672,96,768,128,864,170.7C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="person-details text-white text-left"></div>
          <div className="pd">
            <div className="fs-3" data-aos="fade-up">
              <h1>Hi There,</h1>
              <p>
                <br />
                My name is Deep Ilasariya,
                <br />
                I am a graduate with the degree of <strong>Bachelor's in Information Technology</strong> from Usha Pravin Gandhi College(Mumbai). 
                I create <strong>creative, functional and responsive websites.</strong> 
                <br />
                My skills are diversified, right from designing, editing to html coding.
                <br />
                I am an enthusiast in learning and creating new types of websites.
                <br />
                <br />
                <br />
              </p>
            </div>
            <h1 data-aos="fade-up">SKILLS</h1>
            <br />
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-sm-6 col-md-5 col-lg-6">
                  <h2>EXPERTISE</h2>
                  <ul className="skills">
                    <li>Keen Learner</li>
                    <li>Flexible in adapting a new environment</li>
                    <li>Leadership</li>
                    <li>Time management</li>
                    <li>Well versed with technologies</li>
                    <li>Problem-solving</li>
                    <li>Active listening</li>
                    <li>Management skills</li>
                    <li>Teamwork</li>
                    <li>Dedicated</li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-6">
                  <h2>TECHNICAL SKILLS</h2>
                  <ul className="skills">
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                    <li>Pug</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>ReactJS</li>
                    <li>Bootstrap</li>
                    <li>MS-Excel, Word, PowerPoint, Outlook</li>

                  </ul>
                </div>
              </div>
            </div>
            {/* Learn More
          <br/>
          <Link className="btn btn-outline-light btn-lg" to="/deep.po/about">About Me</Link> */}
          </div>
        </div>
        <div className="container-desc text-white text-center mb-5">
          <br />
          <br />
          <br />
        </div>
      </div>
      {/* droplet */}
      <div data-aos="fade-down"> 
      <div id="droplet" ></div>
      </div>
      {/* My work */}
      <div data-aos="fade-up">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#58B19F"
              fill-opacity="1"
              d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,106.7C672,96,768,128,864,170.7C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="bg-div text-white text-center">
          <h1 className="pt-2 pb-4" data-aos="fade-up">
            MY PROJECTS
          </h1>
          <br />
          <br />

          <div
            className="social row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2"
            data-aos="fade-up"
          >
            <div className="cus-col-md-4">
              <div className="card h-100">
                <h5 className="card-title text-white text-center mb-4">Food Court</h5>
                <img src={ss} className="card-img-top" alt="ss" />
                <div className="card-body text-white text-center">
                  <br />
                  <Link
                    className="btn btn-outline-light btn-lg"
                    to="/deep.po/work"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="cus-col-md-4">
              <div className="card h-100">
                <h5 className="card-title text-white text-center mb-4">Transperent Login Page</h5>
                <img src={lg} className="card-img-top" alt="lg" />
                <div className="card-body text-white text-center">
                  <br />
                  <Link
                    className="btn btn-outline-light btn-lg"
                    to="/deep.po/work"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="cus-col-md-4">
              <div className="card h-100">
                <h5 className="card-title text-white text-center mb-4">
                  Dance Academy
                </h5>
                <img src={d} className="card-img-top" alt="d" />
                <div className="card-body text-white text-center">
                  <br />
                  <Link
                    className="btn btn-outline-light btn-lg"
                    to="/deep.po/work"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-desc mb-5">
          <br />
          <br />
          <br />
        </div>
      </div>
      {/* droplet */}
      <div data-aos="fade-down"> 
      <div id="droplet" ></div>
      </div>
      {/* Social Network */}
      <div data-aos="fade-up">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#58B19F"
              fill-opacity="1"
              d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,106.7C672,96,768,128,864,170.7C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="bg-div text-white text-center">
          <h1 className="pt-3 pb-4" data-aos="fade-up">Social Network</h1>
          <br />
          <br />
        </div>
        <div className="social row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2" >
          <div className="col" data-aos="fade-up">
            <div className="card h-100">
              <h5 className="card-title text-white text-center">Linkedin</h5>
              <p className="text-white text-center">Scan QR code</p>

              <img src={linkedin} className="card-img-top" alt="..." />
              <div className="card-body text-white text-center">
                <h6>OR</h6>
                <br />
                <Link
                  className="btn btn-outline-light btn-lg"
                  
                  to="/deep.po/linkedin"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-up">
            <div className="card h-100">
              <h5 className="card-title text-white text-center">Facebook</h5>
              <p className="text-white text-center">Scan QR code</p>
              <img src={facebook} className="card-img-top" alt="..." />
              <div className="card-body text-white text-center">
                <h6>OR</h6>
                <br />
                <Link
                  className="btn btn-outline-light btn-lg"
                  
                  to="/deep.po/facebook"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-up">
            <div className="card h-100">
              <h5 className="card-title text-white text-center">Instagram</h5>
              <p className="text-white text-center">Scan QR code</p>

              <img src={instagram} className="card-img-top" alt="..." />
              <div className="card-body text-white text-center">
                <h6>OR</h6>
                <br />
                <Link
                  className="btn btn-outline-light btn-lg"
                  
                  to="/deep.po/instagram"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-up">
            <div className="card h-100">
              <h5 className="card-title text-white text-center">GitHub</h5>
              <p className="text-white text-center">Scan QR code</p>

              <img src={snapchat} className="card-img-top" alt="..." />
              <div className="card-body text-white text-center">
                <h6>OR</h6>
                <br />
                <Link
                  className="btn btn-outline-light btn-lg"
                  
                  to="/deep.po/github"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-desc mb-5">
          <br />
          <br />
          <br />
        </div>
      </div>
      {/* droplet */}
      <div data-aos="fade-down"> 
      <div id="droplet" ></div>
      </div>
      {/* contact */}
      <div data-aos="fade-up">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#58B19F"
          fill-opacity="1"
          d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,106.7C672,96,768,128,864,170.7C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      </div>
      <section id="contact">
        <div className="container pt-1">
          <div className="content-wrapper text-center">
            <div className="content">
              <h2>HOW TO REACH ME</h2>
              <p className="mail fs-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>{" "}
                : ilasariyadeep13@gmail.com{" "}
              </p>
              <p>Time is utmost precious! Thank you for your time and scrolling till the end.</p>
              {/* <p className="mail fs-4">Phone : +91 887990xxxx</p> */}
            </div>
          </div>
        </div>
      </section>
        </div>
    </>
  );
};
