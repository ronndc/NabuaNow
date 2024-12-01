import React from "react";
import Navbar from "./Components/Navigation";
import Section from "./Components/Sections";
import styles from "./Styles/Styles";

const App = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <Section id="home" title="Home" content="Welcome to the Home section." style={{ ...styles.section, backgroundColor: "#f4f4f4" }} />
      <Section id="weather" title="Weather" content="This is the Weather section." style={{ ...styles.section, backgroundColor: "#e3f2fd" }} />
      <Section id="traffic" title="Traffic" content="Here is the Traffic section." style={{ ...styles.section, backgroundColor: "#e8f5e9" }} />
      <Section id="alerts" title="Flood Alerts" content="Learn more in the alerts section." style={{ ...styles.section, backgroundColor: "#fbe9e7" }} />
      <Section id="announcements" title="Announcements" content="Learn more in the announcements section." style={{ ...styles.section, backgroundColor: "#fbe9e7" }} />
      <Section id="contacts" title="Contacts" content="Learn more in the contacts section." style={{ ...styles.section, backgroundColor: "#fbe9e7" }} />
    </div>
  );
};

export default App;
