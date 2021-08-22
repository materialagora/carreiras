import React from "react";
import { Observer } from "mobx-react-lite";

import Card from "../../templates/card/index";

import "./style.sass";
import { getList, getStoreCache } from "./model";
import store from "./store";

class Dashboard extends React.PureComponent {
  componentDidMount() {
    getStoreCache()
    getList();
  }

  handleCardClick(hero) {
    store.setCurrent(hero);
  }

  handleNextBtn() {
    store.nextList();
    getList();
  }

  handlePrevBtn() {
    store.prevList();
  }

  renderCards() {
    return store.heroesList.map((hero) => (
      <Card
        active={
          hero.name === store.current.name && hero.id === store.current.id
        }
        key={hero.id}
        name={hero.name}
        img={hero.image.url}
        onClick={() => this.handleCardClick(hero)}
      />
    ));
  }

  render() {
    return (
      <Observer>
        {() => (
          <div className="dashboard">
            <i
              className="icon arrow-left"
              onClick={() => this.handlePrevBtn()}
            />
            <div className="cards">{this.renderCards()}</div>
            <i
              className="icon arrow-right"
              onClick={() => this.handleNextBtn()}
            />
          </div>
        )}
      </Observer>
    );
  }
}

export default Dashboard;
