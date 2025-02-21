import React, { useState } from "react";
import "../styles/dropdownText.scss";

const Dropdown = ({
  dropdowntitle = "Titre par défaut",
  dropdowncontent = "Texte par défaut",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {dropdowntitle}
        <div className={`chevron-down ${isOpen ? "active" : ""}`}>
          <img src="/images/chevron_down.svg" alt="chevron" />
        </div>
        <div className={`chevron-up ${!isOpen ? "active" : ""}`}>
          <img src="/images/chevron_up.svg" alt="chevron" />
        </div>
      </button>
      <div className={`dropdown-content ${isOpen ? "active" : ""}`}>
        {dropdowncontent}
      </div>
    </div>
  );
};

export default Dropdown;
