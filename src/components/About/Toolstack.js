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
import { TbBrandSupabase } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { BsCursorFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { TbBrandGraphql } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

// Mapping of tool names to icons
const toolIconMapping = {
  "VS Code": <SiVisualstudiocode />,
  "VS Community": <DiVisualstudio />,
  "Postman": <SiPostman />,
  "Slack": <SiSlack />,
  "Vercel": <SiVercel />,
  "Firebase": <SiFirebase />,
  "Supabase:": <TbBrandSupabase />,
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
  "Lovable": <FaHeart />,
  "Cursor": <BsCursorFill />,
  "Antigravity": <TbBrandGraphql />,
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
      {tools.map((toolItem, index) => {
        const isObj = typeof toolItem === 'object' && toolItem !== null;
        const name = isObj ? toolItem.name : toolItem;
        const imgUrl = isObj ? toolItem.img_url : null;
        
        return (
          <Col
            xs={4}
            md={2}
            className="tool-icons"
            data-aos="fade-up"
            data-aos-delay={index * 200}
            key={index}
            style={{ position: "relative", textAlign: "center" }}
          >
            {imgUrl ? (
              <img src={imgUrl} alt={name} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
            ) : (
              toolIconMapping[name] || <span style={{ fontSize: "0.4em" }}>{name}</span>
            )}
            <div className="tool-tooltip">{name}</div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
