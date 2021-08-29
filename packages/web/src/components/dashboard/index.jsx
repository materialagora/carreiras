import React from "react";
import { Observer } from "mobx-react-lite";
import heroesStore from "../../store/heroes";

import Card from "../../templates/card/index";
import If from "../../templates/if/index"
import loadingImg from "../../assets/animation/loading.gif";

import "./style.sass";

class Dashboard extends React.PureComponent {
  componentDidMount() {
    heroesStore.start();
  }

  renderCards() {
    return heroesStore.page.map((hero) => (
      <Card
        active={
          hero.name === heroesStore.selected.name && hero.id === heroesStore.selected.id
        }
        key={hero.id}
        name={hero.name}
        img={hero.image ? hero.image.url : ""}
        onClick={() => heroesStore.setSelected(hero)}
      />
    ));
  }

  render() {
    return (
      <Observer>
        {() => (
          <div className="dashboard">
            <h2>{heroesStore.listType}</h2>
            <i
              className="icon lg arrow-left"
              onClick={() => heroesStore.prevPage()}
            />
            <div className="cards">
              {this.renderCards()}
              <If test={heroesStore.listType === "heroes" && heroesStore.page.length < 10}>
                <Card name="Carragando" img={loadingImg} />
              </If>
            </div>
            <i
              className="icon lg arrow-right"
              onClick={() => heroesStore.nextPage()}
            />
          </div>
        )}
      </Observer>
    );
  }
}

export default Dashboard;
