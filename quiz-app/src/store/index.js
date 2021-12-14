import { createSlice, configureStore } from '@reduxjs/toolkit';

const htmlQuizQuestions = [
    {
        questionText: 'What does HTML stands for?',
        answers: [
            {answerText: 'Hypertext Machine language.', isCorrect: false},
            {answerText: 'Hypertext and links markup language.', isCorrect: false},
            {answerText: 'Hypertext Markup Language.', isCorrect: true},
            {answerText: 'Hightext machine language.', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following characters indicate closing of a tag?',
        answers: [
            {answerText: '.', isCorrect: false},
            {answerText: '/', isCorrect: true},
            {answerText: '\\', isCorrect: false},
            {answerText: '!', isCorrect: false}
        ]
    },
    {
        questionText: 'What is the font-size of the h1 heading tag?',
        answers: [
            {answerText: '3.5 em', isCorrect: false},
            {answerText: '2.17 em', isCorrect: false},
            {answerText: '2 em', isCorrect: true},
            {answerText: '1.5 em', isCorrect: false}
        ]
    },
    {
        questionText: 'How many heading tags are there in HTML5?',
        answers: [
            {answerText: '2', isCorrect: false},
            {answerText: '3', isCorrect: false},
            {answerText: '5', isCorrect: false},
            {answerText: '6', isCorrect: true}
        ]
    },
    {
        questionText: 'Which of the following attributes is used to add link to any element?',
        answers: [
            {answerText: 'link', isCorrect: false},
            {answerText: 'ref', isCorrect: false},
            {answerText: 'href', isCorrect: true},
            {answerText: 'newref', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following tags is used to make a portion of text italic in HTML?',
        answers: [
            {answerText: '<italic>', isCorrect: false},
            {answerText: '<style= “i”>', isCorrect: false},
            {answerText: '<i>', isCorrect: true},
            {answerText: '<style=“italic”>', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following attributes is used to open an hyperlink in new tab?',
        answers: [
            {answerText: 'tab', isCorrect: false},
            {answerText: 'href', isCorrect: false},
            {answerText: 'target', isCorrect: true},
            {answerText: 'ref', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following tags is used to add a line-break in HTML?',
        answers: [
            {answerText: '<br>', isCorrect: false},
            {answerText: '<break>', isCorrect: false},
            {answerText: '</break>', isCorrect: false},
            {answerText: '</br>', isCorrect: true}
        ]
    },
    {
        questionText: 'Which of the following is the correct way to add background color in HTML?',
        answers: [
            {answerText: '<body color = “green”>', isCorrect: false},
            {answerText: '<body bg-color = “green”>', isCorrect: false},
            {answerText: '<body style = “background-color=green”>', isCorrect: false},
            {answerText: '<body style = “background-color: green;”>', isCorrect: true}
        ]
    },
    {
        questionText: 'Which among the following is correct HTML code for making a checkbox?',
        answers: [
            {answerText: '<checkbox>', isCorrect: false},
            {answerText: '<input type="checkbox">', isCorrect: true},
            {answerText: '<check>', isCorrect: false},
            {answerText: '<input type="check">', isCorrect: false}
        ]
    }

]

const htmlQuizSlice = createSlice({
    name: 'html',
    initialState: {
        quizName: 'HTML Quiz',
        questions: htmlQuizQuestions,
        score: 0
    },
    reducers: {
        increase(state) {
            state.score = state.score + 100;
        }
    }
});


const store = configureStore({
    reducer: htmlQuizSlice.reducer
});

export const htmlQuizActions = htmlQuizSlice.actions;

export default store;