import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import pic from "../../Assets/moi.jpeg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I belong to a digital generation, passionate about technology, I
              master the major IT tools and technologies, with proven results
              when it comes to creating and implementing different projects
              related to the sector of computer technology.🤷‍♂️
              <br />
              <br />
              My sectors are
              <i>
                <b className="purple">
                  {" "}
                  Web (Frontend & Backend), Mobile (Cross-platform).{" "}
                </b>
              </i>
              <br />
              <br />I am fluent mostly in <b className="purple">
                Javascript
              </b>{" "}
              with
              <i>
                <b className="purple">
                  {" "}
                  React, React Native, Vue.js, Typescript, Node.js...{" "}
                </b>
              </i>
              <br />
              <br />
              And in others like
              <i>
                <b className="purple"> Php, Flutter and Java </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web/Mobile Technologies and Products </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Artificial Intelligence.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Python</b> and
              <i>
                <b className="purple">
                  {" "}
                  Newer Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Appwrite</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ marginTop: "100px" }}>
            <Tilt>
              <img
                src={pic}
                className="img-fluid"
                alt="avatar"
                style={{ width: "250px", borderRadius: "200px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/diiix7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/loick-adjiwanou"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
