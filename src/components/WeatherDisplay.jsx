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

  let weatherText = "blah";

  if (props.currentWeather.current) {
    weatherText = props.currentWeather.current.condition.text.toLowerCase();
  }

  return (
    <div>
      {props.currentWeather.location !== undefined && (
        <div>
          <h2>
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
          <h3>Oooo - it's {weatherText}</h3>
          <table className="table shadowCard">
            <thead className="table-success">
              <tr>
                <th scope="row"></th>
                <th>Temperature</th>
                <th>Feels Like</th>
                <th>Precipitation</th>
                <th>Wind</th>
                <th>Cloud</th>
                <th>Humidity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>{props.currentWeather.current.temp_c} C</td>
                <td>{props.currentWeather.current.feelslike_c} C</td>
                <td>{props.currentWeather.current.precip_mm} mm</td>
                <td>{props.currentWeather.current.wind_kph} KPH</td>
                <td>{props.currentWeather.current.cloud}</td>
                <td>{props.currentWeather.current.humidity}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>{props.currentWeather.current.temp_f} F</td>
                <td>{props.currentWeather.current.feelslike_f} F</td>
                <td>{props.currentWeather.current.precip_in} in</td>
                <td colSpan="3">{props.currentWeather.current.wind_mph} MPH</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h2>Maybe tomorrow looks better?</h2>
          <table className="table forecast shadowCard">
            <thead className="table-success">
              <tr>
                <th>Temperature</th>
                <th>Precipitation</th>
                <th>Wind</th>
                <th>Humidity</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {props.currentWeather.forecast.forecastday[1].day.mintemp_c} -{" "}
                  {props.currentWeather.forecast.forecastday[1].day.maxtemp_c} C
                </td>
                <td>
                  {
                    props.currentWeather.forecast.forecastday[1].day
                      .totalprecip_mm
                  }{" "}
                  mm
                </td>
                <td>
                  {props.currentWeather.forecast.forecastday[1].day.maxwind_kph}{" "}
                  KPH
                </td>
                <td>
                  {props.currentWeather.forecast.forecastday[1].day.avghumidity}
                </td>
                <td>
                  {
                    props.currentWeather.forecast.forecastday[1].day.condition
                      .text
                  }
                </td>
              </tr>
              <tr>
                <td>
                  {props.currentWeather.forecast.forecastday[1].day.mintemp_f} -{" "}
                  {props.currentWeather.forecast.forecastday[1].day.maxtemp_f} F
                </td>
                <td>
                  {
                    props.currentWeather.forecast.forecastday[1].day
                      .totalprecip_in
                  }{" "}
                  in
                </td>
                <td colSpan="3">
                  {props.currentWeather.forecast.forecastday[1].day.maxwind_mph}{" "}
                  MPH
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
