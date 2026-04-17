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
import { supabase } from "../../utils/supabase";
import { useState, useEffect } from "react";


function About() {
  const [skills, setSkills] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const { data } = await supabase.from('about_info').select('*');
      if (data) {
        const dbSkills = data.find(d => d.type === 'skills')?.items || [];
        const dbTools = data.find(d => d.type === 'tools')?.items || [];
        setSkills(dbSkills);
        setTools(dbTools);
      }
    };
    fetchAbout();
  }, []);

  const technologies = [];

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
