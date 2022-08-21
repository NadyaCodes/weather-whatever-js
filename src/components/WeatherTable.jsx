export default function WeatherTable(props) {
  const {
    temp_c,
    feelslike_c,
    precip_mm,
    wind_kph,
    cloud,
    humidity,
    temp_f,
    feelslike_f,
    precip_in,
    wind_mph,
  } = props.weather;

  return (
    <table className="table shadowCard weatherTable">
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
          <td>{temp_c} C</td>
          <td>{feelslike_c} C</td>
          <td>{precip_mm} mm</td>
          <td>{wind_kph} KPH</td>
          <td>{cloud}</td>
          <td>{humidity}</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>{temp_f} F</td>
          <td>{feelslike_f} F</td>
          <td>{precip_in} in</td>
          <td colSpan="3">{wind_mph} MPH</td>
        </tr>
      </tbody>
    </table>
  );
}
