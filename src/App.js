import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navigation";
import Section from "./Components/Sections";
import styles from "./Styles/Styles";
import "./App.css";

// OpenWeather API Key and Endpoint
const API_KEY = "b7ea8e8e1f339948eaeb41ce38c70c6e";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [location, setLocation] = useState("Nabua"); // Default location

  // Fetch live weather data from OpenWeather API
  useEffect(() => {
    // Fetch weather and forecast data for the location
    axios
      .get(`${WEATHER_API_URL}?q=${location}&appid=${API_KEY}&units=metric`)
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.error("Error fetching weather data:", error));

    axios
      .get(`${FORECAST_API_URL}?q=${location}&appid=${API_KEY}&units=metric`)
      .then((response) => setForecastData(response.data))
      .catch((error) => console.error("Error fetching forecast data:", error));
  }, [location]); // Fetch when location changes

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="main-cont">
      <Navbar scrollToSection={scrollToSection} setLocation={setLocation} />
      {/* Section 1: Hero Banner with Live Alerts */}
      <Section
        id="hero-banner"
        title="Live Alerts"
        style={{
          ...styles.section,
          backgroundColor: "grey", // Red for urgent alerts
          padding: "20px",
          borderRadius: "8px",
        }}
        content={
          <>
            <div className="static-banner">
              {alerts.length > 0
                ? alerts.map((alert, index) => (
                    <span key={index} className="alert-item">{alert}</span>
                  ))
                : "No current alerts"}
            </div>
            <div className="key-stats-dashboard">
              {weatherData && (
                <>
                  <div className="stat-card">
                    <div className="stat-icon">🌡️</div>
                    <div className="stat-value">
                      <strong>Temperature:</strong> {weatherData.main.temp}°C
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">🌧️</div>
                    <div className="stat-value">
                      <strong>Rain:</strong> {weatherData.weather[0].main}
                    </div>
                  </div>
                  {/* Add traffic conditions here as necessary */}
                  <div className="stat-card">
                    <div className="stat-icon">🚗</div>
                    <div className="stat-value">
                      <strong>Traffic:</strong> Clear
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        }
      />



      {/* Section 2: Real-Time Weather Updates */}
      <Section
        id="weather-updates"
        title="Real-Time Weather Updates"
        style={{ ...styles.section, backgroundColor: "#e3f2fd", padding: "20px", borderRadius: "8px" }}
        content={
          <>
            <h3>Current Weather Conditions</h3>
            {weatherData && (
              <div className="weather-container">
                <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
                <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
              </div>
            )}
            <h3>Weather Forecast (5 Days)</h3>
            {forecastData && (
              <div className="forecast-container">
                {Object.values(forecastData.list.reduce((acc, forecast) => {
                  // Get the date for the forecast entry
                  const forecastDate = new Date(forecast.dt * 1000);
                  const day = forecastDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  });

                  // If the date isn't already in the accumulator, add it
                  if (!acc[day]) {
                    acc[day] = forecast;
                  }

                  return acc;
                }, {})) // Convert object to array
                  .slice(0, 7) // Get first 7 unique days
                  .map((forecast, index) => (
                    <div key={index} className="forecast-item">
                      <p><strong>{new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</strong></p>
                      <p><strong>Temp:</strong> {forecast.main.temp}°C</p>
                      <p><strong>Weather:</strong> {forecast.weather[0].description}</p>
                    </div>
                  ))}
              </div>
            )}
          </>
        }
      />



      {/* Section 3: Traffic and Road Conditions */}
      <Section
        id="traffic"
        title="Traffic and Road Conditions"
        style={{ ...styles.section, backgroundColor: "#e8f5e9" }}
        content={
          <>
            <h3>Live Traffic Map</h3>
            <div>{/* Integrate traffic map here using another API */}</div>
            <h3>Traffic Advisory</h3>
            <div>{/* Display traffic advisories here */}</div>
          </>
        }
      />

      {/* Section 4: Flood Alerts & Emergency Updates */}
      <Section
        id="flood-alerts"
        title="Flood Alerts & Emergency Updates"
        style={{ ...styles.section, backgroundColor: "#fbe9e7" }}
        content={
          <>
            <h3>Flood Monitoring</h3>
            <div>{/* Integrate flood risk zone data here */}</div>
            <h3>Emergency Alerts</h3>
            <div>{/* Display emergency alerts here */}</div>
          </>
        }
      />

      {/* Section 5: Announcements and Local News */}
      <Section
        id="announcements"
        title="Announcements and Local News"
        style={{ ...styles.section, backgroundColor: "#fbe9e7" }}
        content={
          <>
            <h3>Official Government Announcements</h3>
            <div>{/* Display announcements here */}</div>
          </>
        }
      />

      <Footer />
    </div>
  );
};

const Footer = () => (
  <div className="footer">
    <p>Contact Information: Emergency services: 123-456-7890</p>
    <p>
      Follow us on{" "}
      <a href="https://facebook.com">Facebook</a> |{" "}
      <a href="https://twitter.com">Twitter</a>
    </p>
    <p>Credits: OpenWeather, Local Government</p>
  </div>
);

export default App;
