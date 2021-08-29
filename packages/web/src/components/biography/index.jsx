import React from "react";
import { observer } from "mobx-react-lite";

import "./style.sass";
import heroesStore from "../../store/heroes";

const Biography = () => {
  const { biography, appearance, work, connections, powerstats } =
    heroesStore.selected;
  return (
    <div className="biography">
      <div className="biography-chart">
        <h3>Biografia</h3>
        <span>
          <b>Também conhecido como</b>
          {biography.aliases.join(", ")}
        </span>
        <span>
          <b>Local de Nascimento</b>
          {biography["place-of-birth"]}
        </span>
        <span>
          <b>Primeira Aparição</b>
          {biography["first-appearance"]}
        </span>
        <span>
          <b>Base</b>
          {work.base}
        </span>
        <span>
          <b>Relações</b>
          {connections.relatives}
        </span>
        <span>
          <b>Afiliações</b>
          {connections["group-affiliation"]}
        </span>
      </div>
      <div className="stats-chart">
        <h3>Estatísticas</h3>
        <span>
          <b>Inteligência</b>
          {powerstats.intelligence}
        </span>
        <span>
          <b>Força</b>
          {powerstats.strength}
        </span>
        <span>
          <b>Velocidade</b>
          {powerstats.speed}
        </span>
        <span>
          <b>Resistência</b>
          {powerstats.durability}
        </span>
        <span>
          <b>Poder</b>
          {powerstats.power}
        </span>
        <span>
          <b>Combate</b>
          {powerstats.combat}
        </span>
      </div>
      <div className="appearence-chart">
        <h3>Aparência</h3>
        <span>
          <b>Altura</b>
          {appearance.height.join(", ")}
        </span>
        <span>
          <b>Peso</b>
          {appearance.weight.join(", ")}
        </span>
        <span>
          <b>Cor dos olhos</b>
          {appearance["eye-color"]}
        </span>
        <span>
          <b>Cor do cabelo</b>
          {appearance["hair-color"]}
        </span>
      </div>
    </div>
  );
};

export default observer(Biography);
