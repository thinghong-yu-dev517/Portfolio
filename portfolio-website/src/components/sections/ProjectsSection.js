import React from "react";
import "../../styles/ProjectsSection.css"

const ProjectsSection = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <h2>My Projects</h2>
                <p>Check out some of the amazing things I've built!</p>
            </div>
            <div className="projects-list">
                <div className="project-item">
                    <img src="../../../public/favicon.ico" alt="Project 1" className="project-image" />
                    <h3>Project Title 1</h3>
                    <p>Short description of the project. What it does and why it's awesome!</p>
                    <a href="#">View on GitHub</a>
                </div>
                <div className="project-item">
                    <img src="../../../public/favicon.ico" alt="Project 2" className="project-image" />
                    <h3>Project Title 2</h3>
                    <p>Short description of the project. What it does and why it's awesome!</p>
                    <a href="#">View on GitHub</a>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;