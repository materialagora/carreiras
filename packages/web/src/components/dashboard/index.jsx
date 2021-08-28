import React from "react";
import { Observer } from "mobx-react-lite";

import Card from "../../templates/card/index";

import "./style.sass";
import store from "./store";

class Dashboard extends React.PureComponent {
  componentDidMount() {
    store.start();
  }

  renderCards() {
    return store.page.map((hero) => (
      <Card
        active={
          hero.name === store.selected.name && hero.id === store.selected.id
        }
        key={hero.id}
        name={hero.name}
        img={hero.image ? hero.image.url : ""}
        onClick={() => store.setSelected(hero)}
      />
    ));
  }

  render() {
    return (
      <Observer>
        {() => (
          <div className="dashboard">
            <h2>{store.listType}</h2>
            <i
              className="icon lg arrow-left"
              onClick={() => store.prevPage()}
            />
            <div className="cards">{this.renderCards()}</div>
            <i
              className="icon lg arrow-right"
              onClick={() => store.nextPage()}
            />
          </div>
        )}
      </Observer>
    );
  }
}

export default Dashboard;
