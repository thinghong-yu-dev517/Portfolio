import React from "react";
import '../../../styles/Old Version/HeroSection.css';

function HeroSection(){
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="tagline">Hi, Thing Hong here.</div>
                <h1>A Web Developer who brings ideas to life.</h1>
                <p>
                    I’m a full stack developer who codes with curiosity and solves problems with passion.
                    I build because I love it—and maybe, you’ll love it too.
                </p>
                <div className="btn-group">
                    <a href="#about" className="cta-button">Know more about me</a>
                    <a href="#contact" className="secondary-button">Let’s Talk</a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;