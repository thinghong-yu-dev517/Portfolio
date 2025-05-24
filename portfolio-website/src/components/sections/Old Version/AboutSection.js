import React from "react";
import '../../styles/AboutSection.css'

const AboutSection = () => {
    return(
        <section id="about" className="about-page">
            <div className="about-body">
                <div className="about-left">
                    <img src="/87254D04-5998-4960-BF20-0EE679F4C04A_1_105_c.jpeg" alt="Yu Thing Hong" className="profile-pic" />
                </div>
                <div className="about-right">
                    <div className="about-content-group">
                        <h2 className="section-title">Yes. That's me.</h2>
                        <p className="statement">
                            I’m Yu Thing Hong — a pragmatic developer who values clarity, control, and results. With over 7 years of experience building web applications using ASP.NET, I’ve learned to trust my process and focus on what works. I don’t chase trends — I solve problems, write maintainable code, and build systems that last.
                        </p>
                        <div className="quick-facts">
                            <div><strong>📍 Location:</strong> Penang, MY</div>
                            <div><strong>🗣 Languages:</strong> English, Mandarin, Malay</div>
                            <div><strong>⚡ Style:</strong> Problem-solver.</div>
                        </div>
                        <div className="hint-block">
                            <p className="hint">Curious about my journey? Take a peek at what I’ve been building.</p>
                            <a href="#journey" className="about-link">→ See My Timeline</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;