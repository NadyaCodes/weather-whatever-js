export default function ForecastTable(props) {
  const {
    mintemp_c,
    maxtemp_c,
    totalprecip_mm,
    maxwind_kph,
    avghumidity,
    condition,
    mintemp_f,
    maxtemp_f,
    totalprecip_in,
    maxwind_mph,
  } = props.weather;
  return (
    <table className="table forecast shadowCard weatherTable">
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
            {mintemp_c} - {maxtemp_c} C
          </td>
          <td>{totalprecip_mm} mm</td>
          <td>{maxwind_kph} KPH</td>
          <td>{avghumidity}</td>
          <td>{condition.text}</td>
        </tr>
        <tr>
          <td>
            {mintemp_f} - {maxtemp_f} F
          </td>
          <td>{totalprecip_in} in</td>
          <td colSpan="3">{maxwind_mph} MPH</td>
        </tr>
      </tbody>
    </table>
  );
}
