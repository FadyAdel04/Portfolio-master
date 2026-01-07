import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";
import AOS from "aos";
import "aos/dist/aos.css";


// Import your certificate and organization logo images here
import ai from "../../Assets/cirtificate/Ai.png";
import linked from "../../Assets/cirtificate/cib-linked.png";
import sas from "../../Assets/cirtificate/cib-sas.png";
import deep from "../../Assets/cirtificate/deep.png";
import html from "../../Assets/cirtificate/html.png";
import iti from "../../Assets/cirtificate/iti.jpeg";
import js from "../../Assets/cirtificate/js.png";
import software from "../../Assets/cirtificate/software.png";
import vision from "../../Assets/cirtificate/vision.png";
import fady from "../../Assets/cirtificate/fady.jpg";
import esential from "../../Assets/cirtificate/essintial.png";
import practice from "../../Assets/cirtificate/practice.png";
import frank from "../../Assets/cirtificate/cib-frank.png"
import cibwow from "../../Assets/cirtificate/cib.png";
import mongo from "../../Assets/cirtificate/mongoDB.png";
import itida from "../../Assets/cirtificate/itida.jpg";

import cib from "../../Assets/company/cib.png"
import linkedin from "../../Assets/company/linkedin.png"
import sasa from "../../Assets/company/sas.png"
import Microsoft from "../../Assets/company/microsoft.png"
import itii from "../../Assets/company/iti.jpg"
import kaggle from "../../Assets/company/kaggle.png"
import sololearn from "../../Assets/company/sololearn.png"
import brain from "../../Assets/company/brain.png"
import Frankfurt from "../../Assets/company/frankfort.png"
import mahara from "../../Assets/company/mahara.png"
import gigs from "../../Assets/company/itida.jpg"


// Add more certificates as needed

const certificates = [
    {
      imgPath: itida, // replace with your actual ITIDA image import variable
      title: "ITIDA Gigs – Web Development Training",
      description:
        "A professional freelancing and web development training program by ITIDA, focused on enhancing technical expertise,",
      orgLogos: [gigs], // replace with your actual ITIDA logo variable if available
      category: "Web Development",
    },    
    {
      imgPath: mongo,
      title: "Introduction to MongoDB",
      description:
      "This course introduces you to NoSql databases and Mongo DB capabilities as one of NoSql DBMS to create your flexible, lightweight and cloud adaptive database.",
      orgLogos: [mahara],
      liveLink: "https://maharatech.gov.eg/mod/customcert/view.php?id=8665&downloadown=1",
      category: "Database",
    },
    {
      imgPath: frank,
      title: "CIB - Frankfurt Summer training 2024",
      description:
        "This program focused on the principles, approaches, enhancing the participant's ability to effectively engage and collaborate within a professional environment.",
      orgLogos: [cib, Frankfurt],
      category: "Professional Development",
    },
    {
      imgPath: linked,
      title: "CIB - LinkedIn Summer training 2024",
      description:
        "gaining valuable insights into the banking industry and enhancing professional skills through LinkedIn's curated learning modules. Acquired knowledge in financial services.",
      orgLogos: [cib, linkedin],
      category: "Professional Development",
    },
    {
      imgPath: sas,
      title: "CIB - SaS Summer training 2024",
      description:
      "ocusing on data analytics and business intelligence. Gained hands-on experience with SaS software, learning advanced techniques in data analysis, reporting, and visualization. ",
      orgLogos: [cib, sasa],
      category: "Data Analytics",
    },
    {
      imgPath: cibwow,
      title: "CIB - LinkedIn Summer training 2024",
      description:
        "HR Learning & Development program. This comprehensive course covered essential topics such as talent management, employee engagement.",
      orgLogos: [cib],
      category: "Professional Development",
    },
    {
      imgPath: ai,
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      description:
      "gaining foundational knowledge in AI technologies and their applications. Explored key concepts in generative AI",
      orgLogos: [Microsoft, linkedin],
      liveLink: "https://www.linkedin.com/learning/certificates/e0c29a91541e5d302b625cf2867f9f21b0813894108ed5b9088482a36f627b56?trk=share_certificate",
      category: "Artificial Intelligence",
    },
    {
      imgPath: software,
      title: "Career Essentials in Software Development by Microsoft and LinkedIn",
      description:
        "Discover the skills needed for a career in software development.",
        orgLogos: [Microsoft, linkedin],
        liveLink: "https://www.linkedin.com/learning/certificates/1ffc333e180eb9fefed09e0c2403744479651b171120d974ce627ff0402fbe1a?trk=share_certificate",
        category: "Software Development",
      },
      {
        imgPath: iti,
        title: "Artificial Intelligence ITI [72 hrs]",
        description:
        " focusing on core AI concepts and applications. Gained hands-on experience in machine learning, neural networks, and data processing. Developed",
        orgLogos: [itii],
        category: "Artificial Intelligence",
      },
      {
        imgPath: deep,
        title: "Kaggle Intro to Deep Learning",
        description:
        "gaining a solid understanding of neural networks and their architectures. Learned essential deep learning concepts, including model building, training, and optimization",
        orgLogos: [kaggle],
      liveLink: "https://www.kaggle.com/learn/certification/fadyadel04/intro-to-deep-learning",
      category: "Machine Learning",
    },
    {
      imgPath: vision,
      title: "Kaggle Computer Vision",
      description:
        "acquiring foundational knowledge in image processing and analysis techniques. Learned to apply deep learning models for tasks like image classification, object detection",
        orgLogos: [kaggle],
        liveLink: "https://www.kaggle.com/learn/certification/fadyadel04/computer-vision",
        category: "Machine Learning",
      },
      {
        imgPath: html,
        title: "HTML Course from SoloLearn",
        description:
        "This FREE course will teach you how to design a web page using HTML. Complete a series of hands-on exercises and practice while writing real HTML code.",
        orgLogos: [sololearn],
      liveLink: "https://www.sololearn.com/certificates/CT-LAYKFLSG",
      category: "Web Development",
    },
    {
      imgPath: js,
      title: "JavaScript Course from SoloLearn",
      description:
        "Learn all the basic features of JavaScript, including making your website more interactive, changing website content, validating forms, and so much more.",
        orgLogos: [sololearn],
      liveLink: "https://www.sololearn.com/certificates/CT-NU52HFIC",
      category: "Web Development",
    },
    {
      imgPath: fady, 
      title: "How To Be Programmer Workshop",
      description:
        "Attended a programming workshop titled 'How To Be Programmer' under the Discover - Estak4f workshops program. Gained insights into programming fundamentals",
      orgLogos: [brain], 
      category: "Programming",
    },
    {
      imgPath: esential, 
      title: "data-literacy-essentials SAS",
      description:
        "covering fundamental concepts of data literacy. Gained skills in understanding and interpreting data, enabling informed decision-making in various business contexts.",
      orgLogos: [sasa], 
      liveLink: "https://www.credly.com/badges/eea29711-24ef-482a-bb58-dd138861a76b",
      category: "Data Analytics",
    },
    {
      imgPath: practice, 
      title: "data-literacy-in-practice SAS",
      description:
        "focusing on the practical applications of data literacy in business and analytics. Learned how to analyze, interpret, and effectively communicate data.",
      orgLogos: [sasa], 
      liveLink: "https://www.credly.com/earner/earned/badge/d42e4584-44d2-4db3-a3a6-5f8bacc22b9f",
      category: "Data Analytics",
    }
  ];

