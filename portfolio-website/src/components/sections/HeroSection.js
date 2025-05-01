import React, { useState, useEffect } from "react";
import '../../styles/HeroSection.css';

function HeroSection(){
    const greetings = [ "Hi, I'm Thing Hong.", "嗨，我是廷丰。" ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const charInterval = setInterval(() => {
            if (charIndex < greetings[currentIndex].length) {
                setCharIndex((prev) => prev + 1);
            }
            else {
                clearInterval(charInterval);
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % greetings.length);
                    setCharIndex(0);
                }, 2000)
            }
        }, 100);

        return () => clearInterval(charInterval);
    }, [charIndex, currentIndex])

    return (
        <section className="hero">
            <div className="heroContent">
                <h1>
                    {greetings[currentIndex].slice(0, charIndex)}
                    <span className="blinking-cursor">|</span>
                </h1>
                <p>A Web Developer</p>
                <button className="cta-button">Get In Touch</button>
            </div>
        </section>
    );
}

export default HeroSection;