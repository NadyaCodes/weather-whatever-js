import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LocationSearch from './LocationSearch'
import LocationTable from './LocationTable'

function App() {
  const [locations, setLocations] = useState([])

  const addLocation = (location) => setLocations([location, ...locations]);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation} />
      <LocationTable locations={locations} />
    </div>
  );
}

export default App;