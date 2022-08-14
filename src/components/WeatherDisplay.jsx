import React from "react";

export default function WeatherDisplay(props) {

  return (
    <div>
      {props.currentWeather.location !== undefined && (
        <div>
          <h2>
            This is the current weather for {props.name || "wherever this place is"}
          </h2>
          <h3>{props.currentWeather.current.condition.text}</h3>
          <img src={props.currentWeather.current.condition.icon} alt="weather icon"/>
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


// <div>
// <h2>Locations</h2>
// <table className="table table-hover">
//   <thead>
//     <tr>
//       <th>Name</th>
//     </tr>
//   </thead>
//   <tbody>
//     {locations.map((location, index) => (
//       <tr key={index}>
//         <td>
//           <button onClick={() => selectCity(location)}>{location}</button>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>
// </div>