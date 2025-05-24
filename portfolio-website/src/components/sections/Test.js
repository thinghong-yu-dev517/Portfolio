import '../../styles/Test.css';
import React, { useState, useRef, useEffect } from 'react';
import PanelButton from '../PanelButton';

const sections = [
  { id: 'herosection', label: 'Home' },
  { id: 'aboutsection', label: 'About' },
  { id: 'experiencesection', label: 'Experience' },
  { id: 'projectsection', label: 'Projects' },
  { id: 'contactsection', label: "Contact   " },
];

const Test = () => {
  const [activeSection, setActiveSection] = useState('herosection');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const liRefs = useRef({}); // Changed from linksRef to liRefs
  const containerRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has been triggered

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (let section of sections) {
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
    // Only update indicator when not collapsed and activeSection exists
    if (!collapsed && activeSection) {
      const activeLi = liRefs.current[activeSection]; // Get the li element, not the a element
      const container = containerRef.current;
      
      if (activeLi && container) {
        requestAnimationFrame(() => {
          const liRect = activeLi.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          
          setIndicatorStyle({
            left: liRect.left - containerRect.left + container.scrollLeft,
            width: liRect.width,
            height: liRect.height,
            opacity: 1, // Make sure it's visible
          });
        });
      }
    } else {
      // Hide indicator when collapsed
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection, collapsed]);

  // Function to determine nav class based on animation state
  const getNavClassName = () => {
    if (!hasAnimated) {
      return collapsed ? 'collapsed-initial' : 'expanded-initial';
    }
    return collapsed ? 'collapsed' : 'expanded';
  };

    const handleToggle = () => {
        setHasAnimated(true);
        setCollapsed(!collapsed);

        if (collapsed) { // If expanding
            setTimeout(() => {
                // Force re-calculation of indicator position
                const activeLi = liRefs.current[activeSection];
                const container = containerRef.current;

                if (activeLi && container) {
                    // Add requestAnimationFrame for more accurate positioning
                    requestAnimationFrame(() => {
                        const liRect = activeLi.getBoundingClientRect();
                        const containerRect = container.getBoundingClientRect();

                        setIndicatorStyle({
                            left: liRect.left - containerRect.left + container.scrollLeft,
                            width: liRect.width,
                            height: liRect.height,
                            opacity: 1,
                        });
                    });
                }
            }, 500); // Match your animation duration
        }
    };
    useEffect(() => {
        const handleResize = () => {
            if (!collapsed && activeSection) {
                const activeLi = liRefs.current[activeSection];
                const container = containerRef.current;
                
                if (activeLi && container) {
                    requestAnimationFrame(() => {
                        const liRect = activeLi.getBoundingClientRect();
                        const containerRect = container.getBoundingClientRect();
                        
                        setIndicatorStyle({
                            left: liRect.left - containerRect.left + container.scrollLeft,
                            width: liRect.width,
                            height: liRect.height,
                            opacity: 1,
                        });
                    });
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeSection, collapsed]);

  return (
    <div className="T1">
      <nav>
        <ul className={getNavClassName()} ref={containerRef}>
          <div className="pill-indicator" style={indicatorStyle}></div>
          <li>
            <PanelButton collapsed={collapsed} onToggle={handleToggle}></PanelButton>
          </li>
          {!collapsed && sections.map((section) => (
            <li 
              key={section.id}
              ref={(el) => (liRefs.current[section.id] = el)} // Ref now points to li element
            >
              <a
                href={`#${section.id}`}
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

export default Test;