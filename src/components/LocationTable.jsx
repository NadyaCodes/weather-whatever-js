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

  const deleteCity = (city) => {
    console.log(city);
    console.log(locations);
    const index = locations.indexOf(city);
    console.log(index);
    if (index > -1) {
      locations.splice(index, 1);
    }
    setLocations([...locations]);
  };

  return (
    <div>
      <h2>Locations</h2>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Name</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index}>
              <td>
                <button
                  className="btn btn-location"
                  onClick={() => selectCity(location)}
                >
                  {location}
                </button>
              </td>
              <td className="align-self-center">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => deleteCity(location)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
