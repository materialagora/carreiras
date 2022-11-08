import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPerson } from "interfaces/person";

interface IPeopleState {
  data: IPerson[];
  isLoading: boolean;
}

const initialState: IPeopleState = {
  data: [],
  isLoading: false,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    refresh: (state, action: PayloadAction<IPerson[]>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { refresh, isLoading } = peopleSlice.actions;

export default peopleSlice.reducer;
