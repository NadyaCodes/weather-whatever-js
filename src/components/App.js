import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import LocationSearch from "./LocationSearch";
import LocationsDisplay from "./Locations";
import WeatherDisplay from "./WeatherDisplay";
import PageTitle from "./PageTitle";
import { getWeather, Options } from "./helpers";
import "bootstrap";

function App() {
  const [locations, setLocations] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [validLocation, setValidLocation] = useState("");

  const addLocation = (location) => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
      Options
    ).then((res) => {
      if (res.ok) {
        setValidLocation(location);
        setLocations([location, ...locations]);
      } else {
        alert("Please enter a valid city")
        console.log("ERROR not a valid city");
      }
    });
  };

  useEffect(() => {
    if (locations.length > 0) {
      getWeather(locations[0], setCurrentWeather);
    }
  }, [validLocation, locations]);

  return (
    <div className="site">
      <PageTitle />
      <div className="container siteContent">
        <LocationSearch onSearch={addLocation} locations={locations} />
        <div className="display">
          <LocationsDisplay locations={locations} setLocations={setLocations} />
          {locations.length > 0 && (
            <WeatherDisplay
              name={locations[0]}
              currentWeather={currentWeather}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
