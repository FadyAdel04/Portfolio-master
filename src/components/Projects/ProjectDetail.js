import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Particle from "../Particle";
import { Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"; // Arrow icons
import Toolstack from "../About/Toolstack";
import Techstack from "../About/Techstack";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "../CustomArrow";
import "./ProjectDetail.css";
import { supabase } from "../../utils/supabase";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data) {
        const mappedData = data.map(p => ({
          ...p,
          imgPath: p.img_url,
          demoLink: p.demo_link,
          ghLink: p.gh_link,
          keyFeatures: p.key_features || [],
          imagePaths: Array.isArray(p.image_paths) ? p.image_paths : (p.image_paths ? p.image_paths.split(',').map(s=>s.trim()) : [])
        }));
        setProjectsList(mappedData);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const project = projectsList.find((p) => String(p.id) === String(projectId));

  if (loading) {
     return <div className="project-not-found" style={{color: "white", textAlign: "center", padding: "100px"}}>Loading project details...</div>;
  }

  if (!project) {
    return (
      <div className="project-not-found" style={{color: "white", textAlign: "center", padding: "100px"}}>
        <h2>Project not found.</h2>
        <Button onClick={() => navigate("/project")} variant="primary" style={{marginTop: "20px"}}>Back to Projects</Button>
      </div>
    );
  }

  const currentProjectIndex = projectsList.findIndex(
    (p) => String(p.id) === String(projectId)
  );
  const nextProjectId =
    projectsList[(currentProjectIndex + 1) % projectsList.length]?.id;
  const prevProjectId =
    projectsList[(currentProjectIndex - 1 + projectsList.length) % projectsList.length]?.id;

  const handleNext = () => {
    navigate(`/project/${nextProjectId}`);
  };

  const handlePrev = () => {
    navigate(`/project/${prevProjectId}`);
  };

  const divStyle = {
    color: "#c889e6",
  };

  const imageSlider = [project.imgPath, ...(project.imagePaths || [])].filter(Boolean);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  // Get previous and next project details for images
  const prevProject = projectsList.find((p) => p.id === prevProjectId);
  const nextProject = projectsList.find((p) => p.id === nextProjectId);

  return (
    <div className="project-detail-section">
      <div className="project-detail-container">
        <div className="project-detail-row">
          <div className="project-image-container">
            <Slider {...settings}>
              {imageSlider.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="project-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="project-details">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <p className="project-date">
              <strong style={divStyle}>Completed on:</strong> {project.date}
            </p>
            <div className="mt-4">
              <Button
                variant="primary"
                href={project.ghLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub /> &nbsp; {project.isBlog ? "Blog" : "GitHub"}
              </Button>{" "}
              {!project.isBlog && project.demoLink && (
                <Button
                  variant="primary"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "10px" }}
                >
                  <CgWebsite /> &nbsp; Demo
                </Button>
              )}
            </div>
          </div>
        </div>

        {project.keyFeatures && (
          <div className="key-features-container">
            <h2 className="key-features-title">Key Features</h2>
            <ul className="key-features-list">
              {project.keyFeatures.map((feature, index) => {
                const [title, ...descriptionParts] = feature.split(": ");
                const description = descriptionParts.join(": ");

                return (
                  <li key={index} className="list-group-item">
                    <span style={{ color: "#c889e6", fontWeight: "bold" }}>
                      {title}:
                    </span>{" "}
                    <span style={{ color: "#ffffff" }}>{description}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="skills-container">
          <h2 className="section-title">Skills and Technologies</h2>
          <Techstack
            skills={project.skills}
            technologies={project.technologies}
          />
        </div>

        <div className="skills-container">
          <h2 className="section-title">Tools Used</h2>
          <Toolstack tools={project.tools || []} />
        </div>
      </div>

      <div className="skills-container">
        <h2 className="section-title">More Projects</h2>
        <div className="project-image-row">
          {prevProject && (
            <img
              src={prevProject.imgPath}
              alt={`${prevProject.title} Project`}
              className="project-row-image"
              style={{ marginRight: "10px" }} // Optional: Add spacing between images
            />
          )}
          {nextProject && (
            <img
              src={nextProject.imgPath}
              alt={`${nextProject.title} Project`}
              className="project-row-image"
            />
          )}
        </div>
        <div className="project-title-row">
          <p className="project-title">{prevProject?.title}</p>
          <h3 className="project-title">{nextProject?.title}</h3>
        </div>
        <div className="navigation-buttons">
          <Button onClick={handlePrev} variant="primary">
            <AiOutlineArrowLeft /> Previous Project
          </Button>
          <Button
            onClick={handleNext}
            variant="primary"
            style={{ marginLeft: "10px" }}
          >
            Next Project <AiOutlineArrowRight />
          </Button>
        </div>
      </div>

      <Particle />
    </div>
  );
};

export default ProjectDetail;
