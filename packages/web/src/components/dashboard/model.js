import axios from "axios";
import store from "./store";

const baseUrl = "http://192.168.0.104:3003/api/superhero/";

async function getHero(id = 1) {
  try {
    const response = await axios.get(`${baseUrl}${id}`);
    response.data = { ...response.data, id: Number(response.data.id) };
    store.addHero(response.data);
  } catch (err) {
    console.log(err);
  }
}

export async function getList() {
  try {
    while (store.heroesList.length < 10) {
      if (store.heroesList.length) await getHero(store.lastHero.id + 1);
      else if (store.listStore.length)
        await getHero(store.lastStoreHero.id + 1);
      else await getHero();
    }
    store.listToStore();
    storeCache();
  } catch (err) {
    console.log(err);
  }
}

export function storeCache() {
  localStorage.setItem("list", JSON.stringify(store.listStore));
}

export function getStoreCache() {
  const storeCached = JSON.parse(localStorage.getItem("list"));
  if (storeCached) {
    store.listStore = storeCached;
    store.setSelected(storeCached[0][0]);
    store.setHeroesList(storeCached[0]);
  }
}
