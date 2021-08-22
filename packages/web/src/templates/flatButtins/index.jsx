import React from "react";

import "./style.sass";

/** @param {{bioClick: function, groupClick: function}} props */
const flatButtons = (props) => (
  <div className="flat-buttons">
    <span onClick={props.filterClick}>
      <i className="icon sm icon-filter" />
      Agrupar
    </span>
    <span onClick={props.bioClick}>
      <i className="icon sm icon-biography" />
      Biografia
    </span>
  </div>
);

export default flatButtons;
