import React from "react";
import {useState} from "react";

export default function LocationSearch(props) {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    props.onSearch(locationSearch);
    setLocationSearch('');
  }

  return (
    <div>
    <label>
      Add Location
      <input className="m1-1 mr-1" type="text" value={locationSearch}
        onChange={e => setLocationSearch(e.target.value)} />
    </label>
    <button className="btn btn-primary"
      onClick={addLocation} disabled={disableSearch}>Search</button>
    </div>
  )
}