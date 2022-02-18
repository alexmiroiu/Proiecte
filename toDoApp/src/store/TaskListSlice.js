import { createSlice } from "@reduxjs/toolkit";

const TaskListSlice = createSlice({
    name: 'tasks',
    initialState: {},
    reducers: {}
});

export const taskActions = TaskListSlice.actions;

export default TaskListSlice;