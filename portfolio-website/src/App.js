import React from "react";
import HeroSection from "./components/sections/HeroSection";
import './styles/App.css';
import AboutSection from "./components/sections/AboutSection";

function App(){
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
    </div>
  );
}

export default App;