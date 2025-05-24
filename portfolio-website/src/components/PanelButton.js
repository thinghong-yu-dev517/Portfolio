import React, { useState } from 'react';
import CollapseIconTextLight from '../image/icon/CollapseIconDesktopTextLight.svg';
import CollapseIconAccent from '../image/icon/CollapseIconDesktopAccent.svg';
import CollapseIconPrimary from '../image/icon/CollapseIconDesktopPrimary.svg';
import ExpandIconTextLight from '../image/icon/ExpandIconDesktopTextLight.svg';
import ExpandIconPrimary from '../image/icon/ExpandIconDesktopPrimary.svg';
import ExpandIcon from '../image/icon/ExpandIconDesktopBackground.svg';

const PanelButton = ({ collapsed, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  let iconSrc;

  if (collapsed) {
    iconSrc = isHovered ? ExpandIconTextLight : ExpandIconPrimary;
  } else {
    iconSrc = isHovered ? CollapseIconTextLight : CollapseIconPrimary;
  }

  return (
    <button
      className="panel-button" onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={iconSrc}
        alt={collapsed ? "Expand Navbar" : "Collapse Navbar"}
        className="icon-button"
      />
    </button>
  );
};

export default PanelButton;
