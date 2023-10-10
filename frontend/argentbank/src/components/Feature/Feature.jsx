import React from "react";
import "./feature.scss";
 // eslint-disable-next-line no-undef
const IMG_PATH = typeof process !== "undefined" ? `${process.env.PUBLIC_URL}/img/` : "/img/";

function Feature(props) {
  return (
    <div className="feature-item">
      <img
        src={`${IMG_PATH +props.image}`}
        alt={props.alt}
        className="feature-icon"
      />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Feature;
