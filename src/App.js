import React from "react";

const App = () => {
  // Function to handle scrolling to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navigation Menu */}
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

      {/* Sections */}
      <section id="home" style={{ ...styles.section, backgroundColor: "#f4f4f4" }}>
        <h1>Home</h1>
        <p>Welcome to the Home section.</p>
      </section>

      <section id="weather" style={{ ...styles.section, backgroundColor: "#e3f2fd" }}>
        <h1>Weather</h1>
        <p>This is the Weather section.</p>
      </section>

      <section id="traffic" style={{ ...styles.section, backgroundColor: "#e8f5e9" }}>
        <h1>Traffic</h1>
        <p>Here are the Traffic.</p>
      </section>

      <section id="alerts" style={{ ...styles.section, backgroundColor: "#fbe9e7" }}>
        <h1>Flood Alerts</h1>
        <p>Learn more in the alerts section.</p>
      </section>

      <section id="announcements" style={{ ...styles.section, backgroundColor: "#fbe9e7" }}>
        <h1>Announcements</h1>
        <p>Learn more in announcements section.</p>
      </section>

      <section id="contacts" style={{ ...styles.section, backgroundColor: "#fbe9e7" }}>
        <h1>Contacts</h1>
        <p>Learn more in the contacts section.</p>
      </section>
    </div>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#333",
    zIndex: 1000,
    padding: "10px 0",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  menuItem: {
    margin: "0 15px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  section: {
    height: "100vh",
    padding: "50px",
    boxSizing: "border-box",
  },
};

export default App;
