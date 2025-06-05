import "../styles/global.scss";
import { useState, Fragment } from "react";
import Chevron from "../components/Chevron";
const initState = {
  showFiabilite: false,
  showRespect: false,
  showService: false,
  showSecurite: false,
};

const aboutElements = [
  {
    title: "Fiabilité",
    state: "showFiabilite",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    state: "showRespect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    state: "showService",
    content:
      "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    title: "Sécurité",
    state: "showSecurite",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default function About() {

  const [state, setState] = useState(initState);

  const display = aboutElements.map((element, index) => {
    return <Fragment key={index}>
     <div className="infoBar flex between">
          {element.title}
          <Chevron onClick={() =>
              setState((prev) => ({ ...prev, [element.state]: !prev[element.state] }))
            } state={state[element.state]} />
          
        </div>
        <div className={`textInfo ${state[element.state] ? "" : "hidden"}`}>
          <p>
            {element.content}
          </p>
        </div>
    </Fragment>
  })

  return (
    <div>
      <div className="bannerHome">
        <img className="bannerImg" src="./public/IMGABOUT.png"></img>
      </div>
      <div className="infoSpace">
        {display}
      </div>
    </div>
  );
}
