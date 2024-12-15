import React, { useEffect, useState } from "react";
import ReactWeather, { useWeatherBit } from 'react-open-weather';
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
  const [location, setLocation] = useState("Nabua, Camarines Sur"); // Default location

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
  const { data, isLoading, errorMessage } = useWeatherBit({
    key: 'a7df7a1e4551459aacedf7b054f2e873',
    lat: '13.3961',
    lon: '123.3374',
    lang: 'en',
    unit: 'M', // values are (M,S,I)
  });

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} setLocation={setLocation} />
      {/* Section 1: Hero Banner with Live Alerts */}
      <Section
        id="home"
        title=""
        style={{
          ...styles.section,
          backgroundColor: "#81BFDA",
          borderRadius: "8px",
        }}
        content={
          <>
            <div className="nabua">
              <h1>NABUA NOW</h1>
              <p>Real-time Weather, Traffic, and Announcements Hub</p>
              <div className="search">
                <input type="text" placeholder="Search..." />
                <button>🔍</button>
              </div>
              <div className="buttons">
                <button>SERVICES</button>
                <button>UPDATES</button>
              </div>
            </div>
          </>
        }
      />

      {/* Section 3: Traffic and Road Conditions */}
      <Section
        id="weather"
        title="Weather Forecast"
        style={{ ...styles.section, backgroundColor: "#e8f5e9" }}
        content={
          <>
             <div>
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Nabua, Camarines Sur"
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
              />
            </div>
          </>
        }
      />

      {/* Section 2: Real-Time Weather Updates */}
      <Section
        id="details"
        title="Details"
        style={{ ...styles.section, backgroundColor: "#e3f2fd", borderRadius: "8px" }}
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
            <h3>Weather Forecast</h3>
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

      {/* Section 4: Alerts */}
      <Section
      id="alerts"
      title="Flood Alerts & Emergency Updates"
      style={{ ...styles.section, backgroundColor: "#fbe9e7" }}
      content={
        <>
          <div className="announcements-section">
            <div className="bulletin">
              <input type="checkbox" id="bulletin-toggle" className="bulletin-toggle" />
              <label htmlFor="bulletin-toggle" className="bulletin-header">
                <span>INFORMATION BULLETIN 1: Threat of River Flooding in Nabua and Nearby Areas</span>
                <span className="arrow">►</span>
              </label>
              <div className="bulletin-content">
                <p><strong>Date & Time Issued:</strong> December 15, 2024, at 6:00 AM</p>
                <p><strong>Current Situation:</strong> While water levels in major rivers have remained stable over the past few days, heavy rain is expected, which could result in flooding in low-lying areas.</p>
                <p><strong>Potential Impact:</strong> Floodwaters may cover roads, especially in flood-prone zones, potentially disrupting transportation and access.</p>
                
                <h5>Residents are advised to:</h5>
                <ul>
                  <li><strong>Stay Alert:</strong> Monitor updates from PAGASA and local authorities.</li>
                  <li><strong>Avoid Flood-Prone Areas:</strong> Refrain from traveling through low-lying roads or areas prone to waterlogging.</li>
                  <li><strong>Prepare Ahead:</strong> Secure belongings, prepare emergency kits, and ensure safety measures are in place.</li>
                </ul>
                <p>
                  Stay vigilant and prioritize safety during this time. For updates, follow advisories and listen to local government announcements.
                </p>
              </div>
            </div>
          </div>
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
          <h3 className="section-header">Official Government Announcements</h3>
          <div className="announcements-section">
            <div className="bulletin">
              <input type="checkbox" id="bulletin-1" className="bulletin-toggle" />
              <label htmlFor="bulletin-1" className="bulletin-header">
                Bicol Medical Center Hosts Free HIV Testing in Nabua
                <span className="arrow">&#9654;</span>
              </label>
              <div className="bulletin-content">
                <p>
                  In its ongoing efforts to combat HIV, the Bicol Medical Center is hosting a Free HIV Testing Program on December 10, 2024. The event will take place at the Covered Court in Sto. Domingo, Nabua, Camarines Sur, from 8:00 AM to 3:00 PM.
                </p>
                <p>
                  This initiative aims to raise awareness about HIV and encourage individuals to take proactive steps toward their health. The free testing is open to everyone, providing a safe and confidential space for participants to learn their status.
                </p>
                <p>
                  Through this campaign, Bicol Medical Center seeks to reduce stigma and promote early detection and treatment. Residents of Nabua and neighboring areas are encouraged to take advantage of this free service to support the fight against HIV.
                </p>
                <p>
                  For more information, visit the event site on December 10 and join this crucial health advocacy.
                </p>
              </div>
            </div>

            <div className="bulletin">
              <input type="checkbox" id="bulletin-2" className="bulletin-toggle" />
              <label htmlFor="bulletin-2" className="bulletin-header">
                SK Launches “Rebuilding Hope” Program to Aid Elementary Students Affected by Typhoons
                <span className="arrow">&#9654;</span>
              </label>
              <div className="bulletin-content">
                <p>
                  In the wake of recent typhoons that devastated Nabua, leaving infrastructure and properties heavily damaged, the education of countless students has been severely disrupted. Recognizing this pressing need, the Sangguniang Kabataan (SK) of Barangay San Miguel is launching a relief program titled "Rebuilding Hope: SKool Supplies for Elementary Students after Disaster."
                </p>
                <p>
                  The distribution event will take place on December 8, 2024, at 9:00 AM in the Barangay San Miguel Covered Court. This initiative aims to provide essential school supplies to elementary students affected by the calamities, equipping them with the tools they need to continue their education despite the challenges.
                </p>
                <p>
                  The SK encourages all eligible students to join this meaningful event. Together, let us rebuild hope and foster resilience in our young learners as they move forward from the recent disasters.
                </p>
                <p>
                  For inquiries or more information, contact the SK officials of Barangay San Miguel.
                </p>
              </div>
            </div>
          </div>
        </>
      }
    />


      {/*Footer */}
      <Footer />
    </div>
      );
    };
    const Footer = () => (
      <div className="footer">
          <div className="flex1">
            <h2>Contact Us:</h2>
            <p>You may contact us thru our official primary telecommunication lines:</p>
            <p>Municipal Hall Building, San Isidro Nabua, Camarines Sur</p>
            <p>Trunkline: <span className="contact-number">(054) 228-3595</span></p>
            <p>Mayor's Office: <span className="contact-number">(054) 288-4622</span></p>
            <p>Email: <span className="contact-email">lgunabua9@gmail.com</span></p>
          </div>

          <div className="flex2">
            <h2>Local Hotlines:</h2>
            <ul>
              <li>Public Information Unit: <span className="contact-number">89279308</span> (Local: 1100)</li>
              <li>Information Media Affairs Unit: <span className="contact-number">89256943</span> (Local: 4865)</li>
              <li>Weather Division: <span className="contact-number">89272877, 89271335, 89264258</span> (Local: 4801 / 4802)</li>
            </ul>
          </div>

          <div className="flex3">
            <h2>About GOVPH</h2>
            <p>Learn more about the Philippine government, its structure, how government works, and the people behind it.</p>
            <ul>
              <li><a href="https://dilg.gov.ph/" target="_blank" rel="noopener noreferrer">Department of Interior and Local Government</a></li>
              <li><a href="https://www.pagasa.dost.gov.ph/" target="_blank" rel="noopener noreferrer">PAGASA</a></li>
              <li><a href="https://ndrrmc.gov.ph/" target="_blank" rel="noopener noreferrer">NDRRMC</a></li>
            </ul>
          </div>
      </div>
    );


export default App;
