import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "emailjs-com"; // Import EmailJS
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css";
import { FiSend } from "react-icons/fi"; // Import an icon from react-icons
import contactImage from "../../Assets/contact.svg"; // Add an image
import "./Contact.css"; // Custom styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_9xyfqiv", // Replace with your EmailJS service ID
        "template_ek7uzi6", // Replace with your EmailJS template ID
        formData,
        "bIs7yKutGip5UZ6g4" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send the message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section>
      <Container fluid className="contact-section">
        <Container className="contact-content">
          <Row>
            <Col md={7} className="contact-header">
              <h1 className="heading">Get In Touch!</h1>
              <h1 className="heading-name">
                Contact <strong className="main-name">Fady Adel Elsaid</strong>
              </h1>
              <div style={{ paddingTop: 30 }}>
                <p>Feel free to drop a message. I will get back to you soon!</p>
              </div>
              <img
                src={contactImage}
                alt="Contact Me"
                className="img-fluid contact-image"
                style={{ maxHeight: "300px", marginTop: "20px" }}
              />
            </Col>

            <Col md={5} className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <button type="submit" className="submit-btn">
                  <FiSend style={{ marginRight: "8px" }} />
                  Send
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
      <ToastContainer theme="dark"/>
      <Particle />
    </section>
  );
};

export default Contact;
