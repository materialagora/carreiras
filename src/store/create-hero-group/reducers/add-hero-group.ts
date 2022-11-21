import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { HerosSliceState } from "../index";

export const AddHeroGroup = (
  state: WritableDraft<HerosSliceState>,
  action: PayloadAction<Superhero.HeroType[]>
) => {
  state.heros = [...action.payload];
};
