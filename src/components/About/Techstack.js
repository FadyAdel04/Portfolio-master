// Techstack.js
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1, DiReact, DiPython, DiJava, DiCss3, DiHtml5
} from "react-icons/di";
import { SiBootstrap, SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { MdMovieEdit } from "react-icons/md";
import { SiReacthookform } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { MdAnimation } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
import AOS from "aos";
import { SiOpenai } from "react-icons/si";
import "aos/dist/aos.css";
import { DiNodejs } from "react-icons/di";
import { MdDynamicFeed } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";


// Mapping of technology names to icons
const iconMapping = {
  "HTML": <DiHtml5 />,
  "CSS": <DiCss3 />,
  "Bootstrap": <SiBootstrap />,
  "Tailwind": <SiTailwindcss />,
  "JavaScript": <DiJavascript1 />,
  "React": <DiReact />,
  "Next.js": <SiNextdotjs />,
  "PHP": <FaPhp />,
  "MySQL": <SiMysql />,
  "Python": <DiPython />,
  "Java": <DiJava />,
  "C++": <TbBrandCpp />,
  "TMDb API": <MdMovieEdit />,
  "React Router": <SiReactrouter />,
  "Node.js":<DiNodejs />,
  "Hooks": <SiReacthookform />,
  "Server-Side": <FaServer />,
  "Animation" :<MdAnimation />,
  "Open Ai" : <SiOpenai />,
  "TypeScript" : <SiTypescript />,
  "Dynamic Root" : <MdDynamicFeed />,
  "Payment": <MdOutlinePayments />,
  "MapIntegration" :<FaMapMarkedAlt />,
  "Responsive" :<DiResponsive />,
  "Net" :<SiDotnet />,
  "C#" : <TbBrandCSharp />
};

function Techstack({ skills, technologies }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation should happen only once
      easing: 'ease-in-out', // Easing function for the animation
    });
  }, []);

  // Combine skills and technologies into one array
  const allTechs = [...skills, ...technologies];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {allTechs.map((tech, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="fade-up"
          data-aos-delay={index * 200} // Increase delay for each icon
          key={index}
          style={{ position: "relative", textAlign: "center" }} // Tooltip positioning
        >
          {iconMapping[tech] || null} {/* Display the corresponding icon */}
          {/* Tooltip displaying tech name */}
          <div className="tech-tooltip">{tech}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
