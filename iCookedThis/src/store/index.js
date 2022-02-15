import { configureStore } from "@reduxjs/toolkit";
import FoodListSlice from "./FoodListSlice";
import ModalSlice from "./ModalSlice";
import AddFoodSlice from "./AddFoodSlice";

const store = configureStore({
    reducer: {list: FoodListSlice.reducer, modal: ModalSlice.reducer, addFood: AddFoodSlice.reducer}
});

export default store;