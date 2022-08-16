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
  const [showLocations, setShowLocations] = useState(true);

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

  const toggleShowLocations = () => {
    if (showLocations === true) {
      setShowLocations(false);
    } else {
      setShowLocations(true);
    }
  };

  return (
    <div className="site">
      <div className="pageTitle">
        <span className="qleft"><span className="q1"><h1>?</h1></span>
        <span className="q2"><h1>?</h1></span>
        <span className="q3"><h1>?</h1></span>
        <span className="q4"><h1>?</h1></span>
        <span className="q5"><h1>?</h1></span>
        </span>
        <h1>What is the Weather</h1>
        <span className="qright">
        <span className="q5"><h1>?</h1></span>
        <span className="q4"><h1>?</h1></span>
        <span className="q3"><h1>?</h1></span>
        <span className="q2"><h1>?</h1></span>
        <span className="q1"><h1>?</h1></span>
        </span>
      </div>
      <div className="container siteContent">
        <LocationSearch onSearch={addLocation} locations={locations} />
        {showLocations === true && (
          <div>
            {locations.length > 0 && (
              <div>
                <LocationTable
                  locations={locations}
                  setLocations={setLocations}
                />
              </div>
            )}
          </div>
        )}
        {locations.length > 0 && (
          <button
            className="btn btn-outline-success"
            onClick={() => toggleShowLocations()}
          >
            Toggle locations
          </button>
        )}
        <WeatherDisplay name={locations[0]} currentWeather={currentWeather} />
      </div>
    </div>
  );
}

export default App;
