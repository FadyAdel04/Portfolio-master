// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificate/Certificates";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact"; // Import Contact component
import Resume from "./components/Resume/ResumeNew";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import your project images here
import papa from "./Assets/Projects/papa.png";
import vivaDecor from "./Assets/Projects/viva.png";
import amazon from "./Assets/Projects/amazone.png";
import moviesApp from "./Assets/Projects/movie.png";
import imaginify from "./Assets/Projects/imaginify.png";
import gym from "./Assets/Projects/gym.png";
import techTrove from "./Assets/Projects/techTrove.png";
import novil from "./Assets/Projects/novil.png";
import chat from "./Assets/Projects/chat.png";
import courses from "./Assets/Projects/courses.png";
import brain from "./Assets/Projects/brain.png";
import car from "./Assets/Projects/car.png";
import space from "./Assets/Projects/space.png";
import store from "./Assets/Projects/store.png";
import travel from "./Assets/Projects/travel.png";
import red from "./Assets/Projects/red.png";
import zen from "./Assets/Projects/zen.png";
import holla from "./Assets/Projects/holla.png";
import shopping from "./Assets/Projects/shopping.png";
import bootstrap from "./Assets/Projects/bootstrap.png";
import dash from "./Assets/Projects/dash.png";
import spicial from "./Assets/Projects/spicial.png";
import phone from "./Assets/Projects/phone.png";
import dev from "./Assets/Projects/dev.png";
import phlox from "./Assets/Projects/phlox.png";
import edited from "./Assets/Projects/edited.png";
import crud from "./Assets/Projects/crud.png";
import health from "./Assets/Projects/health.png";
import crud1 from "./Assets/projectsImages/crud/2.png";
import hospital from "./Assets/Projects/hospital.png";
import solar from "./Assets/Projects/solar.png";
import register from "./Assets/Projects/login.png";
import souq from "./Assets/Projects/souq.png";
import rawafed from "./Assets/Projects/rawafed.png";
import golden from "./Assets/Projects/golden.png";
import cafeBloom from "./Assets/Projects/cafe.png";

// cafe images
import cafe1 from "./Assets/projectsImages/cafe/2.png";
import cafe2 from "./Assets/projectsImages/cafe/3.png";
import cafe3 from "./Assets/projectsImages/cafe/4.png";
import cafe4 from "./Assets/projectsImages/cafe/5.png";

// golden images
import golden1 from "./Assets/projectsImages/golden/2.png";
import golden2 from "./Assets/projectsImages/golden/3.png";
import golden3 from "./Assets/projectsImages/golden/4.png";
import golden4 from "./Assets/projectsImages/golden/5.png";
import golden5 from "./Assets/projectsImages/golden/6.png";
import golden6 from "./Assets/projectsImages/golden/7.png";
import golden7 from "./Assets/projectsImages/golden/8.png";
import golden8 from "./Assets/projectsImages/golden/9.png";
import golden9 from "./Assets/projectsImages/golden/10.png";
import golden10 from "./Assets/projectsImages/golden/11.png";
import golden11 from "./Assets/projectsImages/golden/12.png";
import golden12 from "./Assets/projectsImages/golden/13.png";
import golden13 from "./Assets/projectsImages/golden/14.png";
import golden14 from "./Assets/projectsImages/golden/15.png";

//rawafed images
import rawafed1 from "./Assets/projectsImages/rawafed/2.png";
import rawafed2 from "./Assets/projectsImages/rawafed/3.png";
import rawafed3 from "./Assets/projectsImages/rawafed/4.png";
import rawafed4 from "./Assets/projectsImages/rawafed/5.png";
import rawafed5 from "./Assets/projectsImages/rawafed/6.png";
import rawafed6 from "./Assets/projectsImages/rawafed/7.png";
import rawafed7 from "./Assets/projectsImages/rawafed/8.png";
import rawafed8 from "./Assets/projectsImages/rawafed/9.png";
import rawafed9 from "./Assets/projectsImages/rawafed/10.png";
import rawafed10 from "./Assets/projectsImages/rawafed/11.png";
import rawafed11 from "./Assets/projectsImages/rawafed/12.png";
import rawafed12 from "./Assets/projectsImages/rawafed/13.png";
import rawafed13 from "./Assets/projectsImages/rawafed/14.png";
import rawafed14 from "./Assets/projectsImages/rawafed/15.png";
import rawafed15 from "./Assets/projectsImages/rawafed/16.png";
import rawafed16 from "./Assets/projectsImages/rawafed/17.png";
import rawafed17 from "./Assets/projectsImages/rawafed/18.png";
import rawafed18 from "./Assets/projectsImages/rawafed/19.png";

// souq
import souq1 from "./Assets/projectsImages/souq/2.png";
import souq2 from "./Assets/projectsImages/souq/3.png";
import souq3 from "./Assets/projectsImages/souq/4.png";
import souq4 from "./Assets/projectsImages/souq/5.png";
import souq5 from "./Assets/projectsImages/souq/6.png";
import souq6 from "./Assets/projectsImages/souq/7.png";
import souq7 from "./Assets/projectsImages/souq/8.png";
import souq8 from "./Assets/projectsImages/souq/9.png";
import souq9 from "./Assets/projectsImages/souq/10.png";
import souq10 from "./Assets/projectsImages/souq/11.png";

// papa John’s
import papa1 from "./Assets/projectsImages/papa/2.png";
import papa2 from "./Assets/projectsImages/papa/3.png";
import papa3 from "./Assets/projectsImages/papa/4.png";
import papa4 from "./Assets/projectsImages/papa/5.png";
import papa5 from "./Assets/projectsImages/papa/6.png";
import papa6 from "./Assets/projectsImages/papa/7.png";
import papa7 from "./Assets/projectsImages/papa/8.png";
import papa8 from "./Assets/projectsImages/papa/9.png";

// viva decor
import viva1 from "./Assets/projectsImages/viva/1.png";
import viva2 from "./Assets/projectsImages/viva/2.png";
import viva3 from "./Assets/projectsImages/viva/3.png";
import viva4 from "./Assets/projectsImages/viva/4.png";
import viva5 from "./Assets/projectsImages/viva/5.png";

// Amazon images
import amazon1 from "./Assets/projectsImages/amazon/1.png";
import amazon2 from "./Assets/projectsImages/amazon/2.png";
import amazon3 from "./Assets/projectsImages/amazon/3.png";
import amazon4 from "./Assets/projectsImages/amazon/4.png";
import amazon5 from "./Assets/projectsImages/amazon/5.png";
import amazon6 from "./Assets/projectsImages/amazon/6.png";
import amazon7 from "./Assets/projectsImages/amazon/7.png";

// movie images
import movies1 from "./Assets/projectsImages/movie/1.png";
import movies2 from "./Assets/projectsImages/movie/2.png";
import movies3 from "./Assets/projectsImages/movie/3.png";

// register images
import register1 from "./Assets/projectsImages/register/1.png";
import register2 from "./Assets/projectsImages/register/2.png";
import register3 from "./Assets/projectsImages/register/3.png";

// solar images
import solar1 from "./Assets/projectsImages/solar/1.png";
import solar2 from "./Assets/projectsImages/solar/2.png";
import solar3 from "./Assets/projectsImages/solar/3.png";
import solar4 from "./Assets/projectsImages/solar/4.png";
import solar5 from "./Assets/projectsImages/solar/5.png";
import solar6 from "./Assets/projectsImages/solar/6.png";

// hospital images
import hospital1 from "./Assets/projectsImages/hospital/2.png";
import hospital2 from "./Assets/projectsImages/hospital/3.png";
import hospital3 from "./Assets/projectsImages/hospital/4.png";
import hospital4 from "./Assets/projectsImages/hospital/5.png";
import hospital5 from "./Assets/projectsImages/hospital/6.png";
import hospital6 from "./Assets/projectsImages/hospital/7.png";
import hospital7 from "./Assets/projectsImages/hospital/8.png";
import hospital8 from "./Assets/projectsImages/hospital/9.png";

// health image
import health1 from "./Assets/projectsImages/health/2.png";
import health2 from "./Assets/projectsImages/health/3.png";
import health3 from "./Assets/projectsImages/health/4.png";
import health4 from "./Assets/projectsImages/health/5.png";
import health5 from "./Assets/projectsImages/health/6.png";
import health6 from "./Assets/projectsImages/health/7.png";
import health7 from "./Assets/projectsImages/health/8.png";
import health8 from "./Assets/projectsImages/health/9.png";
import health9 from "./Assets/projectsImages/health/10.png";

