import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your project images here
import imaginify from "../../Assets/Projects/imaginify.png";
import gym from "../../Assets/Projects/gym.png";
import techTrove from "../../Assets/Projects/techTrove.png";
import novil from "../../Assets/Projects/novil.png";
import chat from "../../Assets/Projects/chat.png";
import courses from "../../Assets/Projects/courses.png";
import brain from "../../Assets/Projects/brain.png";
import car from "../../Assets/Projects/car.png";
import space from "../../Assets/Projects/space.png";
import store from "../../Assets/Projects/store.png";
import travel from "../../Assets/Projects/travel.png";
import red from "../../Assets/Projects/red.png";
import zen from "../../Assets/Projects/zen.png";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Animation should happen only once
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  const projects = [
    {
      imgPath: techTrove,
      title: "techTrove Shop",
      description:
        "This website serves as a platform for technology enthusiasts to explore and purchase a variety of gadgets, electronics and accessories. Key Features: User-friendly interface: The website features a sleek and intuitive design",
      ghLink: "https://github.com/FadyAdel04/Tech-Trove-Shop",
      demoLink: "https://tech-trove-shop.vercel.app/",
    },
    {
      imgPath: imaginify,
      title: "imaginify AI Platform",
      description:
        "imaginify AI Platform:Creative Tools: Imaginify offers tools for image restoration, generative fill, and object removal.Usage Credits: The platform operates on a credit system, which users can purchase to access services.",
      ghLink: "https://github.com/FadyAdel04/Imaginify",
      demoLink: "https://imaginify-eight-pi.vercel.app/",
    },
    {
      imgPath: chat,
      title: "chat 2 chat app",
      description:
        "A chat room where users can exchange messages. The main function is real-time communication, allowing users to interact with each other. The technology behind this chat room can include web sockets, and client-server architecture",
      ghLink: "https://github.com/FadyAdel04/chat-2-chat",
      demoLink: "https://chat-2-chat.vercel.app/",
    },
    {
      imgPath: novil,
      title: "Novil Academy",
      description:
        "Novil Academy: Empowering learning through innovation Embark on a journey of discovery and personal growth with Nouvel Academy. Whether you're looking to advance your career, explore new interests, or simply expand your horizons, our platform provides the tools and resources you need to succeed. Start your educational journey today!",
      ghLink: "https://github.com/FadyAdel04/Nouvil-Academy",
      demoLink: "https://fadyadel04.github.io/Nouvil-Academy/",
    },
    {
      imgPath: gym,
      title: "Fitness Gym",
      description:
        "Fitness Club: A home exercise platform offering personalized workout routines. Explore Exercises: Users can search for various exercises tailored to their needs.",
      ghLink: "https://github.com/FadyAdel04/Fitness-Gym",
      demoLink: "https://fitness-hlv7jbrji-fady-adels-projects.vercel.app/",
    },
    {
      imgPath: courses,
      title: "Eclipseful learining platform",
      description:
        "Programming Specializations: Offers a variety of free programming courses, allowing users to choose their preferred specialization. Course Specialties: Provides learning experiences in web development, data science, UI/UX design, business analytics, digital marketing, and cloud computing essentials.",
      ghLink: "https://github.com/FadyAdel04/Courses-next",
      demoLink: "https://courses-next-seven.vercel.app/",
    },
    {
      imgPath: brain,
      title: "BrainWave-AI",
      description:
        "AI Chat Capabilities: Brainwave offers an AI chatbot that understands and responds to user queries using natural language processing. Features: Includes photo and video generation, smart automation, top-notch security, and the ability to customize the chatbot.",
      ghLink: "https://github.com/FadyAdel04/BrainWave-AI",
      demoLink: "https://brain-wave-ai.vercel.app/",
    },
    {
      imgPath: car,
      title: "CarRent-App",
      description:
        "Effortless Booking: Streamlined process for renting cars. Car Catalogue: A variety of cars including Volkswagen Tiguan, Honda Odyssey, and Kia Stinger.",
      ghLink: "https://github.com/FadyAdel04/Car-RentApp",
      demoLink: "https://car-rent-app-chi.vercel.app/",
    },
    {
      imgPath: space,
      title: "TCJ-SPACE",
      description:
        "TCJ-SPACE: A platform related to technology, possibly involving satellites and orbiting the earth. Content Style: The page uses placeholder text (Lorem ipsum), suggesting it’s under construction or in a template form.",
      ghLink: "https://github.com/FadyAdel04/Space-website-React",
      demoLink: "https://space-website-react-vert.vercel.app/",
    },
    {
      imgPath: store,
      title: "Karma Master E-commerce",
      description:
        "Nike New Collection: The page features multiple listings for Nike’s new collection, emphasizing the option to “Add to Bag” for purchase. Customer Support: The page mentions free delivery, return policy, 24/7 support, and secure payment as part of their customer service offerings.",
      ghLink: "https://github.com/FadyAdel04/Karma-master-Ecommerce",
      demoLink: "https://karma-master-ecommerce.vercel.app/",
    },
    {
      imgPath: travel,
      title: "Travel App: Explore the World!",
      description:
        "Adventure Assistance: Hilink offers an app to guide adventurers through nature, providing offline maps and augmented reality technology for easy navigation. Community Contributions: The app features new locations monthly, shared by a global community of climbers.",
      ghLink: "https://github.com/FadyAdel04/Travel-App-Template1",
      demoLink: "https://travel-app-template.vercel.app/",
    },
    {
      imgPath: red,
      title: "Red Store online Shop",
      description:
        "Workout Fashion: The page highlights a range of workout apparel with a focus on style and consistency in fitness. Featured Products: It showcases various products like T-shirts, shoes, and accessories with their prices. Latest Offerings: The latest additions include sporty footwear and a black watch from Fossil.",
      ghLink: "https://github.com/FadyAdel04/E-commers",
      demoLink: "https://fadyadel04.github.io/E-commers/",
    },
    {
      imgPath: zen,
      title: "TBH-Zen resort",
      description:
        "TBH is a hospitality entity that owns both resorts & restaurant based in Hurghada, Egypt We mainly present the idea of Boutique Hotels in Hurghada where we merge quality with service Guest Experience: They aim to provide a memorable experience through high-quality products and services, aspiring to expand their boutique hotels and restaurants across Egypt.",
      ghLink: "https://github.com/FadyAdel04/TBH-ZEN-Resort",
      demoLink: "https://fadyadel04.github.io/TBH-ZEN-Resort/index.html",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col
              md={4}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={100}
              key={index}
            >
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
