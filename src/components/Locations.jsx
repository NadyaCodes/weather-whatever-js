import LocationTable from "./LocationTable"
import {useState} from "react"
import parse from "html-react-parser";

export default function LocationsDisplay(props) {

  const [showLocations, setShowLocations] = useState(true);
  const [arrow, setArrow] = useState(parse("&#8249;"));
  const { locations, setLocations } = props;

  const toggleShowLocations = () => {
    if (showLocations === true) {
      setArrow(parse("&#8250;"));
      setShowLocations(false);
    } else {
      setArrow(parse("&#8249;"));
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
          ) : (<div className="locationsMinimized shadowCard">
            <span>L</span>
            <span>O</span>
            <span>C</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
            <span>S</span>
        </div>)}
          {locations.length > 0 && (
            <button
              className="btn btn-dark-theme toggleButton"
              onClick={() => toggleShowLocations()}
            >
              <div className="arrow">{arrow}</div>
              <div className="arrow">{arrow}</div>
              <div className="arrow">{arrow}</div>
              <div className="arrow">{arrow}</div>
            </button>
          )}
    </div>
  )
}