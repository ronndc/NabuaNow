import React from "react";
import Navbar from "./Components/Navigation";
import Section from "./Components/Sections";
import styles from "./Styles/Styles";
import { useState, useEffect } from "react";
import ReactWeather, { useWeatherBit } from 'react-open-weather';

const apikey = process.env.API_KEY;

const App = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { data, isLoading, errorMessage } = useWeatherBit({
    key: apikey,
    lat: '14.5995',
    lon: '121.9842',
    lang: 'en',
    unit: 'M', // values are (M,S,I)
  });


  return (
    <div>
      <br></br>
      <br></br>
      <Navbar scrollToSection={scrollToSection} />
      <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Nabua"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
      />
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
