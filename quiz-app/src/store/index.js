import { createSlice, configureStore } from '@reduxjs/toolkit';

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {quizStarted: true},
    reducers: {
        startQuiz(state) {
            state.quizStarted = true;
        },
        endQuiz(state) {
            state.quizStarted = false;
        }
    }
});


const store = configureStore({
    reducer: quizSlice.reducer
});

export const quizActions = quizSlice.actions;

export default store;