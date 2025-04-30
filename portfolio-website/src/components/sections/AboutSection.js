import React from "react";
import '../../styles/AboutSection.css'

function AboutSection(){
    return(
        <section className="about">
            <h2>About Me</h2>
            <p>
                Hi, I'm Yu Thing Hong - a passionate web developer who loves turning ideas into clean, efficient code. With experience in frontend and backend technologies, I enjoy building apps that are fast, accessible, and user-friendly.
            </p>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Node.js</li>
                    <li>SQL</li>
                    <li>HTML & CSS</li>
                    <li>Git / GitHub</li>
                </ul>
            </div>
        </section>
    );
}

export default AboutSection;