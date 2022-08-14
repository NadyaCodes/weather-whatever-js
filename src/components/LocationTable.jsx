import React from "react";

export default function LocationTable(props) {
  const { locations, setLocations } = props;
  const selectCity = (location) => {
    let index = locations.indexOf(location);
    if (index > -1) {
      locations.splice(index, 1);
    }
    setLocations([location, ...locations]);
  };

  return (
    <div>
      <h2>Locations</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index}>
              <td>
                <button onClick={() => selectCity(location)}>{location}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}