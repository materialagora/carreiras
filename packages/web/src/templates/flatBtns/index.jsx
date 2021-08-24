import React from "react";

import FlatBtn from "../flatBtn/index";
import If from "../if/index";

import "./style.sass";

/** @param {{
 * addClick: function,
 * bioClick: function,
 * collectionClick: function,
 * listCLick: function,
 * removeClick: function,
 * collectionBrand: number,
 * toggle: "heroes" | "collection" | "search" }} props */
const flatButtons = (props) => (
  <div className={"flat-buttons " + props.toggle}>
    <FlatBtn icon="biography" label="Biografia" onClick={props.bioClick} />

    <If test={props.toggle === "heroes"}>
      <FlatBtn
        icon="colletion"
        label="Coleção"
        onClick={props.collectionClick}
      />
      <span className="brand">{props.collectionBrand || ""}</span>
    </If>

    <If test={props.toggle === "collection" || props.toggle === "search"}>
      <FlatBtn icon="grid" label="Lista" onClick={props.listCLick} />
    </If>

    <If test={props.toggle === "collection"}>
      <FlatBtn icon="remove" label="Remover" onClick={props.removeClick} />
    </If>

    <If test={props.toggle === "heroes" || props.toggle === "search"}>
      <FlatBtn icon="add" label="Adicionar" onClick={props.addClick} />
    </If>
  </div>
);

export default flatButtons;
