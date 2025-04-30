import React from "react";
import HeroSection from "./components/sections/HeroSection";
import './styles/App.css';
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";

function App(){
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}

export default App;