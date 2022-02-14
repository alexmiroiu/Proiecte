import { configureStore } from "@reduxjs/toolkit";
import FoodListSlice from "./FoodListSlice";
import ModalSlice from "./ModalSlice";

const store = configureStore({
    reducer: {list: FoodListSlice.reducer, modal: ModalSlice.reducer}
});

export default store;