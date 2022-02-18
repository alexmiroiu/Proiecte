import { configureStore } from '@reduxjs/toolkit';
import TaskListSlice from './TaskListSlice';

const store = configureStore({
    reducer: TaskListSlice.reducer
})

export default store;