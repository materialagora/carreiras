import React from "react";
import Bar from "../chartBar/index";
import "./style.sass";

function gerateBars(data) {
  const Bars = [];

  for (let key in data) {
    Bars.push(<Bar name={key} value={data[key]} key={key} />);
  }
  return Bars;
}

/** @param {{data: {name: string, value: string}}} props */
const Chart = (props) => <div className="chart">{gerateBars(props.data)}</div>;

export default Chart;
