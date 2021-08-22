import { action, computed, makeObservable, observable } from "mobx";

const INITIAL_STATE = {
  response: "",
  id: "",
  name: "",
  powerstats: {
    intelligence: "",
    strength: "",
    speed: "",
    durability: "",
    power: "",
    combat: "",
  },
  biography: {
    fullName: "",
    alterEgos: "",
    aliases: [""],
    placeOfBirth: "",
    firstAppearance: "",
    publisher: "",
    alignment: "",
  },
  appearance: {
    gender: "",
    race: "",
    height: [""],
    weight: [""],
    eyeColor: "",
    hairColor: "",
  },
  work: {
    occupation: "",
    base: "",
  },
  connections: {
    groupAffiliation: "",
    relatives: "",
  },
  image: {
    url: "",
  },
};

/** @typedef {{
  response: string,
  id: string,
  name: string,
  powerstats: { 
      intelligence: number, 
      strength: number, 
      speed: number, 
      durability: number, 
      power: number, 
      combat: number
    },
  biography: { 
      fullName: string, 
      alterEgos: string, 
      aliases: string[], 
      placeOfBirth: string, 
      firstAppearance: string, 
      publisher: string, 
      alignment: string
    },
  appearance: { 
      gender: string, 
      race: string|null, 
      height: string[], 
      weight: string[], 
      eyeColor: string, 
      hairColor: string
    },
  work: { occupation: string, base: string },
  connections: { groupAffiliation: string, relatives: string},
  image: { url: string }
 }} hero */

class Store {
  /** @type {hero | null} */
  current = INITIAL_STATE;
  /** @type {hero[]} */
  heroesList = [];
  /** @type {hero[][]} */
  listStore = [];

  constructor() {
    makeObservable(this, {
      current: observable,
      heroesList: observable,
      lastHero: computed,
      lastStoreHero: computed,
      addHero: action,
      setCurrent: action,
      prevList: action,
      nextList: action,
      setHeroesList: action,
    });
  }

  addHero(hero) {
    this.heroesList.push(hero);
  }

  setCurrent(hero) {
    this.current = hero;
  }
  setHeroesList(heroesList) {
    this.heroesList = heroesList;
  }

  listToStore() {
    const currentOnStore = this.listStore.filter(
      (heroesList) => heroesList[0].id === this.heroesList[0].id
    )[0];

    if (!currentOnStore) this.listStore.push(this.heroesList);
  }

  nextList() {
    const nextList = this.listStore.filter(
      (heroesList) => heroesList[0].id - 10 === this.heroesList[0].id
    )[0];

    if (nextList) this.heroesList = nextList;
    else {
      this.heroesList = [];
    }
  }

  prevList() {
    const prevList = this.listStore.filter(
      (heroesList) => heroesList[0].id + 10 === this.heroesList[0].id
    )[0];

    if (prevList) {
      this.heroesList = prevList;
    }
  }

  get lastHero() {
    return this.heroesList[this.heroesList.length - 1];
  }

  get lastStoreHero() {
    const lastList = this.listStore[this.listStore.length - 1];
    return lastList[lastList.length - 1];
  }
}

export default new Store();
