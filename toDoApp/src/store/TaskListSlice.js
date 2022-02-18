import { createSlice } from "@reduxjs/toolkit";

const TaskListSlice = createSlice({
    name: 'tasks',
    initialState: {
        listItems: [
            {
                text: 'de dat cu matura',
                createdAt: 2000,
                id: 24
            },
            {
                text: 'de spalat vasele',
                createdAt: 3000,
                id: 33
            },
            {
                text: 'de dus gunoiul',
                createdAt: 1000,
                id: 44,
            },
            {
                text: 'de facut mancare',
                createdAt: 724,
                id: 63
            }
        ]
    },
    reducers: {
        sortAscending(state, action) {
            state.listItems.sort((a, b) => {return a.createdAt - b.createdAt})
        },
        sortDescending(state, action) {
            state.listItems.sort((a, b) => {return b.createdAt - a.createdAt})
        },
        deleteItem(state, action) {
            const filteredItems = state.listItems.filter(item => item.id !== action.payload);
            state.listItems = filteredItems;
        },
        addItemToList(state, action) {
            state.listItems.push(action.payload);
        },
        editText(state, action) {
            const {id, text} = action.payload;
            let index;
            state.listItems.forEach(item => {
                if(item.id === id) {
                    index = state.listItems.indexOf(item);
                    return index;
                }
            });
            state.listItems[index].text = text;
        }
    }
});

export const taskActions = TaskListSlice.actions;

export default TaskListSlice;