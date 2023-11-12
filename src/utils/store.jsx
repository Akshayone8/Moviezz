import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import movieReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    movie: movieReducer,
  },
});

export default store;
