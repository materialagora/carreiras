import { configureStore } from "@reduxjs/toolkit";
import heros from "./create-hero-group";

const store = configureStore({
  reducer: {
    heros,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
