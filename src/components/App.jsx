import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificates from "./Certificates";
import Project from "./Project";
import Footer from "./Footer";
import BackToTopButton from "./BackToTop";
import efset from "../assets/images/EF_SET_Certificate.png";
import rwd from "../assets/images/Responsive_Web_Design-freeCodeCamp.png";
import landing from "../assets/images/landing_page_coffee_shop.png";
import datacert from "../assets/images/CertificateOfCompletion_Career Essentials in Data Analysis by Microsoft and LinkedIn-1.png";
import dataprojects from "../assets/images/data_analytics_projects.png";

function App() {
  const certificates = [
    {
      name: "Career Essentials in Data Analysis",
      description:
        "Career Essentials in Data Analysis by Microsoft and LinkedIn",
      dateIssued: "10 Jul 2025",
      issuedBy: "Microsoft",
      image: datacert,
      link: "https://www.linkedin.com/learning/certificates/9714dc5b60f6b5463b23613a6c6a0e75ba4d76870355eeccbbd003e36b6c7bca",
    },
    {
      name: "Responsive Web Design",
      description: "Responsive Web Design Certificate",
      dateIssued: "15 May 2024",
      issuedBy: "freeCodeCamp",
      image: rwd,
      link: "https://www.freecodecamp.org/certification/adampratama21/responsive-web-design",
    },
    {
      name: "ET Set Certification",
      description:
        "Score : 73/100 | Proficiency Level : C2 Proficient (71/100)",
      dateIssued: "20 Aug 2023",
      issuedBy: "EF (English First)",
      image: efset,
      link: "https://cert.efset.org/r7PLyR",
    },
  ];

  const projects = [
    {
      name: "Personal Data Analytics Projects",
      description:
        "A GitHub repository to store a collection of small data analytics projects",
      techStack: "Currently - Excel, Power BI Desktop",
      image: dataprojects,
      repoLink:
        "https://github.com/adampratama21/data-analytics-projects/tree/main",
    },
    {
      name: "Landing Page Coffee Shop",
      description: "A landing page for a fictional coffee shop",
      techStack: "HTML, CSS, Bootstrap, JavaScript",
      image: landing,
      repoLink: "https://github.com/adampratama21/landing-page-coffee-shop",
      projectLink: "https://adampratama21.github.io/landing-page-coffee-shop/",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Certificates certificates={certificates || []} />
        <Project projects={projects || []} />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
