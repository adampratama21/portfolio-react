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

function App() {
  const certificates = [
    {
      name: "ET Set Certification",
      description:
        "Score : 73/100 | Proficiency Level : C2 Proficient (71/100)",
      dateIssued: "20 Aug 2023",
      issuedBy: "EF (English First)",
      image: "/images/EF_SET_Certificate.png",
      link: "/images/EF_SET_Certificate.png",
    },
    {
      name: "Responsive Web Design",
      description: "Responsive Web Design Certificate",
      dateIssued: "15 May 2024",
      issuedBy: "freeCodeCamp",
      image: "/images/Responsive_Web_Design-freeCodeCamp.png",
      link: "/images/Responsive_Web_Design-freeCodeCamp.png",
    },
  ];

  const projects = [
    {
      name: "Landing Page Coffee Shop",
      description: "A landing page for a fictional coffee shop",
      techStack: "HTML, CSS, Bootstrap, JavaScript",
      image: "/images/landing_page_coffee_shop.PNG",
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
