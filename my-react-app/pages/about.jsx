import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";





export default function About() {


 const showRemoveHiddenOnTarget = (e) => {
  const chevron = e.currentTarget;
  const elementText = chevron.parentElement.nextElementSibling; /* prend la div textInfo */
  console.log(elementText)
  
  if (elementText.classList.contains("hidden")) {
    elementText.classList.remove("hidden");
     chevron.classList.add("rotateLeft");
      chevron.classList.remove("rotateRigth");
  } else if (!elementText.classList.contains("hidden")) {
    elementText.classList.add("hidden");
      chevron.classList.remove("rotateLeft");
       chevron.classList.add("rotateRigth");
       
  }
};

  return (
    <div>
      <div className="bannerHome">
        <img className="bannerImg" src="../public/IMGABOUT.png"></img>
      </div>
      <div className="infoSpace">
        <div className="infoBar flex between">
          Fiabilité
          <FontAwesomeIcon
          onClick={showRemoveHiddenOnTarget}
            className="iconChevron"
            icon={faChevronUp}
            size="2x"
          />
        </div>
        <div className="textInfo hidden">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale.Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos equipes
          </p>
        </div>
        <div className="infoBar flex between">
          Respect{" "}
          <FontAwesomeIcon
            onClick={showRemoveHiddenOnTarget}
            className="iconChevron"
            icon={faChevronUp}
            size="2x"
          />
        </div>
        <div className="textInfo hidden">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
        <div className="infoBar flex between">
          Service
          <FontAwesomeIcon
             onClick={showRemoveHiddenOnTarget}
            className="iconChevron"
            icon={faChevronUp}
            size="2x"
          />
        </div>
        <div className="textInfo hidden">
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
             onClick={showRemoveHiddenOnTarget}
            className="iconChevron"
            icon={faChevronUp}
            size="2x"
          />
        </div>
        <div className="textInfo hidden">
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
