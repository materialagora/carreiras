import React from "react";
import { observer } from "mobx-react-lite";

import DashboadStore from "../../store/dashboard";
import "./style.sass";

const Avatar = () => {
  const { name, image, biography, appearance } = DashboadStore.current;
  
  return (
    <div className="avatar">
      <div className="container">
        <img src={image.url} />
      </div>
      <div className="data">
        <h3>{name} ({biography.fullName})</h3>
        <span>
          <b>Tipo: </b>
          {biography.alignment}
        </span>
        <span>
          <b>Gênero: </b>
          {appearance.gender}
        </span>
        <span>
          <b>Raça: </b>
          {appearance.race}
        </span>
        <span className="publish">
          <b>Publicado por: </b>
          {biography.publisher}
        </span>
      </div>
    </div>
  );
};

export default observer(Avatar);