import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice";

const store = configureStore({
  reducer: {
    postsSlice: postsReducer,
  },
});

export default store;