// tech images
import tech1 from "./Assets/projectsImages/TechTrove shop/2.png";
import tech2 from "./Assets/projectsImages/TechTrove shop/3.png";
import tech3 from "./Assets/projectsImages/TechTrove shop/4.png";
import tech4 from "./Assets/projectsImages/TechTrove shop/5.png";
import tech5 from "./Assets/projectsImages/TechTrove shop/6.png";
import tech6 from "./Assets/projectsImages/TechTrove shop/7.png";
import tech7 from "./Assets/projectsImages/TechTrove shop/8.png";
import tech8 from "./Assets/projectsImages/TechTrove shop/9.png";
import tech9 from "./Assets/projectsImages/TechTrove shop/10.png";
import tech10 from "./Assets/projectsImages/TechTrove shop/11.png";
import tech11 from "./Assets/projectsImages/TechTrove shop/12.png";
import tech12 from "./Assets/projectsImages/TechTrove shop/13.png";
import tech13 from "./Assets/projectsImages/TechTrove shop/14.png";
import tech14 from "./Assets/projectsImages/TechTrove shop/15.png";
import tech15 from "./Assets/projectsImages/TechTrove shop/16.png";

// imaginifay images
import ai1 from "./Assets/projectsImages/imaginify/2.png";
import ai2 from "./Assets/projectsImages/imaginify/3.png";
import ai3 from "./Assets/projectsImages/imaginify/4.png";
import ai4 from "./Assets/projectsImages/imaginify/5.png";
import ai5 from "./Assets/projectsImages/imaginify/6.png";
import ai6 from "./Assets/projectsImages/imaginify/7.png";
import ai7 from "./Assets/projectsImages/imaginify/8.png";

// Holla images
import holla1 from "./Assets/projectsImages/Holla/2.png";
import holla2 from "./Assets/projectsImages/Holla/3.png";
import holla3 from "./Assets/projectsImages/Holla/4.png";
import holla4 from "./Assets/projectsImages/Holla/5.png";
import holla5 from "./Assets/projectsImages/Holla/6.png";
import holla6 from "./Assets/projectsImages/Holla/7.png";
import holla7 from "./Assets/projectsImages/Holla/8.png";
import holla8 from "./Assets/projectsImages/Holla/9.png";
import holla9 from "./Assets/projectsImages/Holla/10.png";
import holla10 from "./Assets/projectsImages/Holla/11.png";
import holla11 from "./Assets/projectsImages/Holla/12.png";
import holla12 from "./Assets/projectsImages/Holla/13.png";
import holla13 from "./Assets/projectsImages/Holla/14.png";

// chat app
import chat1 from "./Assets/projectsImages/Chat/2.png";
import chat2 from "./Assets/projectsImages/Chat/3.png";
import chat3 from "./Assets/projectsImages/Chat/4.png";
import chat4 from "./Assets/projectsImages/Chat/5.png";
import chat5 from "./Assets/projectsImages/Chat/6.png";
import chat6 from "./Assets/projectsImages/Chat/7.png";
import chat7 from "./Assets/projectsImages/Chat/8.png";
import chat8 from "./Assets/projectsImages/Chat/9.png";
import chat9 from "./Assets/projectsImages/Chat/10.png";

// noviel
import novil1 from "./Assets/projectsImages/Nouvil/2.png";
import novil2 from "./Assets/projectsImages/Nouvil/3.png";
import novil3 from "./Assets/projectsImages/Nouvil/4.png";
import novil4 from "./Assets/projectsImages/Nouvil/5.png";
import novil5 from "./Assets/projectsImages/Nouvil/6.png";
import novil6 from "./Assets/projectsImages/Nouvil/7.png";
import novil7 from "./Assets/projectsImages/Nouvil/8.png";
import novil8 from "./Assets/projectsImages/Nouvil/9.png";
import novil9 from "./Assets/projectsImages/Nouvil/10.png";
import novil10 from "./Assets/projectsImages/Nouvil/11.png";
import novil11 from "./Assets/projectsImages/Nouvil/12.png";
import novil12 from "./Assets/projectsImages/Nouvil/13.png";
import novil13 from "./Assets/projectsImages/Nouvil/14.png";

// gym
import gym1 from "./Assets/projectsImages/gym/2.png";
import gym2 from "./Assets/projectsImages/gym/3.png";
import gym3 from "./Assets/projectsImages/gym/4.png";
import gym4 from "./Assets/projectsImages/gym/5.png";

// learning
import learn1 from "./Assets/projectsImages/Learning/2.png";
import learn2 from "./Assets/projectsImages/Learning/3.png";
import learn3 from "./Assets/projectsImages/Learning/4.png";
import learn4 from "./Assets/projectsImages/Learning/5.png";
import learn5 from "./Assets/projectsImages/Learning/6.png";
import learn6 from "./Assets/projectsImages/Learning/7.png";
import learn7 from "./Assets/projectsImages/Learning/8.png";
import learn8 from "./Assets/projectsImages/Learning/9.png";

// Brain
import brain1 from "./Assets/projectsImages/Brain/2.png";
import brain2 from "./Assets/projectsImages/Brain/3.png";
import brain3 from "./Assets/projectsImages/Brain/4.png";
import brain4 from "./Assets/projectsImages/Brain/5.png";
import brain5 from "./Assets/projectsImages/Brain/6.png";
import brain6 from "./Assets/projectsImages/Brain/7.png";
import brain7 from "./Assets/projectsImages/Brain/8.png";
import brain8 from "./Assets/projectsImages/Brain/9.png";
import brain9 from "./Assets/projectsImages/Brain/10.png";

// Car
import car1 from "./Assets/projectsImages/Car/1.png";
import car2 from "./Assets/projectsImages/Car/2.png";

// Space
import space1 from "./Assets/projectsImages/Space/2.png";
import space2 from "./Assets/projectsImages/Space/3.png";
import space3 from "./Assets/projectsImages/Space/4.png";
import space4 from "./Assets/projectsImages/Space/5.png";

// Karama
import karama1 from "./Assets/projectsImages/Karama/2.png";
import karama2 from "./Assets/projectsImages/Karama/3.png";
import karama3 from "./Assets/projectsImages/Karama/4.png";
import karama4 from "./Assets/projectsImages/Karama/5.png";
import karama5 from "./Assets/projectsImages/Karama/6.png";
import karama6 from "./Assets/projectsImages/Karama/7.png";
import karama7 from "./Assets/projectsImages/Karama/8.png";
import karama8 from "./Assets/projectsImages/Karama/9.png";
import karama9 from "./Assets/projectsImages/Karama/10.png";
import karama10 from "./Assets/projectsImages/Karama/11.png";
import karama11 from "./Assets/projectsImages/Karama/12.png";
import karama12 from "./Assets/projectsImages/Karama/13.png";
import karama13 from "./Assets/projectsImages/Karama/14.png";
import karama14 from "./Assets/projectsImages/Karama/15.png";

// Travel
import travel1 from "./Assets/projectsImages/Travel/2.png";
import travel2 from "./Assets/projectsImages/Travel/3.png";
import travel3 from "./Assets/projectsImages/Travel/4.png";
import travel4 from "./Assets/projectsImages/Travel/5.png";

// Red
import red1 from "./Assets/projectsImages/Red/2.png";
import red2 from "./Assets/projectsImages/Red/3.png";
import red3 from "./Assets/projectsImages/Red/4.png";
import red4 from "./Assets/projectsImages/Red/5.png";
import red5 from "./Assets/projectsImages/Red/6.png";
import red6 from "./Assets/projectsImages/Red/7.png";
import red7 from "./Assets/projectsImages/Red/8.png";

// Zen
import zen1 from "./Assets/projectsImages/Zen/2.png";
import zen2 from "./Assets/projectsImages/Zen/3.png";
import zen3 from "./Assets/projectsImages/Zen/4.png";
import zen4 from "./Assets/projectsImages/Zen/5.png";
import zen5 from "./Assets/projectsImages/Zen/6.png";
import zen6 from "./Assets/projectsImages/Zen/7.png";
import zen7 from "./Assets/projectsImages/Zen/8.png";
import zen8 from "./Assets/projectsImages/Zen/9.png";

// Shopping
import shopping1 from "./Assets/projectsImages/Shopping/2.png";
import shopping2 from "./Assets/projectsImages/Shopping/3.png";
import shopping3 from "./Assets/projectsImages/Shopping/4.png";
import shopping4 from "./Assets/projectsImages/Shopping/5.png";
import shopping5 from "./Assets/projectsImages/Shopping/6.png";
import shopping6 from "./Assets/projectsImages/Shopping/7.png";
import shopping7 from "./Assets/projectsImages/Shopping/8.png";
import shopping8 from "./Assets/projectsImages/Shopping/9.png";
import shopping9 from "./Assets/projectsImages/Shopping/10.png";
import shopping10 from "./Assets/projectsImages/Shopping/11.png";
import shopping11 from "./Assets/projectsImages/Shopping/12.png";

