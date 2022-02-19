import { createSlice } from "@reduxjs/toolkit";

const TaskListSlice = createSlice({
    name: 'tasks',
    initialState: {
        listItems: [
            {
                text: 'de dat cu matura',
                createdAt: 2000,
                id: 24,
                displayed: true,
            },
            {
                text: 'de spalat vasele',
                createdAt: 3000,
                id: 33,
                displayed: true,
            },
            {
                text: 'de dus gunoiul',
                createdAt: 1000,
                id: 44,
                displayed: true,
            },
            {
                text: 'de facut mancare',
                createdAt: 724,
                id: 63,
                displayed: true,
            }
        ],
        finishedItems: [
            {
                text: 'de spalat masina',
                createdAt: 4488,
                id: 123123,
                displayed: true
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
           const parsedList = JSON.parse(localStorage.getItem('listItems'));
           state.listItems = parsedList;
           const parsedFinishedList = JSON.parse(localStorage.getItem('finishedItems'));
           state.finishedItems = parsedFinishedList; 
        }
    }
});

export const taskActions = TaskListSlice.actions;

export default TaskListSlice;