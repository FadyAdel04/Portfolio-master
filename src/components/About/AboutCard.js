import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fady Adel</span>
            from <span className="purple"> Alexandria, Egypt.</span>
            <br />
            I am currently a Web Developer || software developer.
            <br />
            I study in Computer Science and Artificial Intelligence
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning Germany
            </li>
            <li className="about-activity">
              <ImPointRight /> Browse all news in technology field
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fady Adel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
