import React from "react";
import "./feature.scss";

function Feature(props) {
  const featureImage = require(`../../assets/pictures/${props.image}`);

  return (
    <div className="feature-item">
      <img src={featureImage} alt={props.alt} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Feature;
