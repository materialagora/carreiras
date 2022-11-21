import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { HerosSliceState } from "../index";

export const AddHero = (
  state: WritableDraft<HerosSliceState>,
  action: PayloadAction<Superhero.HeroType>
) => {
  state.heros = [...state.heros, action.payload];
};