function Certificates() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredCertificates, setFilteredCertificates] = useState(certificates);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Animation should happen only once
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  // Filter certificates based on active filter
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredCertificates(certificates);
    } else {
      setFilteredCertificates(certificates.filter(certificate => certificate.category === activeFilter));
    }
  }, [activeFilter]);

  // Focus management for accessibility
  useEffect(() => {
    const activeButton = document.querySelector('.filter-button.active');
    if (activeButton) {
      activeButton.focus();
    }
    
    // Announce filter change to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = `Filter changed to ${activeFilter}. Showing ${filteredCertificates.length} certificates.`;
    document.body.appendChild(announcement);
    
    // Clean up after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [activeFilter, filteredCertificates.length]);

  // Get unique categories
  const categories = ["All", ...new Set(certificates.map(certificate => certificate.category))];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've achieved recently.
        </p>
        
        {/* Filter Buttons */}
        <div className="filter-container" style={{ 
          marginBottom: "40px", 
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px"
        }}>
          {categories.map((category, index) => (
            <button
              key={category}
              id={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveFilter(category)}
              className={`filter-button ${activeFilter === category ? 'active' : ''}`}
              style={{
                padding: "10px 20px",
                borderRadius: "30px",
                border: activeFilter === category ? "2px solid #c770f0" : "2px solid rgba(199, 112, 240, 0.3)",
                backgroundColor: activeFilter === category ? "rgba(199, 112, 240, 0.2)" : "transparent",
                color: activeFilter === category ? "white" : "rgba(255, 255, 255, 0.8)",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                boxShadow: activeFilter === category ? "0 0 15px rgba(199, 112, 240, 0.4)" : "none",
                backdropFilter: "blur(5px)",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== category) {
                  e.target.style.borderColor = "#c770f0";
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category) {
                  e.target.style.borderColor = "rgba(199, 112, 240, 0.3)";
                  e.target.style.color = "rgba(255, 255, 255, 0.8)";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        <Row 
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          role="tabpanel"
          id={`certificates-${activeFilter.toLowerCase().replace(/\s+/g, '-')}`}
          aria-labelledby={`filter-${activeFilter.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {filteredCertificates.map((certificate, index) => (
            <Col
              md={4}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={100}
              key={index}
            >
              <CertificateCard
                imgPath={certificate.imgPath}
                orgLogos={certificate.orgLogos}
                title={certificate.title}
                description={certificate.description}
                liveLink={certificate.liveLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
