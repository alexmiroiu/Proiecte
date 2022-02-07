import { configureStore } from "@reduxjs/toolkit";
import pwGeneratorSlice from "./generate-password";

const store = configureStore({
    reducer: pwGeneratorSlice.reducer
});

export default store;