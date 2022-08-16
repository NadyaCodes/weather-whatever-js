import React from "react";
import { useState } from "react";

export default function LocationSearch(props) {
  const [locationSearch, setLocationSearch] = useState("");
  const disableSearch = locationSearch.trim() === "";

  const addLocation = () => {
    if (!props.locations.includes(locationSearch)) {
      props.onSearch(locationSearch);
      setLocationSearch("");
    } else {
      alert("You've already picked that place");
      setLocationSearch("");
    }
  };

  return (
    <div className="locationSearch">
      <label>
        City Search
        <input
          className="m1-1 mr-1"
          type="text"
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
        />
      </label>
      <button
        className="btn btn-dark-theme"
        onClick={addLocation}
        disabled={disableSearch}
      >
        Add to List
      </button>
    </div>
  );
}
