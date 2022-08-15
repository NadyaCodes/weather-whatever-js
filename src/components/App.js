import React, { useState, useEffect } from "react";
import "../App.css";
import LocationSearch from "./LocationSearch";
import LocationTable from "./LocationTable";
import WeatherDisplay from "./WeatherDisplay";
import { getWeather, options } from "./helpers";

function App() {
  const [locations, setLocations] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [validLocation, setValidLocation] = useState("");

  //one day, I should be able to join this API call with the get weather function
  const addLocation = (location) => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
      options
    ).then((res) => {
      if (res.ok) {
        setValidLocation(location);
        setLocations([location, ...locations]);
      } else {
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
    <div className="container">
      <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation} locations={locations} />
      {locations.length > 0 && (
        <div>
          <LocationTable locations={locations} setLocations={setLocations} />
          <WeatherDisplay name={locations[0]} currentWeather={currentWeather} />
        </div>
      )}
    </div>
  );
}

export default App;
