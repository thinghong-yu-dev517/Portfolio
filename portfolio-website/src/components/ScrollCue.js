import React, { useEffect, useState } from 'react';

const ScrollCue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionIds = ['hero', 'about', 'journey', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => document.getElementById(id));
      const scrollY = window.scrollY + window.innerHeight / 2;

      const visibleIndex = sections.findIndex(section =>
        section.offsetTop <= scrollY && scrollY < section.offsetTop + section.offsetHeight
      );

      if (visibleIndex !== -1) setCurrentIndex(visibleIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (index) => {
    const el = document.getElementById(sectionIds[index]);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {currentIndex > 0 && (
        <div className="scroll-cue" style={{ top: '1rem', bottom: 'unset', cursor: 'pointer' }} onClick={() => scrollTo(currentIndex - 1)}>
          ↑
        </div>
      )}
      {currentIndex < sectionIds.length - 1 && (
        <div className="scroll-cue" style={{ bottom: '1rem', top: 'unset', cursor: 'pointer' }} onClick={() => scrollTo(currentIndex + 1)}>
          ↓
        </div>
      )}
    </>
  );
};

export default ScrollCue;