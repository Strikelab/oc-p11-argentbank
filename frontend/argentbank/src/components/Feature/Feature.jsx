import React from "react";
import "./feature.scss";

function Feature(props) {
  const IMG_PATH = "../../assets/pictures/";
  const featureImage = require(`${IMG_PATH + props.image}`);

  //display
  return (
    <div className="feature-item">
      <img src={featureImage} alt={props.alt} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Feature;
