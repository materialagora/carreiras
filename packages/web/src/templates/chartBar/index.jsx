import React from "react";

import "./style.sass";

/** @param {{name: string, value: string}} props */
const Bar = (props) => {
  const style = {
    minHeight: `${props.value}%`,
    display: `${props.value !== "null" ? "" : "none"}`,
  };

  return (
    <div className="chart-bar">
      <div className="bar">
        <b>{props.value !== "null" ? props.value : ""}</b>
        <div className="fill" style={style} title={props.name}>
          {props.name.slice(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default Bar;
