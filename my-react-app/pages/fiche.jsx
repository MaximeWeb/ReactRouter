import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp , faStar } from "@fortawesome/free-solid-svg-icons";
// import { useState } from 'react';


import "../styles/home.css";

export default function Fiche() {

  const { state } = useLocation();
  const { location } = state;
 

  const showRemoveHiddenOnTarget = (e) => {
    const chevron = e.currentTarget;
    const elementText =
      chevron.parentElement.nextElementSibling; /* prend la div textInfo */
    console.log(elementText);

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
    <div key={location.id}>
      <div className="bodyFiche">
        <div className="bannerFiche">
          <img className="imgFiche" src={location.cover} alt={location.title} />
        </div>
        <div className=" flex between">
              <p className="titleFiche">{location.title}</p>
              <div className=" contactFiche flex">
                 <p className="nameHost">{location.host.name}</p>
                 <img className="imgHost" src={location.host.picture} alt="imageHost" />
              </div>
             
        </div>
      
        <p className="locationFiche">{location.location}</p>
<div className="flex between">
       <div className="tagsContainer">
          {location.tags.map((tag, index) => (
            <div key={index} className="tagFiche">
              {tag}
            </div>
          ))}
        </div>
       <div>
      {[...Array(5)].map((_, index) => {
        const valeur = index;
      
        return (
          <FontAwesomeIcon
            key={index}
            className="starIcon"
            icon={faStar}
            style={{ color: valeur <= location.rating ? '#FF6060' : 'lightgray'}}
            
          />
        );
      })}
    </div>
</div>
     
        <div className="flex between">
            <div>
                    <div className="infoBarFiche flex between">
            Fiabilité
            <FontAwesomeIcon
              onClick={showRemoveHiddenOnTarget}
              className="iconChevron"
              icon={faChevronUp}
              size="2x"
            />
          </div>
          <div className="textInfoFiche hidden">
            <p> {location.description} </p>
          </div>
            </div>
      <div>
            <div className="infoBarFiche flex between">
            Respect
            <FontAwesomeIcon
              onClick={showRemoveHiddenOnTarget}
              className="iconChevron"
              icon={faChevronUp}
              size="2x"
            />
          </div>
          <div className="textInfoFiche hidden">
            {location.equipments.map((el, index) => (
              <div key={index} className="equipmentFiche">
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
}
