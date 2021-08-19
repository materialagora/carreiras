import { makeObservable, observable } from "mobx";

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

class Store {
  /** @type {hero | null} */
  current = {};
  /** @type {hero | null} */
  compare = {};
  /** @type {hero[]} */
  heroes = [];

  constructor() {
    makeObservable(this, {
      current: observable,
      heroes: observable,
    });
  }
}

const dashboardStore = new Store();

dashboardStore.current = {
  response: "success",
  id: "346",
  name: "Iron Man",
  powerstats: {
    intelligence: "100",
    strength: "85",
    speed: "58",
    durability: "85",
    power: "100",
    combat: "64",
  },
  biography: {
    fullName: "Tony Stark",
    alterEgos: "No alter egos found.",
    aliases: [
      "Iron Knight",
      "Hogan Potts",
      "Spare Parts Man",
      "Cobalt Man II",
      "Crimson Dynamo",
      "Ironman",
    ],
    placeOfBirth: "Long Island, New York",
    firstAppearance: "Tales of Suspence #39 (March, 1963)",
    publisher: "Marvel Comics",
    alignment: "good",
  },
  appearance: {
    gender: "Male",
    race: "Human",
    height: ["6'6", "198 cm"],
    weight: ["425 lb", "191 kg"],
    eyeColor: "Blue",
    hairColor: "Black",
  },
  work: {
    occupation:
      "Inventor, Industrialist; former United States Secretary of Defense",
    base: "Seattle, Washington",
  },
  connections: {
    groupAffiliation:
      "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
    relatives:
      "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)",
  },
  image: {
    url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg",
  },
};

export default dashboardStore;
