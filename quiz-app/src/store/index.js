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

];

const javascriptQuizQuestions = [
    {
        questionText: 'Which of the following is correct about features of JavaScript?',
        answers: [
            {answerText: 'JavaScript is is complementary to and integrated with HTML.', isCorrect: false},
            {answerText: 'JavaScript is open and cross-platform.', isCorrect: false},
            {answerText: 'Both of the above.', isCorrect: true},
            {answerText: 'All of the above.', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following is correct about JavaScript?',
        answers: [
            {answerText: 'JavaScript is a lightweight, interpreted programming language.', isCorrect: false},
            {answerText: 'JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.', isCorrect: false},
            {answerText: 'The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.', isCorrect: false},
            {answerText: 'All of the above.', isCorrect: true}
        ]
    },
    {
        questionText: 'Which built-in method returns the characters in a string beginning at the specified location?',
        answers: [
            {answerText: 'substr()', isCorrect: true},
            {answerText: 'getSubstring()', isCorrect: false},
            {answerText: 'slice()', isCorrect: false},
            {answerText: 'None of the above.', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following function of Array object returns a string representing the array and its elements?',
        answers: [
            {answerText: 'toSource()', isCorrect: false},
            {answerText: 'sort()', isCorrect: false},
            {answerText: 'splice()', isCorrect: false},
            {answerText: 'toString()', isCorrect: true}
        ]
    },
    {
        questionText: 'Which built-in method removes the last element from an array and returns that element?',
        answers: [
            {answerText: 'last()', isCorrect: false},
            {answerText: 'get()', isCorrect: false},
            {answerText: 'pop()', isCorrect: true},
            {answerText: 'None of the above.', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following is true about variable naming conventions in JavaScript?',
        answers: [
            {answerText: 'You should not use any of the JavaScript reserved keyword as variable name.', isCorrect: false},
            {answerText: 'JavaScript variable names should not start with a numeral (0-9).', isCorrect: false},
            {answerText: 'Both of the above.', isCorrect: true},
            {answerText: 'None of the above.', isCorrect: false}
        ]
    },
    {
        questionText: 'Which built-in method calls a function for each element in the array?',
        answers: [
            {answerText: 'while()', isCorrect: false},
            {answerText: 'loop()', isCorrect: false},
            {answerText: 'forEach()', isCorrect: false},
            {answerText: 'None of the above.', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following function of Array object adds and/or removes elements from an array?',
        answers: [
            {answerText: 'toSource()', isCorrect: false},
            {answerText: 'sort()', isCorrect: false},
            {answerText: 'splice()', isCorrect: false},
            {answerText: 'unshift()', isCorrect: true}
        ]
    },
    {
        questionText: 'Which of the following is the correct syntax to print a page using JavaScript?',
        answers: [
            {answerText: 'window.print();', isCorrect: true},
            {answerText: 'browser.print();', isCorrect: false},
            {answerText: 'navigator.print();', isCorrect: false},
            {answerText: 'document.print();', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following is an advantage of using JavaScript?',
        answers: [
            {answerText: 'Less server interaction', isCorrect: false},
            {answerText: 'Immediate feedback to the visitors', isCorrect: false},
            {answerText: 'Increased interactivity', isCorrect: false},
            {answerText: 'All of the above.', isCorrect: true}
        ]
    },
];

const reactQuizQuestions = [
    {
        questionText: 'Which of the following are the advantages of React.js?',
        answers: [
            {answerText: 'React.js can increase the application\'s performance with Virtual DOM.', isCorrect: false},
            {answerText: 'React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.', isCorrect: false},
            {answerText: 'React.js can render both on client and server side.', isCorrect: false},
            {answerText: 'All of the above', isCorrect: true}
        ]
    },
    {
        questionText: 'Everything in react is a?',
        answers: [
            {answerText: 'Module', isCorrect: true},
            {answerText: 'Package', isCorrect: false},
            {answerText: 'Class', isCorrect: false},
            {answerText: 'Component', isCorrect: true}
        ]
    },
    {
        questionText: 'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
        answers: [
            {answerText: 'key', isCorrect: true},
            {answerText: 'id', isCorrect: false},
            {answerText: 'index', isCorrect: false},
            {answerText: 'data', isCorrect: false}
        ]
    },
    {
        questionText: 'To develop and run React code, Node.js is required.',
        answers: [
            {answerText: 'true', isCorrect: true},
            {answerText: 'false', isCorrect: false}
        ]
    },
    {
        questionText: 'What is the children prop?',
        answers: [
            {answerText: 'A property that lets you set an object as a property', isCorrect: false},
            {answerText: 'A property that lets you nest components in other components', isCorrect: true},
            {answerText: 'A property that lets you pass data to child components', isCorrect: false},
            {answerText: 'A property that adds child values to state', isCorrect: true}
        ]
    },
    {
        questionText: 'What tool does React use to compile JSX?',
        answers: [
            {answerText: 'JSX Compiler', isCorrect: false},
            {answerText: 'React Router', isCorrect: false},
            {answerText: 'Babel', isCorrect: false},
            {answerText: 'ReactDOM', isCorrect: true}
        ]
    },
    {
        questionText: 'What are the two ways data is processed in React?',
        answers: [
            {answerText: 'state & props', isCorrect: true},
            {answerText: 'services & components', isCorrect: false},
            {answerText: 'state & services', isCorrect: false},
            {answerText: 'props & components', isCorrect: false}
        ]
    },
    {
        questionText: 'What is a common use case for ref?',
        answers: [
            {answerText: 'To directly access a DOM node', isCorrect: false},
            {answerText: 'To refer to a function', isCorrect: false},
            {answerText: 'To bind the function', isCorrect: false},
            {answerText: 'To refer to another JavaScript file', isCorrect: true}
        ]
    },
    {
        questionText: 'React can only render elements in the root document element,',
        answers: [
            {answerText: 'False', isCorrect: true},
            {answerText: 'True', isCorrect: false}
        ]
    },
    {
        questionText: 'Which of the following is NOT a rule for React Hooks?',
        answers: [
            {answerText: 'Hooks can be called in Class or Function components', isCorrect: true},
            {answerText: 'Hooks cannot be conditional', isCorrect: false},
            {answerText: 'Hooks can only be called inside React Function components', isCorrect: false},
            {answerText: 'Hooks can only be called at the top level of a component', isCorrect: false}
        ]
    },
]




const quiz = createSlice({
    name: 'quiz',
    initialState: {
        quizOptions: [htmlQuizQuestions, javascriptQuizQuestions, reactQuizQuestions],
        quizName: '',
        activeQuiz: null
    },
    reducers: {
        setHTML(state) {
            state.activeQuiz = state.quizOptions[0];
            state.quizName = 'HTML Quiz';
        },
        setJS(state) {
            state.activeQuiz = state.quizOptions[1];
            state.quizName = 'JavaScript Quiz';
        },
        setReact(state) {
            state.activeQuiz = state.quizOptions[2];
            state.quizName = 'React Quiz';
        },
        reset(state) {
            state.activeQuiz = null;
            state.quizName = '';
        }

    }
});

const infoSlice = createSlice({
    name: 'info',
    initialState: {
        timerStarted: false,
        currentQuestion: 0,
        questionsCompleted: 0,
        correctAnswers: 0,
        score: 0,
        totalTimeElapsed: null
    },
    reducers: {
        updateScore(state) {
            state.score = Math.floor((state.correctAnswers / state.currentQuestion) * 100);
        },
        updateCorrectAnswers(state) {
            state.correctAnswers++;
        },
        updateQuestionNumber(state) {
            state.currentQuestion++;
        },
        updateQuestionsCompleted(state) {
            state.questionsCompleted++;
        },
        startTimer(state) {
            state.timerStarted = true;
        },
        stopTimer(state) {
            state.timerStarted = false;
        },
        reset(state) {
            state.timerStarted = false;
            state.currentQuestion = 0;
            state.questionsCompleted = 0;
            state.correctAnswers = 0;
            state.score = 0;
            state.totalTimeElapsed = null;
        }

    }
})


const store = configureStore({
    reducer: {quiz: quiz.reducer, info: infoSlice.reducer}
});

export const quizActions = quiz.actions;
export const infoActions = infoSlice.actions;

export default store;