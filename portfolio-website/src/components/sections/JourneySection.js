import React from "react";
import '../../styles/JourneySection.css';

const JourneySection = () => {
    const timeline = [
        { title: 'On My Way Looking for Job', start: 2016, end: 2017 },
        { title: 'Mechanical Technician @ Jabil', start: 2017, end: 2018 },
        { title: 'Full Stack Web Developer @ Jabil', start: 2018, end: 2020 },
        { title: 'Software Engineer I @ Xilnex', start: 2020, end: 2022 },
        { title: 'Software Engineer II @ Xilnex', start: 2022, end: 2025 },
        { title: 'Software Engineer III @ Xilnex', start: 2025, end: 2025 },
        { title: 'Diploma in CS & CM, TARUMT', start: 2014, end: 2016, education: true },
    ];

    const stacks = {
        frontend: [
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
        ],
        backend: [
            { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
            { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
        ],
        database: [
            { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
        ]
    };
    
    const currentYear = 2025;
    const baseYear = 2014;
    const totalYears = currentYear - baseYear;
    const years = Array.from({ length: totalYears + 1 }, (_, i) => baseYear + i);

    return (
        <section id="journey" className="journey-section">
            <h2 className="timeline-heading">From Passion to Profession</h2>
            <div className="timeline-wrapper">
                <div className="y-axis">
                    <div className="y-label">Work Experience</div>
                    <div className="y-label">Education</div>
                </div>
                <div className="timeline-container">
                    <div className="timeline-chart">
                        {timeline.map((item, index) => {
                            const widthPercent = ((item.end - item.start) / totalYears) * 100;
                            const leftPercent = ((item.start - baseYear) / totalYears) * 100;
                            return (
                                <div
                                    key={index}
                                    className={`timeline-bar ${item.education ? 'education' : 'work'}`}
                                    style={{ width: `${widthPercent}%`, left: `${leftPercent}%` }}
                                >
                                    <span className="tooltip" data-tip={`${item.title} (${item.start} - ${item.end})`}>
                                        {item.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="x-axis">
                        {years.map((year, index) => (
                            <div key={index} className="x-tick">{year}</div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="stack-section">
                <h3>What I Work With</h3>
                <div className="stack-grid">
                    {Object.entries(stacks).map(([category, tools]) => (
                        <div className="stack-card" key={category}>
                            <h4 className="stack-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                            <ul className="stack-list">
                                {tools.map((tech, i) => (
                                    <li key={i} className="stack-item">
                                        <img src={tech.icon} alt={tech.name} className="stack-icon" />
                                        {tech.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
