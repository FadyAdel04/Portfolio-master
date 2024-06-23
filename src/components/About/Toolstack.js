import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiFirebase,
  SiStrapi,
  SiGithub,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import {
  DiGit,
  DiNodejs,
} from "react-icons/di";
import { FaCcStripe, FaWindows } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Toolstack() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation should happen only once
      easing: 'ease-in-out', // Easing function for the animation
    });
  }, []);

  const tools = [
    { icon: <FaWindows />, delay: 0 },
    { icon: <SiVisualstudiocode />, delay: 200 },
    { icon: <SiFirebase />, delay: 400 },
    { icon: <SiStrapi />, delay: 600 },
    { icon: <FaCcStripe />, delay: 800 },
    { icon: <SiVercel />, delay: 1000 },
    { icon: <DiGit />, delay: 1200 },
    { icon: <SiGithub />, delay: 1400 },
    { icon: <TbApi />, delay: 1600 },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="fade-up"
          data-aos-delay={tool.delay}
          key={index}
        >
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
