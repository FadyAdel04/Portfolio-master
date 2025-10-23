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
          position: "relative",
          overflow: "hidden"
        }}>
          <div 
            className="filter-scroll-container" 
            role="tablist"
            aria-label="Certificate category filters"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              padding: "20px 0",
              position: "relative",
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" }
            }}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                role="tab"
                id={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                aria-selected={activeFilter === category}
                aria-controls={`certificates-${category.toLowerCase().replace(/\s+/g, '-')}`}
                tabIndex={activeFilter === category ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveFilter(category);
                  } else if (e.key === 'ArrowLeft' && index > 0) {
                    e.preventDefault();
                    setActiveFilter(categories[index - 1]);
                  } else if (e.key === 'ArrowRight' && index < categories.length - 1) {
                    e.preventDefault();
                    setActiveFilter(categories[index + 1]);
                  }
                }}
                style={{
                  padding: "12px 24px",
                  borderRadius: "50px",
                  border: "2px solid transparent",
                  backgroundColor: activeFilter === category 
                    ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                    : "rgba(255, 255, 255, 0.1)",
                  color: activeFilter === category ? "white" : "#b8b8b8",
                  fontSize: "14px",
                  fontWeight: activeFilter === category ? "600" : "500",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: activeFilter === category 
                    ? "0 8px 32px rgba(102, 126, 234, 0.4)" 
                    : "0 4px 16px rgba(0, 0, 0, 0.1)",
                  transform: activeFilter === category ? "translateY(-2px)" : "translateY(0)",
                  minWidth: "fit-content",
                  whiteSpace: "nowrap",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== category) {
                    e.target.style.backgroundColor = "rgba(102, 126, 234, 0.2)";
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "translateY(-1px)";
                    e.target.style.boxShadow = "0 6px 24px rgba(102, 126, 234, 0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== category) {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.color = "#b8b8b8";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
                  }
                }}
              >
                <span style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  {category}
                  {activeFilter === category && (
                    <span style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      animation: "pulse 2s infinite"
                    }}></span>
                  )}
                </span>
                {activeFilter === category && (
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "50px",
                    zIndex: 1
                  }}></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile scroll indicator */}
          <div style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
            width: "30px",
            height: "100%",
            pointerEvents: "none",
            display: "none"
          }} className="scroll-indicator"></div>
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
