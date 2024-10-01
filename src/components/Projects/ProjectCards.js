import React from "react";
import { Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProjectCards(props) {
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    navigate(`/project/${props.id}`);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </Button>{" "}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; {"Demo"}
            </Button>
          )}{" "}
          <Button
            variant="secondary"
            onClick={handleMoreDetails}
            style={{
              backgroundColor: "#5A67D8", // New background color
              color: "#FFFFFF", // Text color
              border: "none", // Remove border
              transition: "background-color 0.3s", // Transition for hover effect
              marginLeft: "10px", // Add left margin for spacing
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#4C51BF")
            } // Darker shade on hover
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#5A67D8")
            } // Revert to original color
          >
            <FaInfoCircle /> &nbsp; More Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
