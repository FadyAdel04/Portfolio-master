import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "aos/dist/aos.css";
import AOS from "aos";
import { supabase } from "../../utils/supabase";

// Images are imported dynamically from Supabase

function Projects() {


  const [projectList, setProjectList] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data) {
        const mappedData = data.map(p => ({
          ...p,
          imgPath: p.img_url,
          demoLink: p.demo_link,
          ghLink: p.gh_link,
          keyFeatures: p.key_features || []
        }));
        setProjectList(mappedData);
        setFilteredProjects(mappedData);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projectList);
    } else {
      setFilteredProjects(projectList.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projectList]);

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
    announcement.textContent = `Filter changed to ${activeFilter}. Showing ${filteredProjects.length} projects.`;
    document.body.appendChild(announcement);
    
    // Clean up after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [activeFilter, filteredProjects.length]);

  // Get unique categories
  const categories = ["All", ...new Set(projectList.map(project => project.category).filter(Boolean))];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
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
          id={`projects-${activeFilter.toLowerCase().replace(/\s+/g, '-')}`}
          aria-labelledby={`filter-${activeFilter.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {filteredProjects.map((project, index) => (
            <Col
              md={4}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              key={project.id}
            >
              <ProjectCard
                id={project.id}
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                category={project.category}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
