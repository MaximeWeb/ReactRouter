import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Chevron = ({ onClick, state, className="", size = "2x", icon = faChevronUp }) => {

  let classes = className || `iconChevron ${state ? "rotateLeft" : "rotateRigth"}`;

  return <FontAwesomeIcon
    onClick={onClick} /* passe a true */
    className={classes}
    icon={icon}
    size={size}
  />;
};

export default Chevron;
