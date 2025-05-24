import React, { useEffect, useState, useRef } from "react";
import '../../styles/Navbar.css';
import PanelButton from '../PanelButton.js';


const sections = [
    { id: 'herosection', label: 'Home' },
    { id: 'aboutsection', label: 'About' },
    { id: 'experiencesection', label: 'Experience' },
    { id: 'projectsection', label: 'Projects' },
    { id: 'contactsection', label: "Let's Talk" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('herosection');
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const linksRef = useRef({});
    const containerRef = useRef(null);
    const [collapsed, setCollapsed] = useState(false);

    
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 150;

            for (let section of sections){
                const el = document.getElementById(section.id);
                if (el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const activeLink = linksRef.current[activeSection];
        const container = containerRef.current;
      
        if (activeLink && container) {
          requestAnimationFrame(() => {
            const linkRect = activeLink.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            setIndicatorStyle({
                left: linkRect.left - containerRect.left,
                width: linkRect.width,
                height: linkRect.height,
            });
          });
        }
      }, [activeSection]);

    return (
        <div className={`nav-container ${collapsed ? 'collapsed' : ''}`}>
            <nav className={`pill-navbar ${collapsed ? 'collapsed' : ''}`} ref={containerRef}>
                <div className="pill-indicator" style={indicatorStyle}></div>
                <ul className="pill-navbar-links">
                    <li>
                        <PanelButton collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)}></PanelButton>
                    </li>
                    {!collapsed && sections.map((section) => (
                        <li key={section.id}>
                            <a 
                                href={`#${section.id}`} 
                                ref={(el) => (linksRef.current[section.id] = el)}
                                className={activeSection === section.id ? 'active' : ''}
                            >
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
      );
}

export default Navbar;