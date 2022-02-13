import { configureStore } from "@reduxjs/toolkit";
import FoodListSlice from "./FoodListSlice";

const store = configureStore({
    reducer: {list: FoodListSlice.reducer}
});

export default store;