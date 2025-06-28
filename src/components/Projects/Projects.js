import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "aos/dist/aos.css";
import AOS from "aos";

// Import your project images here
import papa from "../../Assets/Projects/papa.png";
import vivaDecor from "../../Assets/Projects/viva.png";
import amazon from "../../Assets/Projects/amazone.png";
import moviesApp from "../../Assets/Projects/movie.png";
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
import holla from "../../Assets/Projects/holla.png";
import shopping from "../../Assets/Projects/shopping.png";
import bootstrap from "../../Assets/Projects/bootstrap.png";
import dash from "../../Assets/Projects/dash.png";
import spicial from "../../Assets/Projects/spicial.png";
import phone from "../../Assets/Projects/phone.png";
import dev from "../../Assets/Projects/dev.png";
import phlox from "../../Assets/Projects/phlox.png";
import edited from "../../Assets/Projects/edited.png";
import crud from "../../Assets/Projects/crud.png";
import health from "../../Assets/Projects/health.png";
import hospital from "../../Assets/Projects/hospital.png";
import blog1 from "../../Assets/Projects/blog.png";
import solar from "../../Assets/Projects/solar.png";
import register from "../../Assets/Projects/login.png";
import souq from "../../Assets/Projects/souq.png";
import rawafed from "../../Assets/Projects/rawafed.png";
import golden from "../../Assets/Projects/golden.png";
import cafeBloom from "../../Assets/Projects/cafe.png";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const projects = [
    {
      id: 1,
      imgPath: health,
      title: "Care Pulse Health care",
      description:
        "Care Pulse Health Care is a platform dedicated to providing comprehensive health services and wellness information. It offers users easy access to healthcare professionals, services.",
      ghLink: "https://github.com/FadyAdel04/CarePulesHealthCare",
      demoLink: "https://care-pules-health-care.vercel.app/",
      skills: ["React", "Next.js", "Tailwind", "TypeScript"],
      technologies: [],
      tools: ["VS Code", "API", "App Write", "Vercel", "GitHub", "SMS"], // Added tools
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
      views: 0,
    },
    {
      id: 25,
      imgPath: souq,
      title: "Suk Arabia E-Commerce Store",
      description:
        "Suk Arabia is a modern, responsive e-commerce platform designed for selling electronics and gadgets in the Gulf region. The store features an elegant Arabic-right-to-left ",
      ghLink: "https://github.com/FadyAdel04/Suk-Arabia-Store",
      demoLink: "https://suk-arabia-store.vercel.app/",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      technologies: ["RTL Layout", "Responsive Design"],
      tools: ["VS Code", "Vercel", "Figma", "Photoshop"],
      keyFeatures: [
        "RTL Support: Fully designed for Arabic users with a right-to-left interface.",
        "Product Display: Clean product cards with pricing, discounts, and CTAs.",
        "Modern UI: Sleek design inspired by top e-commerce trends.",
        "Mobile Optimization: Fully responsive layout for phones and tablets.",
        "Multi-Image Gallery: Each product showcases multiple high-quality images.",
        "Localization Ready: Arabic typography and formatting tailored to the Gulf market.",
      ],
      date: "June 27, 2024",
    },
    {
      id: 26,
      imgPath: rawafed,
      title: "Rawafed Academy Online Platform",
      description:
        "Rawafed Academy is a comprehensive Arabic online learning platform offering educational content and programs for students across various levels. ",
      ghLink: "https://github.com/FadyAdel04/rawafed-academy-online",
      demoLink: "https://rawafed-academy-online.vercel.app/",
      skills: [
        "React",
        "Next.js",
        "Tailwind",
        "ShadCN",
        "TypeScript",
        "Responsive",
        "Framer Motion",
      ],
      technologies: ["Firebase", "VideoJS", "App Router"],
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
      id: 27,
      imgPath: golden,
      title: "Golden Escape Tourism Portal",
      description:
        "Golden Escape is a dynamic tourism booking portal tailored for showcasing rural tourism, farm stays, and unique travel experiences in Egypt and the Gulf.",
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
      tools: ["VS Code", "Vercel", "Figma", ],
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
      id: 2,
      imgPath: imaginify, // Ensure you import this image in your projects.js file
      title: "Imaginify AI Platform",
      description:
        "Imaginify is an AI platform offering tools for image restoration, generative fill, and object removal. Users can purchase credits to access various creative services.",
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
      id: 3,
      imgPath: holla, // Ensure you import this image in your projects.js file
      title: "Holla Movies Platform",
      description:
        "Holla is a platform to explore and watch a wide variety of movies, series, and animations. Features include browsing by genre, viewing trending content, and discovering actors.",
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
      title: "Café Bloom Bistro Website",
      description:
        "Café Bloom is a modern, elegant website built to showcase the unique charm of a local bistro or café. Designed with a warm and inviting aesthetic",
      ghLink: "https://github.com/FadyAdel04/cafe-bloom-bistro-site", // update if different
      demoLink: "https://cafe-bloom-bistro-site.vercel.app/",
      skills: [
        "React",
        "Next.js",
        "Tailwind",
        "ShadCN",
        "Responsive",
        "Framer Motion",
      ],
      technologies: [
        "App Router",
        "Static Site Generation",
        "i18n",
        "Custom Animations",
      ],
      tools: ["VS Code", "Vercel", "Figma", "Canva"],
      keyFeatures: [
        "Beautiful UI: Warm and cozy design reflecting a café atmosphere.",
        "Responsive Design: Seamlessly adapts to phones, tablets, and desktops.",
        "Gallery Showcase: Image-driven layout featuring café interiors and dishes.",
        "Animated Transitions: Smooth scroll and entrance animations using Framer Motion.",
        "Multilingual Ready: Designed to support multiple languages including Arabic.",
        "Optimized Performance: Fast loading with minimal layout shifts.",
      ],
      date: "June 30, 2025",
    },
    {
      id: 4,
      imgPath: techTrove,
      title: "Tech Trove Shop",
      description:
        "Tech Trove Shop is an e-commerce platform for electronic products and gadgets. It features a modern interface with intuitive navigation for easy browsing and purchasing.",
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
      id: 26,
      imgPath: blog1,
      title: "YC Directory",
      description:
        "A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions,gain exposure through a clean design for a smooth user experience",
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
      tools: ["VS Code", "GitHub", "Sanity Studio", "API", "Vercel"], // Added tools
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
      id: 6,
      imgPath: novil, // Ensure you import this image in your projects.js file
      title: "Novil Academy",
      description:
        "Empowering learning through innovation, Novil Academy offers tools and resources for personal growth. It features user-friendly navigation for all skill levels.",
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
      id: 32,
      imgPath: papa,
      title: "Papa John's Pizza Website",
      description:
        "A front-end clone of the Papa John’s pizza website, showcasing the menu, offers, and ordering layout. Designed with responsiveness and clean visuals",
      ghLink: "https://github.com/FadyAdel04/Papa-John-s",
      demoLink: "https://fadyadel04.github.io/Papa-John-s/",
      skills: ["HTML", "CSS", "JavaScript"],
      technologies: [],
      tools: ["GitHub"],
      keyFeatures: [
        "Full Homepage Clone: Visually similar to the official Papa John's website.",
        "Responsive Navigation: Menu adapts to desktop and mobile devices.",
        "Menu Display: Showcases pizzas, sides, drinks, and deals.",
        "Offer Sections: Highlights current discounts and promotional bundles.",
        "Hero Slider: Engaging carousel for featured items or promotions.",
        "Sticky Header: Easy access to navigation as the user scrolls.",
        "Consistent Branding: Fonts, colors, and layout inspired by the brand.",
        "Order CTA Buttons: Prominent call-to-action buttons to simulate ordering flow.",
        "Responsive Design: Optimized for phones, tablets, and desktops.",
        "Modern Layout: Clean HTML/CSS structure for easy scalability.",
      ],
      date: "March 20, 2025",
    },
    {
      id: 27,
      imgPath: solar,
      title: "Solar System Website",
      description:
        "A website for Solidarity Solar, a solar panel installation company based in Plymouth, UK. The site provides information about their services, products, and values.",
      ghLink: "https://github.com/FadyAdel04/Solar-Company",
      demoLink: "https://solar-company-one.vercel.app/",
      skills: ["HTML", "CSS", "JavaScript"],
      technologies: [],
      tools: ["Vercel", "GitHub"],
      keyFeatures: [
        "Comprehensive Service Information: Details about solar panel installation services and customer support.",
        "Product Listings: Showcases various solar kits and related products.",
        "Sustainability Focus: Emphasizes the company's commitment to environmental sustainability and customer care.",
        "Responsive Design: Ensures optimal viewing on various devices, including desktops and mobiles.",
        "Contact Options: Provides multiple ways for customers to get in touch, including call requests.",
      ],
      date: "February 3, 2025",
    },
    {
      id: 30,
      imgPath: amazon,
      title: "Amazon Clone",
      description:
        "A fully responsive e-commerce frontend.The design includes product grids, filtering, and cart UI, perfect for showcasing products in a clean and intuitive layout.",
      ghLink: "https://github.com/FadyAdel04/intern-ecommerce-front-end2",
      demoLink: "https://intern-ecommerce-front-end2.vercel.app/",
      skills: ["React", "Bootstrap", "React Router"],
      technologies: [],
      tools: ["Vercel", "GitHub"],
      keyFeatures: [
        "Product Display: Organized product cards with pricing and hover effects.",
        "Category Filter: Allows users to filter products by type.",
        "Shopping Cart UI: Cart sidebar for easy item management.",
        "Modern UI/UX: Clean design with smooth transitions.",
        "Responsive Design: Fully functional across all screen sizes.",
      ],
      date: "March 4, 2025",
    },
    {
      id: 5,
      imgPath: chat,
      title: "Chat 2 Chat App",
      description:
        "A chat room where users can exchange messages in real-time. The application uses WebSocket technology for live messaging, enabling seamless communication.",
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
      title: "Healthcare Management System",
      description:
        "The Healthcare Management System is a comprehensive application designed to manage hospital operations, including patient records, appointments, staff, and billing.",
      ghLink: "https://github.com/FadyAdel04/HealthcareSystem",
      demoLink: "", // Add demo link if available
      skills: ["HTML", "CSS", "JavaScript", "Net", "MySQL"],
      technologies: ["Laravel", "Bootstrap"],
      tools: ["VS Code", "GitHub"],
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
      description:
        "A home exercise platform offering personalized workout routines. It helps users monitor their fitness journey with a responsive design for any device.",
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
      title: "Eclipseful Learning Platform",
      description:
        "Eclipseful offers a variety of free programming courses with a user-friendly interface. Users can track their progress through interactive lessons.",
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
      description:
        "BrainWave offers an AI chatbot that understands user queries, providing real-time interaction. It enhances user experience with natural language processing.",
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
      description:
        "CarRent is a platform for users to rent vehicles conveniently. It features an intuitive interface for easy navigation and booking.",
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
      title: "TCJ-SPACE",
      description:
        "Evently is a comprehensive event management platform for users to create, manage, and promote events. It offers easy navigation and powerful features.",
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
      title: "Karma Master E-commerce",
      description:
        "Karma Master E-commerce is an online platform designed to showcase and sell Nike's latest collection.",
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
      title: "Travel App: Explore the World!",
      description:
        "TravelPlan is a travel planning platform for users to create itineraries and discover destinations. It features an intuitive interface for easy trip planning.",
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
      id: 31,
      imgPath: vivaDecor,
      title: "VivaDecor Website",
      description:
        "A landing page for VivaDecor, an interior design and decoration brand. The website highlights the brand's vision, services, and design expertise using modern web design principles.",
      ghLink: "https://github.com/FadyAdel04/VivaDecor",
      demoLink: "https://fadyadel04.github.io/VivaDecor/",
      skills: ["HTML", "CSS", "JavaScript"],
      technologies: [],
      tools: ["GitHub"],
      keyFeatures: [
        "Hero Section: Stylish intro with call-to-action for brand awareness.",
        "Service Highlights: Clean layout for showcasing design offerings.",
        "Modern Aesthetic: Sleek typography and engaging visuals.",
        "Responsive Layout: Works well on desktop and mobile devices.",
        "Smooth Navigation: Sections transition clearly for great UX.",
      ],
      date: "February 12, 2025",
    },
    {
      id: 14,
      imgPath: red, // Ensure you import this image in your projects.js file
      title: "Red Store Online Shop",
      description:
        "Red Store Online Shop is a vibrant e-commerce platform that specializes in showcasing workout apparel and the latest fitness offerings.",
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
      title: "TBH-Zen Resort",
      description:
        "TBH-Zen Resort is a luxurious boutique hotel located in the beautiful coastal city of Hurghada. The website showcases the resort's exquisite accommodations",
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
      id: 29,
      imgPath: moviesApp,
      title: "Movies App",
      description:
        "A sleek and modern movie discovery app that allows users to browse top-rated films, view detailed movie information, and watch trailers.",
      ghLink: "https://github.com/FadyAdel04/Movies-App",
      demoLink: "https://movies-app-six-tau.vercel.app/",
      skills: ["HTML", "CSS", "JavaScript"],
      technologies: [],
      tools: ["Vercel", "GitHub"],
      keyFeatures: [
        "Movie Search: Easily search for your favorite movies.",
        "Movie Details Page: Displays rating, overview, and trailers.",
        "Responsive Design: Fully functional on mobile and desktop.",
        "API Integration: Fetches data dynamically from a movie API.",
        "Modern UI: Stylish interface with engaging layout and visuals.",
      ],
      date: "February 11, 2025",
    },
    {
      id: 16,
      imgPath: shopping, // Replace with the actual path for the project image
      title: "Shopping Bag Shop",
      description:
        "Shopping Bag Shop is an e-commerce platform specializing in the sale of electronic products and gadgets. The website provides a sleek.",
      ghLink: "https://github.com/FadyAdel04/Tech-Trove-Shop",
      demoLink: "https://tech-trove-shop.vercel.app/",
      skills: ["React", "Next.js", "TypeScript", "Tailwind"],
      technologies: [],
      tools: ["VS Code", "API", "Strapi", "Vercel", "GitHub", "Firebase"],
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
      id: 17,
      imgPath: bootstrap, // Replace with the actual path for the main project image
      title: "Bootstrap Design Portfolio",
      description:
        "This project showcases a modern and responsive web design portfolio built with Bootstrap.",
      ghLink: "https://github.com/FadyAdel04/bootstrapDesign",
      demoLink: "https://fadyadel04.github.io/bootstrapDesign/",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      technologies: [],
      tools: ["VS Code", "Bootstrap", "GitHub Pages", "GitHub"],
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
      date: "February 10, 2024",
    },
    {
      id: 28,
      imgPath: register,
      title: "Login/Register System",
      description:
        "A responsive login and registration web app built with modern UI, user-friendly authentication flow, and smooth transitions.",
      ghLink: "https://github.com/FadyAdel04/-Login-Register-System",
      demoLink: "https://login-register-system.vercel.app/",
      skills: ["HTML", "CSS", "JavaScript"],
      technologies: [],
      tools: ["Vercel", "GitHub"],
      keyFeatures: [
        "Authentication Flow: Clean and functional login and registration forms.",
        "Form Validation: Basic client-side form validation for user input.",
        "Smooth Transitions: Animated form switch between login and register.",
        "Responsive Design: Fully optimized for both desktop and mobile users.",
        "Minimalist UI: Focused on simplicity and user experience.",
      ],
      date: "February 9, 2025",
    },
    {
      id: 18,
      imgPath: dash,
      title: "AdminHub Dashboard",
      description:
        "AdminHub is a responsive admin dashboard template built with Bootstrap. It provides a comprehensive layout for managing web applications",
      ghLink: "https://github.com/FadyAdel04/AdminHub",
      demoLink: "https://fadyadel04.github.io/AdminHub/",
      skills: ["HTML", "CSS", "Bootstrap"],
      technologies: [],
      tools: ["VS Code", "GitHub"],
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
      date: "January 15, 2024",
    },
    {
      id: 19,
      imgPath: spicial, // Replace with the actual path for the main project image
      title: "Special Design",
      description:
        "Special Design is a creative web template that showcases advanced layout techniques using modern web design tools.",
      ghLink: "https://github.com/FadyAdel04/special-design",
      demoLink: "https://fadyadel04.github.io/special-design/",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      technologies: [],
      tools: ["VS Code", "Bootstrap", "GitHub Pages", "GitHub"],
      keyFeatures: [
        "Modern UI Design: Sleek and creative design with attention to visual details.",
        "Responsive Layout: Fully responsive and adaptable for different screen sizes and devices.",
        "Custom Animations: Smooth transitions and animations that enhance user experience.",
        "Landing Page: An eye-catching landing section for attracting attention.",
        "Portfolio Display: Well-organized sections for showcasing work or products.",
        "Cross-Browser Compatibility: Works seamlessly across modern browsers.",
        "Interactive Elements: Features like hover effects and interactive buttons for engaging user interaction.",
      ],
      date: "December 10, 2023",
    },
    {
      id: 20,
      imgPath: phone, // Replace with the actual path for the main project image
      title: "Apple Template",
      description:
        "Apple Template is a sleek and minimalist web template inspired by Apple's design language. It incorporates clean lines",
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
      title: "DEVELOPMENT Template",
      description:
        "DEVELOPMENT Template is a visually appealing, responsive web template designed for showcasing professional services.",
      ghLink: "https://github.com/FadyAdel04/FADY-DEVELOPMENT-template",
      demoLink: "https://fadyadel04.github.io/FADY-DEVELOPMENT-template/",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      technologies: ["Bootstrap", "JavaScript", "CSS", "HTML"],
      tools: ["VS Code", "GitHub Pages", "GitHub"],
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
      title: "Phlox Template",
      description:
        "Phlox is a modern, multi-purpose web template suitable for showcasing portfolios,",
      ghLink: "https://github.com/FadyAdel04/Phlox",
      demoLink: "https://fadyadel04.github.io/Phlox/",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      technologies: ["Bootstrap", "JavaScript", "CSS", "HTML"],
      tools: ["VS Code", "GitHub Pages", "GitHub"],
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
      title: "Image Editor",
      description:
        "Image Editor is a powerful web-based tool for performing various image editing tasks.",
      ghLink: "https://github.com/FadyAdel04/img-editor",
      demoLink: "https://fadyadel04.github.io/img-editor/",
      skills: ["HTML", "CSS", "JavaScript"],
      technologies: ["JavaScript", "CSS", "HTML"],
      tools: ["VS Code", "GitHub Pages", "GitHub"],
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
      title: "CRUDS",
      description:
        "CRUDS is a web application that demonstrates the basic Create, Read, Update, and Delete (CRUD) operations.",
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
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
