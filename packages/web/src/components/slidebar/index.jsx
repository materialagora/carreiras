import React, { useState } from "react";

import Avatar from "../avatar/index";
import Chart from "../../templates/chart/index";
import Biography from "../biography/index";
import FlatButtons from "../../templates/flatButtins/index";

import "./style.sass";

function stopScrolling(stop = false) {
  if (stop) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "unset";
    document.body.style.overflow = "visible";
  }
}

const SlideBar = () => {
  const [toggle, setToggle] = useState(false);
  const [compare, setCompare] = useState(false);

  stopScrolling(toggle);
  return (
    <div className={"slide-bar scrollbar" + (toggle ? " active" : "")}>
      <FlatButtons bioClick={() => setToggle(!toggle)} />
      <div className="row">
        <Avatar />
        <Chart
          data={{
            intelligence: "100",
            strength: "85",
            speed: "58",
            durability: "85",
            power: "100",
            combat: "64",
          }}
        />
      </div>
      <Biography />
    </div>
  );
};

export default SlideBar;
