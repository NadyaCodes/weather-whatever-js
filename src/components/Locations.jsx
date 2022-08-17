import LocationTable from "./LocationTable";
import { useState } from "react";
import parse from "html-react-parser";

export default function LocationsDisplay(props) {
  const [showLocations, setShowLocations] = useState(false);
  const [arrow, setArrow] = useState(parse("&#8595;"));
  const { locations, setLocations } = props;

  const toggleShowLocations = () => {
    if (showLocations === true) {
      setArrow(parse("&#8595;"));
      setShowLocations(false);
    } else {
      setArrow(parse("&#8593;"));
      setShowLocations(true);
    }
  };

  return (
    <div className="locations">
      {showLocations === true ? (
        <div>
          {locations.length > 0 && (
            <div className="locationTable shadowCard">
              <LocationTable
                locations={locations}
                setLocations={setLocations}
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          {locations.length > 0 && (
            <div className="locations-title shadowCard locationsMinimized">
              <h4>Locations</h4>
            </div>
          )}
        </div>
      )}
      {locations.length > 0 && (
        <button
          className="btn btn-dark-theme toggleButton"
          onClick={() => toggleShowLocations()}
        >
          <div className="arrow">{arrow}</div>
        </button>
      )}
    </div>
  );
}