// bootstrap
import bootstrap1 from "./Assets/projectsImages/Bootstrap/2.png";
import bootstrap2 from "./Assets/projectsImages/Bootstrap/3.png";
import bootstrap3 from "./Assets/projectsImages/Bootstrap/4.png";
import bootstrap4 from "./Assets/projectsImages/Bootstrap/5.png";
import bootstrap5 from "./Assets/projectsImages/Bootstrap/6.png";
import bootstrap6 from "./Assets/projectsImages/Bootstrap/7.png";

// dash
import dash1 from "./Assets/projectsImages/dash/1.png";

// Spicial
import special1 from "./Assets/projectsImages/Special/2.png";
import special2 from "./Assets/projectsImages/Special/3.png";
import special3 from "./Assets/projectsImages/Special/4.png";
import special4 from "./Assets/projectsImages/Special/5.png";
import special5 from "./Assets/projectsImages/Special/6.png";
import special6 from "./Assets/projectsImages/Special/7.png";

// Phone
import phone1 from "./Assets/projectsImages/Phone/2.png";
import phone2 from "./Assets/projectsImages/Phone/3.png";
import phone3 from "./Assets/projectsImages/Phone/4.png";
import phone4 from "./Assets/projectsImages/Phone/5.png";

// dev
import dev1 from "./Assets/projectsImages/dev/2.png";
import dev2 from "./Assets/projectsImages/dev/3.png";
import dev3 from "./Assets/projectsImages/dev/4.png";
import dev4 from "./Assets/projectsImages/dev/5.png";
import dev5 from "./Assets/projectsImages/dev/6.png";
import dev6 from "./Assets/projectsImages/dev/7.png";
import dev7 from "./Assets/projectsImages/dev/8.png";
import dev8 from "./Assets/projectsImages/dev/9.png";
import dev9 from "./Assets/projectsImages/dev/10.png";

// Phlox
import phlox1 from "./Assets/projectsImages/Phlox/2.png";
import phlox2 from "./Assets/projectsImages/Phlox/3.png";
import phlox3 from "./Assets/projectsImages/Phlox/4.png";
import phlox4 from "./Assets/projectsImages/Phlox/5.png";
import phlox5 from "./Assets/projectsImages/Phlox/6.png";
import phlox6 from "./Assets/projectsImages/Phlox/7.png";
import phlox7 from "./Assets/projectsImages/Phlox/8.png";
import phlox8 from "./Assets/projectsImages/Phlox/9.png";
import phlox9 from "./Assets/projectsImages/Phlox/10.png";
import phlox10 from "./Assets/projectsImages/Phlox/11.png";

// blog
import blog1 from "./Assets/projectsImages/blog/1.png";
import blog2 from "./Assets/projectsImages/blog/2.png";
import blog3 from "./Assets/projectsImages/blog/3.png";
import blog4 from "./Assets/projectsImages/blog/4.png";
import blog5 from "./Assets/projectsImages/blog/5.png";
import blog6 from "./Assets/projectsImages/blog/6.png";

