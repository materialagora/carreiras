import React from "react";
import { Observer } from "mobx-react-lite";

import Card from "../../templates/card/index";
import If from "../../templates/if/index";

import "./style.sass";
import { getList, getStoreCache } from "./model";
import store from "./store";

class Dashboard extends React.PureComponent {
  componentDidMount() {
    getStoreCache();
    getList();
  }

  handleCardClick(hero) {
    store.setSelected(hero);
  }

  handleNext() {
    store.nextList();
    getList();
  }

  renderCards() {
    let list = [];
    if (store.listType === "heroes") list = store.heroesList;
    else if (store.listType === "collection") list = store.collection;

    return list.map((hero) => (
      <Card
        active={
          hero.name === store.selected.name && hero.id === store.selected.id
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
            <h2>{store.listType}</h2>
            <If test={store.listType === "heroes"}>
              <i className="icon lg arrow-left" onClick={() => store.prevList()} />
            </If>

            <div className="cards">{this.renderCards()}</div>

            <If test={store.listType === "heroes"}>
              <i
                className="icon lg arrow-right"
                onClick={() => this.handleNext()}
              />
            </If>
          </div>
        )}
      </Observer>
    );
  }
}

export default Dashboard;
