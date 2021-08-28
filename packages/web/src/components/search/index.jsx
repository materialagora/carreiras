import React, { useRef, useState } from "react";
import DashboardStore from "../dashboard/store";

import "./style.sass";

function handleSearch(str) {
  DashboardStore.search(str);
}

const Search = () => {
  const [toggle, setToggle] = useState(false);
  const [searchIpt, setSearchIpt] = useState("");

  return (
    <div className={"search-bar" + (toggle ? " active" : "")}>
      <i className="icon lg" onClick={() => setToggle(!toggle)} />
      <input
        placeholder="Pesquisar por:"
        type="text"
        value={searchIpt}
        onChange={(ev) => setSearchIpt(ev.target.value)}
        onKeyUp={(ev) => ev.key === "Enter" && handleSearch(searchIpt)}
      />
    </div>
  );
};

export default Search;
