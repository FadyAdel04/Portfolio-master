import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

function Home2() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate <b className="purple">Frontend Web Developer</b>{" "}
              with a strong foundation in <b className="purple">React.js</b> and{" "}
              <b className="purple">Next.js</b>, and experience delivering modern, fast, and responsive websites.
              <br />
              <br />
              I'm currently pursuing a degree in <b className="purple">Computer Science</b> with a focus on{" "}
              <b className="purple">Artificial Intelligence</b>, and I enjoy combining tech with creativity.
              <br />
              <br />
              I specialize in building dynamic UIs, animations, and performance-optimized apps using{" "}
              <i>
                <b className="purple">Tailwind CSS, Shadcn, TypeScript, Supabase</b>
              </i>{" "}
              and more.
              <br />
              <br />
              I'm also the creator of{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61575214027590"
                target="_blank"
                rel="noreferrer"
                className="purple"
              >
                Crafted Web Solutions
              </a>
              , a brand focused on offering professional websites like portfolios, e-commerce stores,
              digital menus, wedding invitations, and educational platforms — all with local pricing and modern design.
              <br />
              <br />
              My passion lies in using the web to build solutions that are clean, fast, and user-friendly 🚀
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="home-about-social"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FadyAdel04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100038585952905"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fady-adel-612805264/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fady_adel04/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codeforces.com/profile/fadyadel1712"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodeforces />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
