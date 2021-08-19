import React from "react";

import "./style.sass";

/** @param {{img: string, name: string }} props */
const Card = (props) => (
  <div className="card">
    <div className="container">
      <img src={props.img} alt="" />
    </div>
    <span>{props.name}</span>
  </div>
);

export default Card;
