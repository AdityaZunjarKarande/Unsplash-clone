import { configureStore } from "@reduxjs/toolkit";
import unsplashReducer from "./unsplashSlice";

export const store = configureStore({
  reducer: {
    unsplash: unsplashReducer,
  },
});

export default store;