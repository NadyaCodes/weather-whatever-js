import React from 'react';

export default function LocationTable(props) {
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
        {props.locations.map((location, index) => <tr key={index}><td>{location}</td></tr>)}
      </tbody>
    </table>
  </div>
  )
}
