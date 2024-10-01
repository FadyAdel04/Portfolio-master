import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function CertificateCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Organization logos and View Certificate button in the same row */}
        <div
          className="org-logos-and-button"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}
        >
          {/* Display organization logos */}
          {props.orgLogos && (
            <div className="org-logos" style={{ display: "flex", gap: "10px" }}>
              {props.orgLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`org-logo-${index}`}
                  style={{ width: "70px", height: "50px", borderRadius: "5px" }}
                />
              ))}
            </div>
          )}

          {/* Live Certificate Link */}
          {props.liveLink && (
            <Button
              variant="primary"
              href={props.liveLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;{"View Certificate"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
