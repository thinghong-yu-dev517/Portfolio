import React from "react";
import '../../styles/HeroSection.css';

function HeroSection(){
    return (
        <section className="hero">
            <div className="heroContent">
                <h1>Welcome to Yu Thing Hong's Portfolio</h1>
                <p>Let's build something amazing together!</p>
                <button className="cta-button">Get In Touch</button>
            </div>
        </section>
    );
}

export default HeroSection;