// edited
import edited1 from "./Assets/projectsImages/edited/1.png";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Updated projects array with tools
  const projects = [
    {
      id: 1,
      imgPath: health,
      imagePaths: [
        health1,
        health2,
        health3,
        health4,
        health5,
        health6,
        health7,
        health8,
        health9,
      ],
      title: "Care Pulse Health care",
      description:
        "Care Pulse Health Care is a platform dedicated to providing comprehensive health services and wellness information. It offers users easy access to healthcare professionals, services, and resources tailored to their needs.",
      ghLink: "https://github.com/FadyAdel04/CarePulesHealthCare",
      demoLink: "https://care-pules-health-care.vercel.app/",
      skills: ["React", "Next.js", "TypeScript", "Tailwind"],
      technologies: [],
      tools: ["VS Code", "API", "AppWrite", "Vercel", "GitHub", "SMS"], // Added tools
      keyFeatures: [
        "Healthcare Services: Comprehensive directory of medical services, including general practice, specialized care, and wellness programs.",
        "Doctor Profiles: Detailed profiles of healthcare professionals, including specialties, qualifications, and availability.",
        "Appointment Booking: User-friendly appointment scheduling system with real-time availability updates.",
        "Health Articles: Access to a wide range of wellness and health-related articles.",
        "User Authentication: Secure sign up and log in system for personalized services.",
        "Responsive Design: Optimized for seamless use across desktop, tablet, and mobile devices.",
        "Patient Reviews: A feedback system for patients to rate and review healthcare services.",
        "Health Tips: Regular updates with tips and advice on maintaining a healthy lifestyle.",
        "Contact and Support: Easy-to-access contact forms and support options for users.",
      ],
      date: "Nov 27, 2024",
    },
    {
      id: 25,
      imgPath: souq, // Ensure you import this image in your projects.js file
      imagePaths: [
        souq1,
        souq2,
        souq3,
        souq4,
        souq5,
        souq6,
        souq7,
        souq8,
        souq9,
        souq10,
      ],
      title: "Suk Arabia E-Commerce Store",
      description:
        "Suk Arabia is a modern, responsive e-commerce platform designed for selling electronics and gadgets in the Gulf region. The store features an elegant Arabic-right-to-left (RTL) interface, localized content, and an intuitive user experience. Customers can browse through a curated selection of high-quality tech products and seamlessly add items to their cart, explore product details, and complete purchases with ease. The site prioritizes speed, usability, and accessibility, offering an optimized experience across desktop and mobile devices.",
      ghLink: "https://github.com/FadyAdel04/Suk-Arabia-Store",
      demoLink: "https://suk-arabia-store.vercel.app/",
      skills: [
        "React",
        "Next.js",
        "Tailwind",
        "ShadCN",
        "TypeScript",
        "Responsive",
      ],
      technologies: [],
      tools: ["VS Code", "Vercel", "Figma"],
      keyFeatures: [
        "RTL Support: Fully designed for Arabic users with a right-to-left interface.",
        "Product Display: Clean product cards with pricing, discounts, and CTAs.",
        "Modern UI: Sleek design inspired by top e-commerce trends.",
        "Mobile Optimization: Fully responsive layout for phones and tablets.",
        "Multi-Image Gallery: Each product showcases multiple high-quality images.",
        "Localization Ready: Arabic typography and formatting tailored to the Gulf market.",
      ],
      date: "June 16, 2025",
    },
    {
      id: 26,
      imgPath: rawafed,
      imagePaths: [
        rawafed1,
        rawafed2,
        rawafed3,
        rawafed4,
        rawafed5,
        rawafed6,
        rawafed7,
        rawafed8,
        rawafed9,
        rawafed10,
        rawafed11,
        rawafed12,
        rawafed13,
        rawafed14,
        rawafed15,
        rawafed16,
        rawafed17,
        rawafed18,
      ],
      title: "Rawafed Academy Online Platform",
      description:
        "Rawafed Academy is a comprehensive Arabic online learning platform offering educational content and programs for students across various levels. The platform provides an intuitive RTL interface, categorized courses, lesson videos, instructor profiles, and interactive learning experiences. Designed with accessibility and responsiveness in mind, the site helps learners easily navigate through educational materials and participate in structured academic programs.",
      ghLink: "https://github.com/FadyAdel04/rawafed-academy-online",
      demoLink: "https://rawafed-academy-online.vercel.app/",
      skills: [
        "React",
        "Next.js",
        "Tailwind",
        "ShadCN",
        "TypeScript",
        "Responsive",
      ],
      technologies: [],
      tools: ["VS Code", "Vercel", "Figma"],
      keyFeatures: [
        "RTL Arabic Support: Designed specifically for Arabic-speaking users.",
        "Structured Learning: Organized by subjects, programs, and video lessons.",
        "Dynamic Video Playback: Integrated video player for course delivery.",
        "User Profiles: Each student has a dedicated learning dashboard.",
        "Modern UI/UX: Clean educational layout with smooth animations.",
        "Fully Responsive: Optimized for desktop, tablet, and mobile devices.",
      ],
      date: "June 28, 2025",
    },
    {
      id: 2,
      imgPath: imaginify, // Ensure you import this image in your projects.js file
      imagePaths: [ai1, ai2, ai3, ai4, ai5, ai6, ai7],
      title: "Imaginify AI Platform",
      description:
        "Imaginify is an innovative platform that offers customizable digital design services. Users can create unique designs tailored to their preferences, including logos, graphics, and marketing materials. The site features a user-friendly interface that simplifies the design process, allowing users to easily select templates and personalize them with various elements. Imaginify aims to empower individuals and businesses to express their brand identity creatively.",
      ghLink: "https://github.com/FadyAdel04/Imaginify",
      demoLink: "https://imaginify-eight-pi.vercel.app/",
      skills: ["React", "Next.js", "Tailwind", "TypeScript"],
      technologies: [], // Add any other relevant technologies
      tools: ["VS Code", "Vercel", "Strapi", "Figma", "Ai"], // Added tools
      keyFeatures: [
        "Creative Tools: Provides image restoration, generative fill, and object removal capabilities.",
        "Credit System: Users can purchase credits to access services.",
        "User-Friendly Interface: Designed for ease of use with a modern and responsive layout.",
        "High-Quality Outputs: Leveraging AI for professional-grade results in image processing.",
        "Responsive Design: Optimized for various devices ensuring accessibility on mobile and desktop.",
        "Tutorials and Resources: Comprehensive guides to help users maximize the platform's potential.",
      ],
      date: "june 3, 2024",
    },
    {
      id: 27,
      imgPath: golden,
      imagePaths: [
        golden1,
        golden2,
        golden3,
        golden4,
        golden5,
        golden6,
        golden7,
        golden8,
        golden9,
        golden10,
        golden11,
        golden12,
        golden13,
        golden14,
      ],
      title: "Golden Escape Tourism Portal",
      description:
        "Golden Escape is a dynamic tourism booking portal tailored for showcasing rural tourism, farm stays, and unique travel experiences in Egypt and the Gulf. The platform features beautifully categorized services including agricultural tours, livestock farming, and leisure stays. Users can explore destinations, check event details, and book directly through the site. Built with a natural earthy design palette, it reflects the essence of eco-tourism while maintaining a modern, responsive UI.",
      ghLink: "https://github.com/FadyAdel04/golden-escape-portal",
      demoLink: "https://golden-escape-portal.vercel.app/", // update if hosted elsewhere
      skills: [
        "React",
        "Next.js",
        "Tailwind",
        "TypeScript",
        "ShadCN",
        "Responsive",
      ],
      technologies: [],
      tools: ["VS Code", "Vercel", "Figma"],
      keyFeatures: [
        "Tourism-Focused UI: Tailored to promote rural, agricultural, and cultural destinations.",
        "Responsive Booking System: Users can explore and book experiences easily.",
        "Multilingual Support: Includes language switcher for Arabic and English.",
        "Event & Activity Showcase: Highlight farm events and seasonal activities.",
        "Natural Color Scheme: Uses green, sky blue, brown, and beige to reflect the environment.",
        "Clean Layout: Optimized for performance and accessibility across all devices.",
      ],
      date: "June 29, 2025",
    },
    {
      id: 3,
      imgPath: holla, // Ensure you import this image in your projects.js file
      imagePaths: [
        holla1,
        holla2,
        holla3,
        holla4,
        holla5,
        holla6,
        holla7,
        holla8,
        holla9,
        holla10,
        holla11,
        holla12,
        holla13,
      ],
      title: "Holla Movies Platform",
      description:
        "Holla Movies is a user-friendly streaming platform that provides a vast collection of movies and TV shows. The website features an easy-to-navigate interface, allowing users to search for and filter content by genre, release year, and popularity. Users can watch trailers, read synopses, and view ratings before making their selection. Holla Movies aims to enhance the viewing experience by offering high-quality content and seamless streaming.",
      ghLink: "https://github.com/FadyAdel04/Holla-Movies",
      demoLink: "https://holla-movies.vercel.app/",
      skills: ["React", "Next.js", "Tailwind"],
      technologies: ["TMDb API", "React Router"], // Add any other relevant technologies
      tools: ["Vercel", "GitHub", "Figma"], // Added tools
      keyFeatures: [
        "Browse by Genre: Explore a variety of movies and series categorized by genre.",
        "Trending and Top-Rated: Easily access trending and highly-rated content.",
        "Search Functionality: Find movies and series quickly with a search bar.",
        "Responsive Design: Fully responsive layout for seamless browsing on all devices.",
        "Detailed Movie Pages: View detailed information about each movie or series, including cast, ratings, and trailers.",
        "User Reviews: Read and submit reviews for movies and series.",
      ],
      date: "September 25, 2024",
    },
    {
      id: 28,
      imgPath: cafeBloom, 
      imagePaths: [cafe1, cafe2, cafe3, cafe4], // Replace with actual imported image paths
      title: "Café Bloom Bistro Website",
      description:
        "Café Bloom is a modern, elegant website built to showcase the unique charm of a local bistro or café. Designed with a warm and inviting aesthetic, the platform highlights the café’s menu, ambiance, events, and customer experience. With its responsive layout and visually appealing design, Café Bloom ensures smooth navigation across all devices. Visitors can browse the gallery, discover daily specials, and learn about the café's story and services.",
      ghLink: "https://github.com/FadyAdel04/cafe-bloom-bistro-site", // update if different
      demoLink: "https://cafe-bloom-bistro-site.vercel.app/",
      skills: [
        "React",
        "Next.js",
        "Tailwind",
        "ShadCN",
        "Responsive",
      ],
      technologies: [
      ],
      tools: ["VS Code", "Vercel", "Figma"],
      keyFeatures: [
        "Beautiful UI: Warm and cozy design reflecting a café atmosphere.",
        "Responsive Design: Seamlessly adapts to phones, tablets, and desktops.",
        "Gallery Showcase: Image-driven layout featuring café interiors and dishes.",
        "Animated Transitions: Smooth scroll and entrance animations using Framer Motion.",
        "Multilingual Ready: Designed to support multiple languages including Arabic.",
        "Optimized Performance: Fast loading with minimal layout shifts.",
      ],
      date: "June 1, 2025",
    },
    {
      id: 26,
      imgPath: blog1, // Replace with the appropriate image path
      imagePaths: [blog2, blog3, blog4, blog5, blog6],
      title: "YC Directory",
      description:
        "A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience. If you're getting started and need assistance or face any bugs, join our active Discord community with over 34k+ members. It's a place where people help each other out.",
      ghLink: "https://github.com/FadyAdel04/YC_Directory",
      demoLink: "https://yc-directory-nine-zeta.vercel.app/",
      skills: [
        "React",
        "Next.js",
        "Sanity",
        "Tailwind",
        "ShadCN",
        "TypeScript",
      ],
      technologies: [], // Add any additional technologies here
      tools: ["VS Code", "GitHub", "API", "Vercel"], // Added tools
      keyFeatures: [
        "Live Content API: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.",
        "GitHub Authentication: Allows users to log in easily using their GitHub account.",
        "Pitch Submission: Users can submit startup ideas, including title, description, category, and multimedia links (image or video).",
        "View Pitches: Browse through submitted ideas with filtering options by category.",
        "Pitch Details Page: Click on any pitch to view its details, with multimedia and description displayed.",
        "Profile Page: Users can view the list of pitches they've submitted.",
        "Editor Picks: Admins can highlight top startup ideas using the 'Editor Picks' feature managed via Sanity Studio.",
        "Views Counter: Tracks the number of views for each pitch instead of an upvote system.",
        "Search: Search functionality to load and view pitches efficiently.",
        "Minimalistic Design: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.",
      ],
      date: "Nov 26, 2024",
    },
    {
      id: 4,
      imgPath: techTrove,
      imagePaths: [
        tech1,
        tech2,
        tech3,
        tech4,
        tech5,
        tech6,
        tech7,
        tech8,
        tech9,
        tech10,
        tech11,
        tech12,
        tech13,
        tech14,
        tech15,
      ],
      title: "Tech Trove Shop",
      description:
        "Tech Trove Shop is an online store specializing in electronic products and gadgets. It features a modern interface that allows users to browse a wide range of items, including laptops, smartphones, and accessories. The site typically includes product categories, detailed descriptions, and user-friendly navigation for seamless shopping experiences.",
      ghLink: "https://github.com/FadyAdel04/Tech-Trove-Shop",
      demoLink: "https://tech-trove-shop.vercel.app/",
      skills: ["React", "Next.js", "TypeScript", "Tailwind"],
      technologies: [],
      tools: ["VS Code", "API", "Strapi", "Vercel", "GitHub", "Firebase"], // Added tools
      keyFeatures: [
        "Product Catalog: Organized display of electronic products such as laptops, smartphones, and accessories.",
        "Product Search: A search bar to quickly find items by name or category.",
        "Product Details: Detailed pages with price, description, images, specifications, and reviews for each product.",
        "Shopping Cart: Add products to the cart and manage quantities before proceeding to checkout.",
        "User Authentication: Account management with sign up, log in, and order history viewing options.",
        "Responsive Design: Fully responsive for desktop, tablet, and mobile browsing.",
        "Checkout Process: Secure and straightforward checkout with integrated payment options.",
        "Wishlist: Option to save products for future purchases.",
        "Customer Reviews: Feedback and ratings system for each product.",
      ],
      date: "March 20, 2024",
    },
    {
      id: 27,
      imgPath: solar,
      imagePaths: [solar1, solar2, solar3, solar4, solar5, solar6],
      title: "Solidarity Solar",
      description:
        "Solidarity Solar is a clean energy company offering solar panel installation and consultation services. Their website showcases the company's mission for sustainability, available solar solutions, and customer-focused services. It is designed to be informative, accessible, and visually engaging, making it easy for users to learn about the benefits of solar energy and get in touch with the team.",
      ghLink: "https://github.com/FadyAdel04/Solar-Company",
      demoLink: "https://solar-company-one.vercel.app/",
      skills: [],
      technologies: ["JavaScript", "HTML", "CSS"],
      tools: ["GitHub", "Vercel"],
      keyFeatures: [
        "Clean Modern UI: A well-structured and visually appealing layout.",
        "Responsive Design: Optimized for all screen sizes and devices.",
        "Service Overview: Detailed sections explaining their solar services.",
        "Eco-Focused Messaging: Highlights their mission for sustainable energy.",
        "Contact Options: Easy ways for users to reach out or request services.",
      ],
      date: "April 9, 2025",
    },
    {
      id: 28,
      imgPath: register,
      imagePaths: [register1, register2, register3],
      title: "Login/Register System",
      description:
        "This is a clean and responsive authentication interface featuring login and registration forms with animated transitions. Built with HTML, CSS, and JavaScript, the site focuses on intuitive UX and mobile-first design, making it ideal for starter projects and front-end auth demos.",
      ghLink: "https://github.com/FadyAdel04/Login-Register-System",
      demoLink: "https://login-register-system.vercel.app/",
      skills: [],
      technologies: ["JavaScript", "HTML", "CSS"],
      tools: ["GitHub", "Vercel"],
      keyFeatures: [
        "Animated Transitions: Smooth switch between login and register views.",
        "Responsive Design: Adapted for seamless experience across devices.",
        "Form Validation: Basic validation for input fields.",
        "User-Friendly Interface: Clean, accessible layout and UI elements.",
        "Starter Auth Template: Great base for adding real authentication logic.",
      ],
      date: "April 9, 2025",
    },
    {
      id: 29,
      imgPath: moviesApp,
      imagePaths: [movies1, movies2, movies3],
      title: "Movies App",
      description:
        "The Movies App is a visually rich movie browser that enables users to explore trending and top-rated movies with full details, trailers, and search functionality. It delivers a clean UX and modern design while leveraging real-time data from a movie API.",
      ghLink: "https://github.com/FadyAdel04/Movies-App",
      demoLink: "https://movies-app-six-tau.vercel.app/",
      skills: [],
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      tools: ["GitHub", "Vercel"],
      keyFeatures: [
        "Dynamic Movie Listing: Pulls trending and top-rated movies via API.",
        "Detailed Movie Pages: Includes trailers, ratings, and overviews.",
        "Interactive UI: Hover effects and transitions enhance the experience.",
        "Fully Responsive: Optimized for phones, tablets, and desktops.",
        "Smooth Navigation: Fast loading pages with structured layout.",
      ],
      date: "April 10, 2025",
    },
    {
      id: 32,
      imgPath: papa, // Main preview image
      imagePaths: [papa1, papa2, papa3, papa4, papa5, papa6, papa7, papa8],
      title: "Papa John's Pizza Website",
      description:
        "This is a frontend clone of the official Papa John’s Pizza website, crafted to replicate the structure, layout, and user interface of a real food ordering platform. The design showcases pizzas, promotions, and an engaging browsing experience, ideal for practicing responsive UI development.",
      ghLink: "https://github.com/FadyAdel04/Papa-John-s",
      demoLink: "https://fadyadel04.github.io/Papa-John-s/",
      skills: [],
      technologies: ["JavaScript", "HTML", "CSS"],
      tools: ["GitHub"],
      keyFeatures: [
        "Homepage Clone: Faithfully mirrors Papa John’s real site design.",
        "Pizza Menu Showcase: Display of product categories with thumbnails and pricing.",
        "Promotional Banners: Highlights ongoing deals and combos.",
        "Hero Section Carousel: Auto-sliding feature banner for user engagement.",
        "Mobile Menu Toggle: Hamburger menu functionality for smaller screens.",
        "Sticky Navbar: Header stays visible during scroll for quick access.",
        "Call to Action Buttons: Order now and menu navigation links clearly styled.",
        "Structured Layout: Sectioned design makes it easy to read and browse.",
        "Font and Color Scheme: Matches the branding of Papa John’s.",
        "Fully Responsive Design: Smooth experience across device sizes.",
      ],
      date: "March 20, 2025",
    },
    {
      id: 30,
      imgPath: amazon,
      imagePaths: [
        amazon1,
        amazon2,
        amazon3,
        amazon4,
        amazon5,
        amazon6,
        amazon7,
      ],
      title: "E-commerce Frontend",
      description:
        "This is a stylish and responsive frontend for an e-commerce platform. It showcases product listings, category filters, and a cart UI — all wrapped in a clean layout. Perfect for presenting a functional shopping experience.",
      ghLink: "https://github.com/FadyAdel04/intern-ecommerce-front-end2",
      demoLink: "https://intern-ecommerce-front-end2.vercel.app/",
      skills: [],
      technologies: [
        "JavaScript",
        "Bootstrap",
        "React",
        "React Router",
        "Responsive",
      ],
      tools: ["GitHub", "Vercel", "Figma"],
      keyFeatures: [
        "Responsive Product Grid: Adjustable layout with cards for each product.",
        "Interactive Cart Sidebar: Add, remove, and view cart items dynamically.",
        "Category Filtering: Users can browse by product type or brand.",
        "User-Focused Design: Clean, modern, and easy-to-navigate UI.",
        "Performance Optimized: Fast-loading and mobile-friendly experience.",
      ],
      date: "March 4, 2025",
    },
    {
      id: 31,
      imgPath: vivaDecor, // Main preview image
      imagePaths: [viva1, viva2, viva3, viva4, viva5],
      title: "VivaDecor Website",
      description:
        "VivaDecor is a branding website for an interior design studio, designed to present its style and services with elegance. With a strong focus on layout, visuals, and user experience, it gives potential clients an insight into the brand's identity.",
      ghLink: "https://github.com/FadyAdel04/VivaDecor",
      demoLink: "https://fadyadel04.github.io/VivaDecor/",
      skills: [],
      technologies: ["JavaScript", "HTML", "CSS"],
      tools: ["GitHub"],
      keyFeatures: [
        "Branding Focus: Highlights the company’s design philosophy.",
        "Sleek Visuals: High-quality design with clean structure.",
        "Sectioned Layout: Easy navigation between service areas.",
        "Fully Responsive: Designed to adapt across screen sizes.",
        "Clean Codebase: Organized, readable HTML/CSS/JS structure.",
      ],
      date: "March 11, 2025",
    },
    {
      id: 6,
      imgPath: novil, // Ensure you import this image in your projects.js file
      imagePaths: [
        novil1,
        novil2,
        novil3,
        novil4,
        novil5,
        novil6,
        novil7,
        novil8,
        novil9,
        novil10,
        novil11,
        novil12,
        novil13,
      ],
      title: "Novil Academy",
      description:
        "Nouvil Academy is an educational platform that offers various courses to enhance learning and skills development. The website features a user-friendly interface with options to browse courses, read descriptions, and enroll. It aims to provide high-quality education through structured lessons and interactive content, catering to different learning styles. Users can track their progress and engage with instructors and peers.",
      ghLink: "https://github.com/FadyAdel04/Nouvil-Academy",
      demoLink: "https://fadyadel04.github.io/Nouvil-Academy/",
      skills: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript"],
      technologies: [], // Add any other relevant technologies
      tools: ["GitHub", "Netlify"], // Tools used for deployment and version control
      keyFeatures: [
        "Innovative Learning Tools: Provides tools to enhance personal growth.",
        "Interactive Resources: Includes resources designed to promote learning.",
        "User-Friendly Design: Easy to navigate for users of all levels.",
      ],
      date: "June 23, 2023",
    },
    {
      id: 5,
      imgPath: chat, // Ensure you import this image in your projects.js file
      imagePaths: [
        chat1,
        chat2,
        chat3,
        chat4,
        chat5,
        chat6,
        chat7,
        chat8,
        chat9,
      ],
      title: "Chat 2 Chat App",
      description:
        "Chat-2-Chat is an interactive platform designed for real-time messaging, allowing users to connect with others seamlessly. The website features a clean interface that facilitates easy conversations and includes options for group chats and private messaging. Users can create accounts, manage their contacts, and engage in meaningful discussions. The goal of Chat-2-Chat is to enhance communication and foster connections among users in a friendly environment.",
      ghLink: "https://github.com/FadyAdel04/chat-2-chat",
      demoLink: "https://chat-2-chat.vercel.app/",
      skills: ["Tailwind", "React", "Next.js", "Node.js"],
      technologies: [], // Add any other relevant technologies
      tools: ["GitHub", "Vercel", "Postman", "Firebase"], // Added tools
      keyFeatures: [
        "Real-Time Messaging: Users can send and receive messages instantly.",
        "User Authentication: Secure login and signup options.",
        "Responsive Design: Works well on both desktop and mobile devices.",
        "Chat History: Keeps a record of previous conversations.",
        "Group Chat: Users can create and join group chats.",
      ],
      date: "March 27, 2024",
    },
    {
      id: 25,
      imgPath: hospital,
      imagePaths: [
        hospital1,
        hospital2,
        hospital3,
        hospital4,
        hospital5,
        hospital6,
        hospital7,
        hospital8,
      ],
      title: "Healthcare Management System",
      description:
        "The Healthcare Management System is a comprehensive application designed to manage hospital operations, including patient records, appointments, staff, and billing.",
      ghLink:
        "https://github.com/FadyAdel04/HealthcareSystem/tree/main/HealthcareSystem",
      demoLink: "", // Add demo link if available
      skills: ["HTML", "CSS", "JavaScript", "C#", "Net", "MySQL"],
      technologies: ["Bootstrap"],
      tools: ["VS Community", "GitHub", "API"],
      keyFeatures: [
        "Patient Management: Register, update, and view patient details efficiently.",
        "Appointment Scheduling: Manage doctor-patient appointments with ease.",
        "Staff Management: Organize and oversee hospital staff roles and data.",
        "Billing System: Generate and manage invoices and payments.",
        "Admin Dashboard: Centralized control panel for managing all operations.",
        "Reports: Generate detailed reports on hospital performance and operations.",
        "Secure Access: Authentication system to ensure secure data handling.",
        "Responsive Design: Ensures usability across devices, including mobile and desktop.",
      ],
      date: "December 26, 2024",
    },
    {
      id: 7,
      imgPath: gym, // Ensure you import this image in your projects.js file
      title: "Fitness Gym",
      imagePaths: [gym1, gym2, gym3, gym4],
      description:
        "Fitness Gym Sandy is a modern fitness center dedicated to helping individuals achieve their health and wellness goals. The website showcases various fitness programs, membership options, and facilities available to members. Users can explore workout plans, schedule classes, and get information about personal training services. With a focus on community and support, Fitness Gym Sandy provides a welcoming environment for all fitness levels.",
      ghLink: "https://github.com/FadyAdel04/Fitness-Gym",
      demoLink: "https://fitness-gym-sandy.vercel.app/",
      skills: ["React", "React Router", "Next.js", "Tailwind", "TypeScript"],
      technologies: [], // Add any other relevant technologies
      tools: ["Vercel", "GitHub", "API", "Figma"], // Tools for deployment and version control
      keyFeatures: [
        "Personalized Workouts: Tailored exercise routines based on user preferences.",
        "User Progress Tracking: Helps users monitor their fitness journey.",
        "Responsive Design: Optimized for both desktop and mobile use.",
        "Video Tutorials: Provides video guides for each workout routine.",
        "Workout Scheduling: Allows users to set daily workout plans and reminders.",
        "Exercise Library: Includes a comprehensive list of exercises categorized by muscle group.",
        "Calorie Tracker: Integrated tool to track calories burned during workouts.",
      ],
      date: "June 6, 2024",
    },
    {
      id: 8,
      imgPath: courses, // Ensure you import this image in your projects.js file
      imagePaths: [
        learn1,
        learn2,
        learn3,
        learn4,
        learn5,
        learn6,
        learn7,
        learn8,
      ],
      title: "Eclipseful Learning Platform",
      description:
        "The Courses Next Seven website offers a variety of online courses designed to enhance skills in various subjects. The platform features user-friendly navigation, course descriptions, and the ability to enroll directly. It focuses on providing quality education with flexible learning options, catering to different learning styles. Users can easily access course materials and track their progress.",
      ghLink: "https://github.com/FadyAdel04/Courses-next",
      demoLink: "https://courses-next-seven.vercel.app/",
      skills: ["React", "Next.js", "Tailwind", "Hooks", "Animation"],
      technologies: ["Server-Side"],
      tools: ["Vercel", "GitHub", "Postman", "Axios"],
      keyFeatures: [
        "Free Programming Courses: Provides a wide range of courses for beginners to advanced learners.",
        "Server-Side Rendering: Renders pages on the server for faster performance.",
        "Interactive UI: User-friendly and interactive course layout.",
        "Course Progress Tracking: Allows users to track their progress through courses.",
        "Responsive Design: Optimized for both desktop and mobile platforms.",
        "API Integration: Fetches course data dynamically from a backend API.",
      ],
      date: "June 20, 2024",
    },
    {
      id: 9,
      imgPath: brain, // Ensure you import this image in your projects.js file
      title: "BrainWave-AI",
      imagePaths: [
        brain1,
        brain2,
        brain3,
        brain4,
        brain5,
        brain6,
        brain7,
        brain8,
        brain9,
      ],
      description:
        "The Brain Wave AI website showcases innovative artificial intelligence solutions aimed at enhancing productivity and creativity. It features various AI-driven tools designed to assist users in different tasks, providing an intuitive interface for easy access. The platform emphasizes the potential of AI to transform workflows and boost efficiency.",
      ghLink: "https://github.com/FadyAdel04/BrainWave-AI",
      demoLink: "https://brain-wave-ai.vercel.app/",
      skills: ["React", "Next.js", "Tailwind", "TypeScript", "Node.js"],
      technologies: ["Open Ai", "Hooks"],
      tools: ["Vercel", "GitHub", "Postman", "Axios"],
      keyFeatures: [
        "AI Chatbot: Provides a chatbot that understands and responds to user queries.",
        "OpenAI API Integration: Utilizes OpenAI for generating intelligent responses.",
        "Real-Time Communication: Offers real-time interaction with users.",
        "Natural Language Processing: Enhances user experience by processing natural language queries.",
        "Responsive Design: Ensures a seamless experience across devices.",
        "API Request Logging: Tracks user interactions for analysis and improvement.",
      ],
      date: "March 17, 2024",
    },
    {
      id: 10,
      imgPath: car, // Ensure you import this image in your projects.js file
      title: "CarRent-App",
      imagePaths: [car1, car2],
      description:
        "CarRent-App is a seamless and user-friendly platform for booking rental cars. The application offers an effortless booking process, allowing users to search for available vehicles, filter by car type, and manage reservations. The platform focuses on providing a hassle-free experience with real-time car availability, making it easier for users to find and book their desired vehicle. It includes features for user authentication, booking management, and a responsive design that adapts to any device, ensuring a smooth experience across both desktop and mobile platforms.",
      ghLink: "https://github.com/FadyAdel04/Car-RentApp",
      demoLink: "https://car-rent-app-chi.vercel.app/",
      skills: ["React", "Next.js", "TypeScript"],
      technologies: ["Hooks", "React Router", "Dynamic Root"],
      tools: ["Vercel", "GitHub", "Axios", "Postman", "API"],
      keyFeatures: [
        "Car Booking System: Simple and quick process for booking cars.",
        "API Integration: Fetches real-time data on car availability.",
        "User Authentication: Allows users to create accounts and manage bookings.",
        "Responsive Design: Optimized for both mobile and desktop users.",
        "Car Categories: Allows users to filter and search by car type and features.",
        "Booking Management: Provides users the ability to track and modify their bookings.",
      ],
      date: "July 19, 2024",
    },
    {
      id: 11,
      imgPath: space, // Ensure you import this image in your projects.js file
      imagePaths: [space1, space2, space3, space4],
      title: "TCJ-SPACE",
      description:
        "TCJ-SPACE is a platform that explores advancements in space technology and satellite innovations. The website provides information on the latest developments in space exploration, satellite technology, and other cutting-edge topics in the tech field. Built using modern web technologies, the platform is designed to engage users with informative content and a user-friendly interface. It offers an immersive experience with a clean layout and responsive design, making it accessible across all devices.",
      ghLink: "https://github.com/FadyAdel04/Space-website-React",
      demoLink: "https://space-website-react-vert.vercel.app/",
      skills: ["React", "Tailwind", "TypeScript"],
      technologies: ["Hooks"],
      tools: ["Vercel", "GitHub", "Postman", "Animation"],
      keyFeatures: [
        "Space Technology Content: Provides insights into the latest in space and satellite technology.",
        "User-Friendly Interface: Simple navigation to explore various topics.",
        "Responsive Design: Accessible on both desktop and mobile devices.",
        "Dynamic Data Display: Real-time updates on tech innovations.",
        "Interactive UI: Engages users with interactive elements related to space exploration.",
        "Optimized Performance: Fast load times with efficient performance optimization.",
      ],
      date: "August 1, 2024",
    },
    {
      id: 12,
      imgPath: store, // Ensure you import this image in your projects.js file
      imagePaths: [
        karama1,
        karama2,
        karama3,
        karama4,
        karama5,
        karama6,
        karama7,
        karama8,
        karama9,
        karama10,
        karama11,
        karama12,
        karama13,
        karama14,
      ],
      title: "Karma Master E-commerce",
      description:
        "Karma Master E-commerce is an online platform designed to showcase and sell Nike's latest collection. The website offers a smooth shopping experience with features such as product browsing, customer reviews, and customer service integration. Users can explore Nike's newest arrivals, filter products by category, and make purchases easily. The platform also supports a responsive design to ensure a seamless shopping experience on both mobile and desktop devices.",
      ghLink: "https://github.com/FadyAdel04/Karma-master-Ecommerce",
      demoLink: "https://karma-master-ecommerce.vercel.app/",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      technologies: ["Dynamic Root", "Payment", "Responsive"],
      tools: ["Vercel", "GitHub", "Postman", "API", "Stripe"],
      keyFeatures: [
        "Product Showcase: Displays Nike's latest collection with detailed product descriptions.",
        "Responsive Design: Optimized for both desktop and mobile users.",
        "Customer Reviews: Allows users to read and leave product reviews.",
        "Product Filtering: Users can search and filter products by category, size, and price.",
        "Secure Payment Gateway: Integrated with Stripe for secure online transactions.",
        "Customer Support: Integrated customer service chat for seamless assistance.",
      ],
      date: "March 16, 2024",
    },
    {
      id: 13,
      imgPath: travel, // Ensure you import this image in your projects.js file
      imagePaths: [travel1, travel2, travel3, travel4],
      title: "Travel App: Explore the World!",
      description:
        "Travel App is a dynamic platform designed to help adventurers explore nature and new destinations with ease. The app features offline maps, making it a reliable tool for hikers and travelers in remote areas without an internet connection. Users can search for trails, landmarks, and nature spots, and plan their journeys using the app's intuitive interface. With a focus on user experience, the app provides essential travel information and guidance for every adventure.",
      ghLink: "https://github.com/FadyAdel04/Travel-App-Template1",
      demoLink: "https://travel-app-template.vercel.app/",
      skills: ["React", "Tailwind", "TypeScript"],
      technologies: ["Hooks", "Responsive"],
      tools: ["Vercel", "GitHub", "MapIntegration", "Postman", "Animation"],
      keyFeatures: [
        "Offline Maps: Allows users to download maps for offline use during travel.",
        "Trail Search: Users can search for hiking trails and landmarks.",
        "Travel Planning: Helps users organize their trips with detailed route planning.",
        "Responsive Design: Works seamlessly across desktop and mobile devices.",
        "Map Integration: Utilizes Mapbox API for accurate and interactive mapping.",
        "User-Friendly Interface: Simple navigation and intuitive UI for ease of use.",
      ],
      date: "October 15, 2024",
    },
    {
      id: 14,
      imgPath: red, // Ensure you import this image in your projects.js file
      imagePaths: [red1, red2, red3, red4, red5, red6, red7],
      title: "Red Store Online Shop",
      description:
        "Red Store Online Shop is a vibrant e-commerce platform that specializes in showcasing workout apparel and the latest fitness offerings. The website provides users with a comprehensive shopping experience, featuring a wide range of products, detailed descriptions, and high-quality images. Customers can easily browse through categories, filter by size and style, and make purchases with confidence. With a focus on user experience, the site is designed to be fast, responsive, and easy to navigate, ensuring that users can find exactly what they need for their fitness journey.",
      ghLink: "https://github.com/FadyAdel04/E-commers",
      demoLink: "https://fadyadel04.github.io/E-commers/",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      technologies: ["Responsive"],
      tools: ["GitHub", "Netlify"],
      keyFeatures: [
        "Product Showcase: Highlights a variety of workout apparel with detailed product descriptions.",
        "Responsive Design: Optimized for both desktop and mobile users for a seamless experience.",
        "User-Friendly Navigation: Easy browsing through categories and filters.",
        "Shopping Cart Functionality: Allows users to add items to their cart and checkout efficiently.",
        "Search Functionality: Enables users to quickly find products by keywords.",
        "Secure Transactions: Ensures user data protection during the checkout process.",
      ],
      date: "September 15, 2023",
    },
    {
      id: 15,
      imgPath: zen, // Ensure you import this image in your projects.js file
      imagePaths: [zen1, zen2, zen3, zen4, zen5, zen6, zen7, zen8],
      title: "TBH-Zen Resort",
      description:
        "TBH-Zen Resort is a luxurious boutique hotel located in the beautiful coastal city of Hurghada. The website showcases the resort's exquisite accommodations, stunning views, and exceptional service. Visitors can explore the resort's amenities, book their stay, and learn about local attractions and activities. Designed with user experience in mind, the site features a visually appealing layout, easy navigation, and responsive design, ensuring that potential guests can easily find the information they need to plan their perfect getaway.",
      ghLink: "https://github.com/FadyAdel04/TBH-ZEN-Resort",
      demoLink: "https://fadyadel04.github.io/TBH-ZEN-Resort/index.html",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      technologies: ["Responsive"],
      tools: ["GitHub", "Figma"],
      keyFeatures: [
        "Showcase Accommodations: Detailed information and images of the available rooms and suites.",
        "Booking System: Simplified booking process for potential guests.",
        "Local Attractions: Information about nearby activities and sightseeing options.",
        "Responsive Design: Optimized for seamless viewing on mobile and desktop devices.",
        "User-Friendly Navigation: Easy access to different sections of the website.",
        "Stunning Visuals: High-quality images that capture the beauty of the resort and its surroundings.",
      ],
      date: "September 30, 2023",
    },
    {
      id: 16,
      imgPath: shopping, // Replace with the actual path for the project image
      imagePaths: [
        shopping1,
        shopping2,
        shopping3,
        shopping4,
        shopping5,
        shopping6,
        shopping7,
        shopping8,
        shopping9,
        shopping10,
        shopping11,
      ],
      title: "Shopping Bag Shop",
      description:
        "Shopping Bag is an online retail platform designed for easy browsing and purchasing of a variety of products. The site offers a clean layout with user-friendly navigation, allowing customers to explore categories, view detailed product descriptions, and add items to their shopping cart seamlessly. With a focus on providing a smooth shopping experience, Shopping Bag aims to cater to diverse consumer needs.",
      ghLink: "https://github.com/FadyAdel04/Tech-Trove-Shop",
      demoLink: "https://shopping-bag-weld.vercel.app/",
      skills: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript"],
      technologies: [],
      tools: ["API", "GitHub", "Responsive"],
      keyFeatures: [
        "Product Catalog: Organized display of electronic products such as laptops, smartphones, and accessories.",
        "Product Search: A search bar to quickly find items by name or category.",
        "Product Details: Detailed pages with price, description, images, specifications, and reviews for each product.",
        "Shopping Cart: Add products to the cart and manage quantities before proceeding to checkout.",
        "User Authentication: Account management with sign up, log in, and order history viewing options.",
        "Responsive Design: Fully responsive for desktop, tablet, and mobile browsing.",
        "Checkout Process: Secure and straightforward checkout with integrated payment options.",
        "Wishlist: Option to save products for future purchases.",
        "Customer Reviews: Feedback and ratings system for each product.",
      ],
      date: "March 20, 2023",
    },
    {
      id: 17,
      imgPath: bootstrap, // Replace with the actual path for the main project image
      imagePaths: [
        bootstrap1,
        bootstrap2,
        bootstrap3,
        bootstrap4,
        bootstrap5,
        bootstrap6,
      ],
      title: "Bootstrap Design Portfolio",
      description:
        "The Bootstrap Design project showcases a responsive web design using Bootstrap components. The site features a clean and modern layout, utilizing a navigation bar, cards, and modals to display content. It demonstrates various UI elements, highlighting the versatility and ease of customization with Bootstrap. The project aims to help users understand and implement Bootstrap in their own web development projects.",
      ghLink: "https://github.com/FadyAdel04/bootstrapDesign",
      demoLink: "https://fadyadel04.github.io/bootstrapDesign/",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      technologies: [],
      tools: ["VS Code", "GitHub", "Responsive"],
      keyFeatures: [
        "Responsive Design: The website is fully responsive and optimized for viewing on desktops, tablets, and mobile devices.",
        "Clean UI/UX: Focused on providing a clean and user-friendly interface with intuitive navigation.",
        "Carousel Slider: A featured carousel section with smooth transitions showcasing design samples.",
        "Animation Effects: Smooth animations for different elements on scroll and hover, enhancing user interaction.",
        "Multi-Section Layout: Organized sections for showcasing different portfolio pieces and designs.",
        "Contact Form: A simple, functional contact form integrated with form validation.",
        "Modern Typography: Using modern and visually appealing fonts to enhance the overall aesthetics.",
        "Grid Layout: Utilizes Bootstrap’s grid system for flexible, responsive layouts across different screen sizes.",
      ],
      date: "Jun 8, 2023",
    },
    {
      id: 18,
      imgPath: dash, // Replace with the actual path for the main project image
      imagePaths: [dash1],
      title: "AdminHub Dashboard",
      description:
        "The AdminHub project is a responsive admin dashboard template that utilizes modern design principles. It features a user-friendly interface with various components, including charts, tables, and forms, suitable for managing data and monitoring application performance. The design emphasizes usability",
      ghLink: "https://github.com/FadyAdel04/AdminHub",
      demoLink: "https://fadyadel04.github.io/AdminHub/",
      skills: ["HTML", "CSS", "Bootstrap"],
      technologies: [],
      tools: ["VS Code", "GitHub", "Responsive"],
      keyFeatures: [
        "Responsive Admin Dashboard: Fully responsive dashboard layout for desktop, tablet, and mobile devices.",
        "User Management: Sections for managing users, including user profiles and settings.",
        "Charts and Analytics: Data visualizations with integrated chart components to display key metrics.",
        "Table Management: Dynamic tables for organizing data with sorting and filtering features.",
        "Navigation Sidebar: Collapsible sidebar for easy access to different sections of the dashboard.",
        "Forms and Validation: Built-in form components with validation for user input.",
        "Dark/Light Mode: A toggle for switching between dark and light themes for better accessibility.",
        "Widgets and Components: Various ready-made widgets like calendars, notifications, and progress bars.",
      ],
      date: "January 15, 2022",
    },
    {
      id: 19,
      imgPath: spicial, // Replace with the actual path for the main project image
      imagePaths: [special1, special2, special3, special4, special5, special6],
      title: "Special Design",
      description:
        "The Special Design project showcases a visually appealing and responsive web design template. It features modern layouts, vibrant colors, and various UI elements suitable for portfolios, personal websites, or creative projects. The design emphasizes aesthetics while ensuring a smooth user experience across devices.",
      ghLink: "https://github.com/FadyAdel04/special-design",
      demoLink: "https://fadyadel04.github.io/special-design/",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      technologies: [],
      tools: ["VS Code", "Figma", "Animation", "Responsive", "GitHub"],
      keyFeatures: [
        "Modern UI Design: Sleek and creative design with attention to visual details.",
        "Responsive Layout: Fully responsive and adaptable for different screen sizes and devices.",
        "Custom Animations: Smooth transitions and animations that enhance user experience.",
        "Landing Page: An eye-catching landing section for attracting attention.",
        "Portfolio Display: Well-organized sections for showcasing work or products.",
        "Cross-Browser Compatibility: Works seamlessly across modern browsers.",
        "Interactive Elements: Features like hover effects and interactive buttons for engaging user interaction.",
      ],
      date: "December 10, 2022",
    },
    {
      id: 20,
      imgPath: phone, // Replace with the actual path for the main project image
      imagePaths: [phone1, phone2, phone3, phone4],
      title: "Apple Template",
      description:
        "The Apple Template project features a sleek and modern design inspired by Apple's aesthetic. It includes smooth transitions, clean layouts, and intuitive navigation, making it ideal for showcasing products or services. The template is responsive, ensuring an optimal experience on both desktop and mobile devices.",
      ghLink: "https://github.com/FadyAdel04/appleTemplate",
      demoLink: "https://fadyadel04.github.io/appleTemplate/",
      skills: ["HTML", "CSS"],
      technologies: [],
      tools: ["VS Code", "GitHub"],
      keyFeatures: [
        "Minimalist Design: Inspired by Apple's signature clean and modern aesthetic.",
        "Responsive Layout: Fully responsive design that adapts seamlessly to all screen sizes.",
        "Hero Section: Striking hero image section with bold typography and smooth animations.",
        "Product Features Display: Organized sections to showcase product features and details.",
        "Smooth Scroll: Added smooth scrolling for enhanced user navigation.",
        "Cross-Browser Compatibility: Fully compatible with major browsers.",
        "Simple Navigation: Clear and intuitive navigation bar for a user-friendly experience.",
      ],
      date: "February 5, 2022",
    },
    {
      id: 21,
      imgPath: dev,
      imagePaths: [dev1, dev2, dev3, dev4, dev5, dev6, dev7, dev8, dev9],
      title: "DEVELOPMENT Template",
      description:
        "template showcases a modern, professional layout ideal for developers and tech businesses. It features responsive design, smooth scrolling, and clean navigation. The template emphasizes showcasing skills, services, and projects effectively. Users can easily customize it to fit their branding and content needs.",
      ghLink: "https://github.com/FadyAdel04/FADY-DEVELOPMENT-template",
      demoLink: "https://fadyadel04.github.io/FADY-DEVELOPMENT-template/",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      technologies: [],
      tools: ["VS Code", "GitHub", "Animation", "Responsive"],
      keyFeatures: [
        "Responsive Design: Fully compatible with mobile, tablet, and desktop devices.",
        "Modern Aesthetic: Clean and professional design for showcasing services or portfolios.",
        "Navigation Bar: Intuitive navigation for seamless user experience.",
        "Portfolio Section: A section to display work or projects with imagery.",
        "Footer: Includes social media links and contact information.",
        "Smooth Animations: Subtle animations enhancing the user interaction.",
      ],
      date: "April 15, 2023",
    },
    {
      id: 22,
      imgPath: phlox,
      imagePaths: [
        phlox1,
        phlox2,
        phlox3,
        phlox4,
        phlox5,
        phlox6,
        phlox7,
        phlox8,
        phlox9,
        phlox10,
      ],
      title: "Phlox Template",
      description:
        "The Phlox template features a clean and modern design suitable for personal or professional portfolios. It emphasizes visual content with attractive layouts and smooth transitions, allowing users to showcase their work effectively. The responsive design ensures compatibility across devices, enhancing user experience. Customization options are available for branding and content adjustments.",
      ghLink: "https://github.com/FadyAdel04/Phlox",
      demoLink: "https://fadyadel04.github.io/Phlox/",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      technologies: ["Tailwind"],
      tools: ["VS Code", "GitHub", "Responsive"],
      keyFeatures: [
        "Responsive Design: Optimized for mobile, tablet, and desktop viewing.",
        "Multi-Purpose Layout: Suitable for various industries like portfolio, services, and businesses.",
        "Smooth Scrolling: Integrated smooth scrolling for a better user experience.",
        "Interactive Animations: Hover and scroll animations that enhance the visual appeal.",
        "Navigation Menu: Sticky navigation bar for easy access to different sections.",
        "Contact Section: Simple contact form for user inquiries.",
        "Footer: Contains social media links and business information.",
      ],
      date: "February 10, 2023",
    },
    {
      id: 23,
      imgPath: edited,
      imagePaths: [edited1],
      title: "Image Editor",
      description:
        "The Image Editor is a web-based application that allows users to upload and edit images with various tools. Users can adjust brightness, contrast, saturation, and apply filters to enhance their photos. The intuitive interface facilitates easy navigation, making it accessible for both beginners and experienced users. It supports multiple image formats, enabling versatile editing options.",
      ghLink: "https://github.com/FadyAdel04/img-editor",
      demoLink: "https://fadyadel04.github.io/img-editor/",
      skills: ["HTML", "CSS", "JavaScript"],
      technologies: [],
      tools: ["VS Code", "GitHub"],
      keyFeatures: [
        "Image Cropping: Allows users to crop images to specific dimensions.",
        "Image Resizing: Users can resize images while maintaining aspect ratio.",
        "Filter Effects: Apply various filters like grayscale, sepia, and more.",
        "Brightness & Contrast: Adjust image brightness and contrast dynamically.",
        "Saturation Control: Fine-tune the saturation levels for vivid or muted colors.",
        "Undo/Redo: Basic undo and redo functionality for image edits.",
        "Download Edited Image: Users can download the edited image with a single click.",
      ],
      date: "April 5, 2023",
    },
    {
      id: 24,
      imgPath: crud,
      imagePaths: [crud1],
      title: "CRUDS",
      description:
        "The CRUDS application is a simple web-based platform that allows users to create, read, update, and delete entries. It features an intuitive interface for managing data effectively. Users can easily add new records, view existing ones, edit information, and remove entries as needed. This tool is beneficial for learning about CRUD operations and database management in web development.",
      ghLink: "https://github.com/FadyAdel04/CRUDS",
      demoLink: "https://fadyadel04.github.io/CRUDS/",
      skills: ["HTML", "CSS", "JavaScript"],
      technologies: [],
      tools: ["VS Code", "GitHub"],
      keyFeatures: [
        "Create Record: Add new records to the database using a form.",
        "Read Data: View the list of all created records in a tabular format.",
        "Update Record: Edit existing records with an easy-to-use interface.",
        "Delete Record: Remove records from the database with a single click.",
        "Validation: Form validation to ensure required fields are filled out.",
        "Responsive Design: Fully responsive layout for a seamless experience on mobile and desktop.",
      ],
      date: "April 10, 2023",
    },
  ];

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route
            path="/project/:projectId"
            element={<ProjectDetail projects={projects} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Add Contact Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
