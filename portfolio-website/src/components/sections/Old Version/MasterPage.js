import React from "react"
import HeroSection from "./HeroSection";
import AboutSection from "../AboutSection";
import JourneySection from "../JourneySection";
import ProjectsSection from "../ProjectsSection";
import ContactSection from "../ContactSection";
import ScrollCue from "../../ScrollCue";
import '../../../styles/MasterPage.css'

const MasterPage = () => {
    const sectionIds = ['hero', 'about', 'journey', 'projects', 'contact'];

    return (
        <div className="main-content">
            {/* <nav>
                <ul>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav> */}
            <div id = "hero"><HeroSection></HeroSection></div>
            <div className="gradient-bar" />
            <div id = "about"><AboutSection></AboutSection></div>
            <div className="gradient-bar" />
            <div id = "journey"><JourneySection></JourneySection></div>
            <div className="gradient-bar" />
            <div id = "project"><ProjectsSection></ProjectsSection></div>
            <div className="gradient-bar" />
            <div id = "contact"><ContactSection></ContactSection></div>
            {/* <div className="scroll-cue">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div> */}
            <ScrollCue></ScrollCue>
        </div>
    );
}

export default MasterPage;