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

class Store {
  /** @type {hero} */
  selected = INITIAL_STATE;
  /** @type {hero[]} */
  heroesList = [];
  /** @type {hero[][]} */
  listStore = [];
  /** @type {hero[]} */
  collection = [];
  /** @type {"collection" | "heroes" | "search"} */
  listType = "heroes";

  constructor() {
    makeObservable(this, {
      selected: observable,
      heroesList: observable,
      collection: observable,
      listType: observable,
      lastHero: computed,
      lastStoreHero: computed,
      referenceListID: computed,
      selectedToCollection: action,
      addHero: action,
      setSelected: action,
      prevList: action,
      nextList: action,
      setHeroesList: action,
      setListType: action,
    });
  }

  get lastHero() {
    return this.heroesList[this.heroesList.length - 1];
  }

  get lastStoreHero() {
    const lastList = this.listStore[this.listStore.length - 1];
    return lastList[lastList.length - 1];
  }

  get referenceListID() {
    return this.heroesList[0].id;
  }

  addHero(hero) {
    this.heroesList.push(hero);
  }

  setSelected(hero) {
    this.selected = hero;
  }

  setHeroesList(heroesList) {
    this.heroesList = heroesList;
  }

  /** @param {"collection" | "heroes" | "search"} type */
  setListType(type) {
    if (type === "collection" && !this.collection.length) return undefined;
    if (type === "collection") this.setSelected(this.collection[0]);
    this.listType = type;
  }

  selectedToCollection() {
    if (this.collection.length < 10) {
      const isSelectedOnCollection = this.collection.filter(
        (hero) => hero.id === this.selected.id
      ).length;

      !isSelectedOnCollection && this.collection.push(this.selected);
    }
  }

  removeToColletion() {
    this.collection = this.collection.filter(
      (hero) => hero.id !== this.selected.id
    );
    if (this.collection.length) this.setSelected(this.collection[0]);
  }

  listToStore() {
    const selectedOnStore = this.listStore.filter(
      (heroesList) => heroesList[0].id === this.referenceListID
    )[0];

    !selectedOnStore && this.listStore.push(this.heroesList);
  }

  nextList() {
    const nextList = this.listStore.filter(
      (heroesList) => heroesList[0].id - 10 === this.referenceListID
    )[0];

    if (nextList) this.heroesList = nextList;
    else {
      this.heroesList = [];
    }
  }

  prevList() {
    const prevList = this.listStore.filter(
      (heroesList) => heroesList[0].id + 10 === this.referenceListID
    )[0];

    prevList && (this.heroesList = prevList);
  }
}

export default new Store();

/** @typedef {{
  response: string,
  id: number,
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
