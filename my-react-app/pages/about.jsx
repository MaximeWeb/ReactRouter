import "../styles/global.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {  useState } from "react";

export default function About() {


 const [showFiabilite, setShowFiabilite] = useState(false);
  const [showRespect, setShowRespect] = useState(false);
   const [showService, setShowService] = useState(false);
    const [showSecurite, setShowSecurite] = useState(false);

  return (
    <div>
      <div className="bannerHome">
        <img className="bannerImg" src="../public/IMGABOUT.png"></img>
      </div>
      <div className="infoSpace">
        <div className="infoBar flex between">
          Fiabilité
        <FontAwesomeIcon
                onClick={() => setShowFiabilite(!showFiabilite)} /* passe a true */
                className={`iconChevron ${
                  showFiabilite ? "rotateLeft" : "rotateRigth"
                }`} 
                icon={faChevronUp}
                size="2x"
              />
        </div>
        <div  className={`textInfo ${!showFiabilite ? "hidden" : ""}`}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale.Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos equipes
          </p>
        </div>
        <div className="infoBar flex between">
          Respect
         <FontAwesomeIcon
                onClick={() => setShowRespect(!showRespect)} /* passe a true */
                className={`iconChevron ${
                  showRespect ? "rotateLeft" : "rotateRigth"
                }`} 
                icon={faChevronUp}
                size="2x"
              />
        </div>
        <div className={`textInfo ${!showRespect ? "hidden" : ""}`}>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
        <div className="infoBar flex between">
          Service
         <FontAwesomeIcon
                onClick={() => setShowService(!showService)} /* passe a true */
                className={`iconChevron ${
                  showService ? "rotateLeft" : "rotateRigth"
                }`} 
                icon={faChevronUp}
                size="2x"
              />
        </div>
        <div className={`textInfo ${!showService ? "hidden" : ""}`}>
          <p>
            La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires,soit empreinte de respect et de
            bienveillance.
          </p>
        </div>
        <div className="infoBar flex between">
          Sécurité
          <FontAwesomeIcon
                onClick={() => setShowSecurite(!showSecurite)} /* passe a true */
                className={`iconChevron ${
                  showSecurite ? "rotateLeft" : "rotateRigth"
                }`} 
                icon={faChevronUp}
                size="2x"
              />
        </div>
        <div className={`textInfo ${!showSecurite ? "hidden" : ""}`}>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité etablis par nos services.En Laissant une note aussi bien à
            l'hôte qu'au locataire,cela permet à nos equipes de vérifier que les
            standards sont bien respectés.Nous organisons également des ateliers
            sur la sécurité domestique pour nos hôtes.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
