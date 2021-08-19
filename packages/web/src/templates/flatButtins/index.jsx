import React from "react";

import "./style.sass";

/** @param {{bioClick: function, filterClick: function, compareClick: function }} props */
const flatButtons = (props) => (
  <div className="flat-buttons">
    <span onClick={props.filterClick}>
      <i className="icon icon-filter sm" />
      Filter
    </span>
    <span onClick={props.bioClick}>
      <i className="icon icon-biography sm" />
      Biografia
    </span>
    <span onClick={props.compareClick}>
      <i className="icon icon-compare sm" />
      Comparar
    </span>
  </div>
);

export default flatButtons;
