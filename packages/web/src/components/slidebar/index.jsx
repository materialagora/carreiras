import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import Avatar from "../avatar/index";
import Chart from "../../templates/chart/index";
import Biography from "../biography/index";
import FlatButtons from "../../templates/flatButtins/index";

import "./style.sass";
import dashboardStore from "../dashboard/store";

function stopScroll(stop = false) {
  if (stop) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
  }
}

const SlideBar = () => {
  const [toggle, setToggle] = useState(false);
  const { powerstats } = dashboardStore.current;

  stopScroll(toggle);

  return (
    <div className={"slide-bar" + (toggle ? " active" : "")}>
      <FlatButtons bioClick={() => setToggle(!toggle)} />
      <div className="scrollbar">
        <div className="row">
          <Avatar />
          <Chart data={powerstats} />
        </div>
        <Biography />
      </div>
    </div>
  );
};

export default observer(SlideBar);
