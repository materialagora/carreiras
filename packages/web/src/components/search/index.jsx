import React, { useState } from "react";

import "./style.sass";

const Search = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={"search-bar" + (toggle ? " active" : "")}>
      <i className="icon lg" onClick={() => setToggle(!toggle)} />
      <input placeholder="Pesquisar por:" type="text" />
    </div>
  );
};

export default Search;
