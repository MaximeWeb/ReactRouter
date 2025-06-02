import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faStar } from "@fortawesome/free-solid-svg-icons";
import data from "../data/locations";
import Error from "./error";

import "../styles/global.scss";

export default function Fiche() {
  const { id } =
    useParams(); /* useParam recupere les parametre de l'url (id) */
  // const navigate = useNavigate(); /* useNavigate permet de naviguer sur une autre route */
  const [location, setLocation] =
    useState(
      null
    ); /* on crée un etat vide "location" qui est null initialement */

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  useEffect(() => {
    const foundId = data.find((location) => location.id === id);
    setLocation(foundId || false);
  }, [id]);

  if (location === false) return <Error />;
  if (!location) return null;

  // const addRemoveHiddenOnTarget = (e) => {
  //   const chevron = e.currentTarget;
  //   const elementText = chevron.parentElement.nextElementSibling;

  //   if (elementText.classList.contains("hidden")) {
  //     elementText.classList.remove("hidden");
  //     chevron.classList.add("rotateLeft");
  //     chevron.classList.remove("rotateRigth");
  //   } else {
  //     elementText.classList.add("hidden");
  //     chevron.classList.remove("rotateLeft");
  //     chevron.classList.add("rotateRigth");
  //   }
  // };

  return (
    <div key={location.id}>
      <div className="bodyFiche">
        <div className="bannerFiche">
          <img className="imgFiche" src={location.cover} alt={location.title} />
        </div>
        <div className="flex between block">
 <div>
 <div className=" flex between">
          <p className="titleFiche">{location.title}</p>
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
        </div>
        </div>
       
        <div className="BlocContactStars">
  <div className=" contactFiche flex">
            <p className="nameHost">{location.host.name}</p>
            <img
              className="imgHost"
              src={location.host.picture}
              alt="imageHost"
            />
          </div>
          <div className="blocStars">
            {[...Array(5)].map((_, index) => {
              return (
                <FontAwesomeIcon
                  key={index}
                  className="starIcon"
                  icon={faStar} /* j'indique que mon .map sera 5 stars */
                  style={{
                    color:
                      index <= location.rating
                        ? "#FF6060"
                        : "lightgray" /* ternaire pour ajouter le style en fonction du rating */,
                  }}
                />
              );
            })}
          </div>
  </div>  
        </div>
       

        <div className="flex between block">
         
            <div>
              <div className="infoBarFiche flex between">
                Description
                <FontAwesomeIcon
                  onClick={() =>
                    setShowDescription(!showDescription)
                  } /* passe a true */
                  className={`iconChevron ${
                    showDescription ? "rotateLeft" : "rotateRigth"
                  }`}
                  icon={faChevronUp}
                  size="2x"
                />
              </div>
              <div
                className={`textInfoFiche ${!showDescription ? "hidden" : ""}`}
              >
                <p>{location.description}</p>
              </div>
            </div>
            <div>
              <div className="infoBarFiche flex between">
                Equipements
                <FontAwesomeIcon
                  onClick={() => setShowEquipments(!showEquipments)}
                  className={`iconChevron ${
                    showEquipments ? "rotateLeft" : "rotateRigth"
                  }`}
                  icon={faChevronUp}
                  size="2x"
                />
              </div>
              <div
                className={`textInfoFiche ${!showEquipments ? "hidden" : ""}`}
              >
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
