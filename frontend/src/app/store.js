import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import itemReducer from "../features/itemSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    item: itemReducer,
  },
});
