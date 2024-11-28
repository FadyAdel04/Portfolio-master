// Toolstack.js
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
  SiNetlify,
  SiPostgresql,
  SiFigma 
} from "react-icons/si";
import { SiAppwrite } from "react-icons/si";
import { FaSms } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { SiAxios } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { DiGit, DiNodejs } from "react-icons/di";
import { FaCcStripe, FaWindows } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";

// Mapping of tool names to icons
const toolIconMapping = {
  "VS Code": <SiVisualstudiocode />,
  "Postman": <SiPostman />,
  "Slack": <SiSlack />,
  "Vercel": <SiVercel />,
  "Firebase": <SiFirebase />,
  "Strapi": <SiStrapi />,
  "GitHub": <SiGithub />,
  "Netlify": <SiNetlify />,
  "PostgreSQL": <SiPostgresql />,
  "Git": <DiGit />,
  "Node.js": <DiNodejs />,
  "Stripe": <FaCcStripe />,
  "Windows": <FaWindows />,
  "API": <TbApi />,
  "Figma": <SiFigma />,
  "Ai" :<GiArtificialIntelligence />,
  "Axios" : <SiAxios />,
  "Animation" :<MdAnimation />,
  "MapIntegration" :<FaMapMarkedAlt />,
  "Responsive" :<DiResponsive />,
  "AppWrite" : <SiAppwrite />, // Custom icon for Appwrite
  "SMS" :<FaSms />,
};

function Toolstack({ tools }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation should happen only once
      easing: 'ease-in-out', // Easing function for the animation
    });
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          className="tool-icons"
          data-aos="fade-up"
          data-aos-delay={index * 200} // Increase delay for each icon
          key={index}
          style={{ position: "relative", textAlign: "center" }} // Tooltip positioning
        >
          {toolIconMapping[tool] || null} {/* Display the corresponding icon */}
          {/* Tooltip displaying tool name */}
          <div className="tool-tooltip">{tool}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
