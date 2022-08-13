import React, { useState } from "react";
import "../App.css";
import LocationSearch from "./LocationSearch";
import LocationTable from "./LocationTable";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [locations, setLocations] = useState([]);

  const addLocation = (location) => setLocations([location, ...locations]);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation} locations={locations} />
      <LocationTable locations={locations} setLocations={setLocations} />
      <WeatherDisplay name={locations[0]} />
    </div>
  );
}

export default App;
