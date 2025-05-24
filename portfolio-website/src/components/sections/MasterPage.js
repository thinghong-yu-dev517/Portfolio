import React from "react";
import '../../styles/MasterPage.css'
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import JourneySection from "./JourneySection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const MasterPage2 = () => {
    return (
        <div>
            <div id="herosection">
                <HeroSection></HeroSection>
            </div>
            <div id="aboutsection">
                <AboutSection></AboutSection>
            </div>
            <div id="journeysection">
                <JourneySection></JourneySection>
            </div>
            <div id="projectsection">
                <ProjectsSection></ProjectsSection>
            </div>
            <div id="contactsection">
                <ContactSection></ContactSection>
            </div>
        </div>
    );
}

export default MasterPage2;