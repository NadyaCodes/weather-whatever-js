import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import LocationSearch from "./LocationSearch";
import LocationTable from "./LocationTable";
import WeatherDisplay from "./WeatherDisplay";
import { getWeather, options } from "./helpers";
import parse from "html-react-parser";
import "bootstrap";

function App() {
  const [locations, setLocations] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [validLocation, setValidLocation] = useState("");
  const [showLocations, setShowLocations] = useState(true);
  const [arrow, setArrow] = useState(parse("&#8249;"));

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
      // arrow=parse('&uarr;')
      setArrow(parse("&#8250;"));
      setShowLocations(false);
    } else {
      // arrow = parse('&darr;')
      setArrow(parse("&#8249;"));
      setShowLocations(true);
    }
  };

  return (
    <div className="site">
      <div className="pageTitle">
        <span className="qleft">
          <span className="q1">
            <h1>?</h1>
          </span>
          <span className="q2">
            <h1>?</h1>
          </span>
          <span className="q3">
            <h1>?</h1>
          </span>
          <span className="q4">
            <h1>?</h1>
          </span>
          <span className="q5">
            <h1>?</h1>
          </span>
        </span>
        <h1>What is the Weather</h1>
        <span className="qright">
          <span className="q5">
            <h1>?</h1>
          </span>
          <span className="q4">
            <h1>?</h1>
          </span>
          <span className="q3">
            <h1>?</h1>
          </span>
          <span className="q2">
            <h1>?</h1>
          </span>
          <span className="q1">
            <h1>?</h1>
          </span>
        </span>
      </div>
      <div className="container siteContent">
        <LocationSearch onSearch={addLocation} locations={locations} />
        <div className="display">
          {showLocations === true && (
            <div>
              {locations.length > 0 && (
                <div className="locationTable">
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
              className="btn btn-dark-theme toggleButton"
              onClick={() => toggleShowLocations()}
            >
              <div className="arrow">{arrow}</div>
              <div className="arrow">{arrow}</div>
              <div className="arrow">{arrow}</div>
              <div className="arrow">{arrow}</div>
            </button>
          )}
          <WeatherDisplay name={locations[0]} currentWeather={currentWeather} />
        </div>
      </div>
    </div>
  );
}

export default App;
