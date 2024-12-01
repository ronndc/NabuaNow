import React from "react";
import styles from "../Styles/Styles";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.menu}>
        <li style={styles.menuItem} onClick={() => scrollToSection("home")}>
          HomePage
        </li>
        <li style={styles.menuItem} onClick={() => scrollToSection("weather")}>
          Weather
        </li>
        <li style={styles.menuItem} onClick={() => scrollToSection("traffic")}>
          Traffic
        </li>
        <li style={styles.menuItem} onClick={() => scrollToSection("alerts")}>
          Flood Alerts
        </li>
        <li style={styles.menuItem} onClick={() => scrollToSection("announcements")}>
          Announcements
        </li>
        <li style={styles.menuItem} onClick={() => scrollToSection("contacts")}>
          Contacts
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
