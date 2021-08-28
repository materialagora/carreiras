import { action, computed, makeObservable, observable, autorun } from "mobx";
import axios from "axios";

const baseUrl = "http://192.168.0.103:3003/api/superhero";

const INITIAL_STATE = {
  response: "",
  id: 0,
  name: "",
  powerstats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  },
  biography: {
    fullName: "",
    alterEgos: "",
    aliases: [],
    placeOfBirth: "",
    firstAppearance: "",
    publisher: "",
    alignment: "",
  },
  appearance: {
    gender: "",
    race: "",
    height: [],
    weight: [],
    eyeColor: "",
    hairColor: "",
  },
  work: { occupation: "", base: "" },
  connections: { groupAffiliation: "", relatives: "" },
  image: { url: "" },
};

class Store {
  /** @type {hero} */
  selected = INITIAL_STATE;

  /** @type {listType} */
  listType = "heroes";

  /** @type {heroStore} */
  heroStore = {
    heroes: {
      index: 0,
      list: [],
    },
    collection: {
      index: 0,
      list: [],
    },
    search: {
      index: 0,
      list: [],
    },
  };

  constructor() {
    makeObservable(this, {
      selected: observable,
      heroStore: observable,
      listType: observable,
      addHero: action,
      start: action,
      setSelected: action,
      requestHeroList: action,
      getCache: action,
      nextPage: action,
      prevPage: action,
      addToCollection: action,
      removeToCollection: action,
      setListType: action,
      currentStore: computed,
      lastHero: computed,
      page: computed,
    });
  }

  start() {
    this.getCache();
    this.page.length < 10 && this.requestHeroList();
  }

  addHero(hero) {
    this.heroStore.heroes.list.push(hero);
    this.setCache();
  }

  addToCollection() {
    const collectionList = this.heroStore.collection.list;
    if (collectionList.indexOf(this.selected) < 0)
      collectionList.push(this.selected);
    this.setCache();
  }

  removeToCollection() {
    const collectionList = this.heroStore.collection.list;
    const seletionIndex = collectionList.indexOf(this.selected);
    seletionIndex >= 0 && collectionList.splice(seletionIndex, 1);
    this.setCache();
  }

  setSelected(hero) {
    this.selected = hero;
  }

  /** @param {listType} type */
  setListType(type) {
    if (type === "collection" && !this.heroStore.collection.list.length)
      return undefined;
    this.listType = type;
  }

  nextPage() {
    if (this.page.length === 10) this.currentStore.index += 10;
    if (this.listType === "heroes" && this.page.length === 0)
      this.requestHeroList();
  }

  prevPage() {
    if (this.currentStore.index !== 0) this.currentStore.index -= 10;
  }

  requestHeroList() {
    axios
      .get(`${baseUrl}/${this.lastHero + 1}`)
      .then((res) => {
        this.addHero(res.data);
        if (this.heroStore.heroes.list.length % 10 !== 0)
          this.requestHeroList();
      })
      .catch((err) => console.log(err));
  }

  getCache() {
    const cache = JSON.parse(localStorage.getItem("heroStore"));
    if (cache) this.heroStore = cache;
  }

  setCache() {
    localStorage.setItem("heroStore", JSON.stringify(this.heroStore));
  }

  get currentStore() {
    return this.heroStore[this.listType];
  }

  get page() {
    const store = this.currentStore;
    return store.list.slice(store.index, store.index + 10);
  }

  get lastHero() {
    const lastHero = this.heroStore.heroes.list.slice(-1)[0];
    return lastHero ? Number(lastHero.id) : 0;
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

/** @typedef {{
 * heroes: { index: number, list: hero[] };
 * collection: { index: number, list: hero[] };
 * search: { index: number, list: hero[] }
 * }} heroStore */

/** @typedef {"collection" | "heroes" | "search" } listType */
