// About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack"; // Adjusted import path
import WorkExperience from "./WorkExperience";


function About() {
  // Define the skills and technologies you want to show on the About page
  const skills = ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript","TypeScript", "React", "Next.js", "PHP", "MySQL", "Python", "Java", "C++", "C#", "ShadCN", "Sanity", "Net", "Open Ai"];
  const technologies = [ ];

  // Define the tools you want to show on the About page
  const tools = [
    "VS Code",
    "VS Community",
    "Postman",
    "Slack",
    "Vercel",
    "Firebase",
    "Strapi",
    "GitHub",
    "API",
    "Git",
    "Node.js",
    "Stripe",
    "Windows",
    "Animation",
    "Responsive",
  ];

  return (
    <Container fluid className="about-section" style={{ backgroundColor: "#0d1117" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            className="home-header"
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", paddingTop: "45px", color: "#c889e6" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img home-image"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ color: "#c889e6", textAlign: "center", marginBottom: "20px" }}>
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack skills={skills} technologies={technologies} />

        <h1 className="project-heading" style={{ color: "#c889e6", textAlign: "center", marginBottom: "20px" }}>
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack tools={tools} />
        
        <h1 className="project-heading" style={{ color: "#c889e6", textAlign: "center", marginBottom: "20px" }}>
          Work<strong className="purple">Experience</strong>
        </h1>
        <WorkExperience />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
