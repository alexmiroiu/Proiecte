import { createSlice } from "@reduxjs/toolkit";

const TaskListSlice = createSlice({
    name: 'tasks',
    initialState: {
        listItems: [],
        finishedItems: []
    },
    reducers: {
        sortAscending(state, action) {
            state.listItems.sort((a, b) => {return a.createdAt - b.createdAt})
        },
        sortDescending(state, action) {
            state.listItems.sort((a, b) => {return b.createdAt - a.createdAt})
        },
        deleteItem(state, action) {
            let finishedItem;
            state.listItems.forEach(item => {
                if(item.id === action.payload) {
                    finishedItem = item;
                }
            })
            state.finishedItems.push(finishedItem);
            const filteredItems = state.listItems.filter(item => item.id !== action.payload);
            state.listItems = filteredItems;

        },
        addItemToList(state, action) {
            state.listItems.push(action.payload);
        },
        editText(state, action) {
            const {id, text} = action.payload;
            console.log(id)
            state.listItems.forEach(item => {
                if(item.id === id) {
                    item.text = text;
                }
            });
        },
        searchByText(state, action) {
            const typedText = action.payload;
            state.listItems.forEach((item) => {
                if(item.text.includes(typedText)) {
                    item.displayed = true;
                } else {
                    item.displayed = false;
                }
            })
        },
        backToList(state, action) {
            let selectedItem;
            state.finishedItems.forEach(item => {
                if(item.id === action.payload) {
                    selectedItem = item;
                }
            })
            state.listItems.push(selectedItem);
            const filteredFinishedItems = state.finishedItems.filter(item => item.id !== action.payload);
            state.finishedItems = filteredFinishedItems;
        },
        clearFinishedItems (state, action) {
            while(state.finishedItems.length > 0) {
                state.finishedItems.pop();
            }
        },
        getInitialState(state, action) {
            if(localStorage.getItem('listItems')) {
                const parsedList = JSON.parse(localStorage.getItem('listItems'));
                state.listItems = parsedList;
            } else {
                state.listItems = [];
            }
            if(localStorage.getItem('finishedItems')) {
                const parsedFinishedList = JSON.parse(localStorage.getItem('finishedItems'));
                state.finishedItems = parsedFinishedList; 
            } else {
                state.finishedItems = [];
            }
        }
    }
});

export const taskActions = TaskListSlice.actions;

export default TaskListSlice;