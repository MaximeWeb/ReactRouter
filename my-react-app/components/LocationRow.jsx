import "../styles/global.scss";
import { Link } from 'react-router-dom';

export const LocationRow = ({ location }) => { /*on ajoute state dans le link pour transporter mes data d'un composant a un autre , ici je recupere toutes les info de location */
  return (
    <div key={location.id}>
      <div className="cards">
     <Link to={`/fiche/${location.id}`} >
          <img
            className="imgCards"
            src={location.cover}
            alt={location.title}
            width="200"
          />
          <div className="divTitleCards">
          </div>
           <p className="titleCards">{location.title}</p>
        </Link>
      </div>
    </div>
  );
};

export default LocationRow;
