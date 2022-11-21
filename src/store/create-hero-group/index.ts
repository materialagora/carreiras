import { createSlice } from "@reduxjs/toolkit";
import { AddHero } from "./reducers/add-hero";
import { RemoveHero } from "./reducers/remove-hero";

type HerosType = Superhero.HeroType;

export type HerosSliceState = {
  heros: HerosType[];
};

const initialState: HerosSliceState = {
  heros: [],
};

export const heroSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addHero: AddHero,
    removeHero: RemoveHero,
  },
});

export const { addHero, removeHero } = heroSlice.actions;
export default heroSlice.reducer;
