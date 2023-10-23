import React from "react";
import "./feature.scss";

// const IMG_PATH = typeof process !== "undefined" ? `${process.env.PUBLIC_URL}/img/` : "/img/";
// eslint-disable-next-line no-undef
// const IMG_PATH = process.env.PUBLIC_URL + "/img/";

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
