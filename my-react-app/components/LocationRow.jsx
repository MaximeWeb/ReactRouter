import "../styles/home.css";
import { Link } from 'react-router-dom';

export const LocationRow = ({ location }) => {
  return (
    <div key={location.id}>
      <div className="cards">
        <Link to="/fiche" state={{ location }}>
          <img
            className="imgCards"
            src={location.cover}
            alt={location.title}
            width="200"
          />
          <p className="titleCards">{location.title}</p>
        </Link>
      </div>
    </div>
  );
};

export default LocationRow;
