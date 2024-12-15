import React, { useState } from "react";
import styles from "../Styles/Styles";

const Navbar = ({ scrollToSection, setLocation }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const menuItems = [
    { label: "Home", section: "home" },
    { label: "Weather", section: "weather" },
    { label: "Details", section: "details" },
    { label: "Alerts", section: "alerts" },
    { label: "Announcements", section: "announcements" },
  ];

  const handleScroll = (section) => {
    if (typeof scrollToSection === "function") {
      scrollToSection(section);
    } else {
      console.error("scrollToSection is not a function");
    }
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== "") {
      setLocation(searchQuery); // Update the location state in the parent component
    }
  };

  return (
    <nav style={styles.nav} aria-label="Main Navigation">
      <div style={styles.logoContainer}>
        <img 
          src="logo.jpg" 
          alt="Weather Logo" 
          style={styles.logo} 
        />
        <span style={styles.logoText}>Nabua Now</span>
      </div>
      
      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter a location..."
          style={styles.searchInput}
        />
        <button onClick={handleSearchSubmit} style={styles.searchButton}>
          Search
        </button>
      </div>

      <ul style={styles.menu}>
        {menuItems.map((item) => (
          <li
            key={item.section}
            style={{
              ...styles.menuItem,
              ...(hoveredItem === item.section ? styles.menuItemHover : {}),
            }}
            onClick={() => handleScroll(item.section)}
            onMouseEnter={() => handleMouseEnter(item.section)}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
