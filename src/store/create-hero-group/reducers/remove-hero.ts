import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { HerosSliceState } from "../index";

export const RemoveHero = (
  state: WritableDraft<HerosSliceState>,
  action: PayloadAction<string>
) => {
  state.heros = state.heros.filter((hero) => hero.id !== action.payload);
};
