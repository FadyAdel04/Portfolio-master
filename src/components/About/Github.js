import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Github() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
    });
  }, []);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", color:"#fff" }} data-aos="fade-up" data-aos-duration="3000">
    <h1 className="project-heading" style={{ color: "#c889e6", textAlign: "center", marginBottom: "20px" }}>
    <strong className="purple">Day's i</strong> Code
  </h1>
      <GitHubCalendar
        username="FadyAdel04"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        
      />
    </Row>
  );
}

export default Github;
