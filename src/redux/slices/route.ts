import { PathMatch } from "react-router-dom";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IRouteState {
  match?: PathMatch;
}

const initialState: IRouteState = {};

export const routeSlice = createSlice({
  name: "Route",
  initialState,
  reducers: {
    addMatch: (state, action: PayloadAction<PathMatch>) => {
      state.match = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMatch } = routeSlice.actions;

export default routeSlice.reducer;
