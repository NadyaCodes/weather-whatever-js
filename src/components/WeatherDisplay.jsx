import React, { useState, useEffect } from "react";
import { findImage } from "./helpers";
import Rainfall from "react-rainfall-animation/src/Rain";
import WeatherTable from "./WeatherTable";
import ForecastTable from "./ForecastTable";

export default function WeatherDisplay(props) {
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [animation, setAnimation] = useState("");

  const { current, forecast } = props.currentWeather;

  useEffect(() => {
    if (props.currentWeather.location) {
      findImage(props, setImage, setMessage, setAnimation);
    }
  }, [props.currentWeather, props]);

  let weatherText = "blah";

  if (props.currentWeather.current) {
    weatherText = props.currentWeather.current.condition.text.toLowerCase();
  }

  return (
    <div>
      {props.currentWeather.location !== undefined && (
        <div className="weather">
          {weatherText.indexOf("rain") >= 0 && (
            <Rainfall dropletsAmount={200} />
          )}
          <h2 className="featuredText">
            {props.name || "wherever this place is"},{" "}
            {props.currentWeather.location.country}
          </h2>
          <h4>Ummmm - {weatherText}?</h4>
          <h2>{message}</h2>

          <img
            src={
              image === ""
                ? "//cdn.weatherapi.com/weather/64x64/night/113.png"
                : image
            }
            alt="weather emoji"
            width="200"
            className={`weatherImage ${animation}`}
          />

          <WeatherTable weather={current} />
          <br></br>
          <h2>Maybe tomorrow looks better?</h2>
          <ForecastTable weather={forecast.forecastday[1].day} />
        </div>
      )}
    </div>
  );
}
