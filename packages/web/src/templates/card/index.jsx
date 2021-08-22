import React from "react";

import "./style.sass";

/** @param {{img: string, name: string }} props */
const Card = (props) => (
  <div
    className={"card" + (props.active ? " active" : "")}
    onClick={props.onClick}
  >
    <span>{props.name}</span>
    <div className="container">
      <img src={props.img} alt="" />
    </div>
  </div>
);

export default Card;
