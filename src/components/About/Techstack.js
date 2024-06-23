import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiPython, DiJava, DiCss3, DiHtml5 } from "react-icons/di";
import { SiBootstrap, SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

function Techstack() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation should happen only once
      easing: 'ease-in-out', // Easing function for the animation
    });
  }, []);

  const icons = [
    { icon: <DiHtml5 />, delay: 0 },
    { icon: <DiCss3 />, delay: 200 },
    { icon: <SiBootstrap />, delay: 400 },
    { icon: <SiTailwindcss />, delay: 600 },
    { icon: <DiJavascript1 />, delay: 800 },
    { icon: <DiReact />, delay: 1000 },
    { icon: <SiNextdotjs />, delay: 1200 },
    { icon: <FaPhp />, delay: 1400 },
    { icon: <SiMysql />, delay: 1600 },
    { icon: <DiPython />, delay: 1800 },
    { icon: <DiJava />, delay: 2000 },
    { icon: <TbBrandCpp />, delay: 2200 },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((iconObj, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="fade-up"
          data-aos-delay={iconObj.delay}
          key={index}
        >
          {iconObj.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
