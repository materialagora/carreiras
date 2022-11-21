import { createSlice } from "@reduxjs/toolkit";
import { AddHero } from "./reducers/add-hero";
import { AddHeroGroup } from "./reducers/add-hero-group";
import { RemoveHero } from "./reducers/remove-hero";

type HerosType = Superhero.HeroType;

export type HerosSliceState = {
  heros: HerosType[];
};

const initialState: HerosSliceState = {
  heros: [],
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    addHero: AddHero,
    addHeroGroup: AddHeroGroup,
    removeHero: RemoveHero,
  },
});

export const { addHero, removeHero, addHeroGroup } = heroSlice.actions;
export default heroSlice.reducer;
