import React, { useState } from "react";

import "./style.sass";

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
        onKeyUp={(ev) => ev.key === "Enter"}
      />
    </div>
  );
};

export default Search;
