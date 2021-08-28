import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import Avatar from "../avatar/index";
import Chart from "../../templates/chart/index";
import Biography from "../biography/index";
import FlatButtons from "../../templates/flatBtns/index";
import dashboardStore from "../dashboard/store";

import "./style.sass";

function stopScroll(stop = false) {
  if (stop) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "";
    document.body.style.overflow = "";
  }
}

const SlideBar = () => {
  const [toggle, setToggle] = useState(false);
  const { powerstats } = dashboardStore.selected;

  stopScroll(toggle);

  return (
    <div className={"slide-bar" + (toggle ? " active" : "")}>
      <FlatButtons
        toggle={dashboardStore.listType}
        bioClick={() => setToggle(!toggle)}
        addClick={() => dashboardStore.addToCollection()}
        removeClick={() => dashboardStore.removeToCollection()}
        listCLick={() => dashboardStore.setListType("heroes")}
        collectionClick={() => dashboardStore.setListType("collection")}
        collectionBrand={dashboardStore.heroStore.collection.list.length}
      />
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
