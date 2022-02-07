import {createSlice} from '@reduxjs/toolkit';



const pwGeneratorSlice = createSlice({
    name: 'passwordGenerator',
    initialState: {
        passwordLength: 10,
        numbers: [...'0123456789'],
        numbersChecked: false,
        symbols: [...'~!@#$%^&*()_+-=[]\\{}|;:\'",./<>?'],
        symbolsChecked: false,
        lowercase: [...'abcdefghijklmnopqrstuvwxyz'],
        lowercaseChecked: false,
        uppercase: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
        uppercaseChecked: false,
        combined: []
    },
    reducers: {
        changeLength(state, action) {
            const length = action.payload;
            state.passwordLength = length;
        },
        changeNumbers(state, action) {
            state.numbersChecked = !state.numbersChecked;
        },
        changeSymbols(state, action) {
            state.symbolsChecked = !state.symbolsChecked;
        },
        changeLowercase(state, action) {
            state.lowercaseChecked = !state.lowercaseChecked;
        },
        changeUppercase(state, action) {
            state.uppercaseChecked = !state.uppercaseChecked;
        },
        combineChoices(state, action) {
            const newArr = [];
            if(state.numbersChecked) {
                newArr.push(...state.numbers);
            }
            if(state.symbolsChecked) {
                newArr.push(...state.symbols);
            }
            if(state.lowercaseChecked) {
                newArr.push(...state.lowercase)
            }
            if(state.uppercaseChecked) {
                newArr.push(...state.uppercase)
            }

            // const generatePassword = (combinedArray, passwordLength) => {
            //     return [...Array(passwordLength)].map(i => combinedArray[Math.random() * combinedArray.length|0]).join('');
            // };

            const generatePassword = (arr, length) => {
                let result = '';
                const characters = arr.join('');
                for(let i=0; i<length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * characters.length))
                }
                return result;
            }

            console.log(newArr);
            console.log(state.passwordLength);
            const newPassword = generatePassword(newArr, state.passwordLength);
            console.log(newPassword);
        }
    }
});

export const pwActions = pwGeneratorSlice.actions;

export default pwGeneratorSlice;


// options: [
//     {
//         category: 'uppercase',
//         content: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
//         selected: false
//     },
//     {
//         category: 'lowercase',
//         content: [...'abcdefghijklmnopqrstuvwxyz'],
//         selected: false
//     },
//     {
//         category: 'symbols',
//         content: [...'~!@#$%^&*()_+-=[]\\{}|;:\'",./<>?'],
//         selected: false
//     },
//     {
//         category: 'numbers',
//         content: [...'0123456789'],
//         selected: false
//     }
// ]