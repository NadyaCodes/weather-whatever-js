import React, { useState, useEffect } from "react";
import { findImage } from "./helpers";

export default function WeatherDisplay(props) {
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (props.currentWeather.location) {
      findImage(props, setImage, setMessage);
    }
  }, [props.currentWeather, props]);

  return (
    <div>
      {props.currentWeather.location !== undefined && (
        <div>
          <h2>
            This is the current weather for{" "}
            {props.name || "wherever this place is"},{" "}
            {props.currentWeather.location.country}
          </h2>
          <h2>{message}</h2>

          <img
            src={
              image === ""
                ? "//cdn.weatherapi.com/weather/64x64/night/113.png"
                : image
            }
            alt="weather image"
            width="200"
          />
          <p>{props.currentWeather.current.condition.text}</p>
          <table className="table">
            <thead>
              <tr>
                <td>Temperature</td>
                <td>Feels Like</td>
                <td>Precipitation</td>
                <td>Wind</td>
                <td>Cloud</td>
                <td>Humidity</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.currentWeather.current.temp_c} C</td>
                <td>{props.currentWeather.current.feelslike_c} C</td>
                <td>{props.currentWeather.current.precip_mm} mm</td>
                <td>{props.currentWeather.current.wind_kph} KPH</td>
                <td>{props.currentWeather.current.cloud}</td>
                <td>{props.currentWeather.current.humidity}</td>
              </tr>
              <tr>
                <td>{props.currentWeather.current.temp_f} F</td>
                <td>{props.currentWeather.current.feelslike_f} F</td>
                <td>{props.currentWeather.current.precip_in} in</td>
                <td>{props.currentWeather.current.wind_mph} MPH</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
