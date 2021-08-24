import React from "react";

import "./style.sass"

/** @param {{
 * onClick: function,
 * icon: string,
 * label: string
 * }} props */
const FlatBtn = (props) => (
  <span className="flat-btn" onClick={props.onClick}>
    <i className={"icon sm icon-" + props.icon}></i>
    {props.label}
  </span>
);

export default FlatBtn;
