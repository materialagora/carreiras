import React from "react";
import { Observer } from "mobx-react-lite";
import store from "./store";

import Card from "../../templates/card/index";
import If from "../../templates/if/index"
import loadingImg from "../../assets/animation/loading.gif";

import "./style.sass";

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
            <div className="cards">
              {this.renderCards()}
              <If test={store.listType === "heroes" && store.page.length < 10}>
                <Card name="Carragando" img={loadingImg} />
              </If>
            </div>
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
