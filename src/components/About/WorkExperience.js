import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    id: 1,
    title: "PHP and SQL Intern",
    company: "Software Solutions Company",
    duration: "June 2023 – Sep 2023",
    type: "Internship Remotly",
    role: [
      "Reduced database query response time by 20% through optimization techniques.",
      "Developed dynamic web applications using PHP, improving overall functionality and user experience.",
    ],
  },
  {
    id: 2,
    title: "Artificial Intelligence Intern",
    company: "Information Technology Institute (ITI)",
    duration: "Sep 2023– Oct 2023",
    type: "Internship Remotly",
    role: [
      "Prepared datasets (10K+ rows) for machine learning, achieving 90% model accuracy.",
      "Built foundational expertise in deep learning, data preprocessing, and neural network design.",
    ],
  },
  {
    id: 3,
    title: "CIB Summer Internship",
    company: "Commercial International Bank (CIB)",
    duration: "Aug 2024– Oct 2024",
    type: "Alexandria, Egypt",
    role: [
      "Analyzed financial data for 100+ clients, enhancing reporting efficiency by 25%.",
      "Gained hands-on experience in SAS software and data analytics for banking operations",
      "Collaborated with senior developers to implement new features and optimize existing ones.",
    ],
  },
  {
    id: 4,
    title: "React.js Internship",
    company: "Web Masters Company",
    duration: "january 2025– present",
    type: "Internship Remotly",
    role: [
      "Developed and maintained responsive web applications using React.js.",
      "Implemented state management using Redux Toolkit for more efficient data flow and predictable state.",
      "Assisted in the integration of third-party APIs to enhance functionality.",
    ],
  },
];

function WorkExperience() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      offset: 100, // Offset before animation starts
      easing: "ease-in-out", // Animation easing
    });
  }, []);

  return (
    <div className="work-experience-container">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="timeline-card">
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-duration">{exp.duration}</p>
              <p className="timeline-type">
                <strong>Type:</strong> {exp.type}
              </p>
              <ul className="timeline-role">
                {exp.role.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
