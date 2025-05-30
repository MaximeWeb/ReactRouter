import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';



export default function About() {


  return (
  
    <div>
   <div className='bannerHome'>
        <img className="bannerImg" src='../public/IMGABOUT.png'></img>
      </div>
      <div className='infoSpace'>
            <div className='infoBar flex between'>Fiabilité<FontAwesomeIcon className='iconChevron' icon={faChevronUp} size="2x" /></div>
            <div className='textInfo'><p>Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos equipes</p></div>
    <div className='infoBar flex between'>Respect <FontAwesomeIcon className='iconChevron' icon={faChevronUp} size="2x" /></div>
    <div className='textInfo'><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></div>
    <div className='infoBar flex between'>Service<FontAwesomeIcon className='iconChevron' icon={faChevronUp} size="2x" /></div>
    <div className='textInfo'><p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires,soit empreinte de respect et de bienveillance.</p></div>
    <div className='infoBar flex between'>Sécurité<FontAwesomeIcon className='iconChevron' icon={faChevronUp} size="2x" /></div>
    <div className='textInfo'><p>La sécurité st la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité etablis par nos services.En Laissant une note aussi bien à l'hôte qu'au locataire,cela permet à nos equipes de vérifier que les standards sont bien respectés.Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. </p></div>
      </div>

    </div>
  );
}