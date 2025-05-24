import React from "react";
import "../../styles/ProjectsSection.css";

const ProjectsSection = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <h2>Things I'm Working On</h2>
                <p>Good things take time—stay tuned for exciting updates.</p>
            </div>
            <div className="projects-placeholder">
                <div className="coming-soon-card">
                    <span className="emoji">🚧</span>
                    <h3>Projects Coming Soon</h3>
                    <p>I’m crafting something cool. Check back later!</p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;