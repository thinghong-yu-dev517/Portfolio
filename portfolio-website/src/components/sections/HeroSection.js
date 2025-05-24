import React from "react";
import '../../styles/HeroSection.css';

const HeroSection = () => {
    return(
        <section className="section flex-row">
            <div className="left-div flex-column">
                <div className="main">
                    <div className="heading-font eye-focus">Hi, I'm—</div>
                    <div className="brand-font eye-focus heading">
                        <span>Yu</span>
                        <span>Thing</span>
                        <span>Hong</span>
                    </div>
                    <div className="heading-font eye-focus sub-heading">
                        <span className="block-line">A Web Developer</span>
                        <span className="block-line">who bring ideas to life.</span>
                    </div>
                </div>
                <div className="ctadiv">
                    <a href="#aboutsection" className="primary-btn">About me</a>
                    <a href='#contactsection' className="secondary-btn">Let's Talk</a>
                </div>
            </div>
            <div className="right-div">
                <div className="techImage"></div>
            </div>
        </section>
    );
}

export default HeroSection;