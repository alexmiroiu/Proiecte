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
        combined: '',
        strength: '',
        pwError: false
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
            state.pwError = false;
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
            if(!state.numbersChecked && !state.symbolsChecked && !state.lowercaseChecked && !state.uppercaseChecked) {
                state.combined = 'Please make at least one selection';
                state.pwError = true;
                return;
            }

            const generatePassword = (arr, length) => {
                let result = '';
                const characters = arr.join('');
                for(let i=0; i<length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * characters.length))
                }
                return result;
            }
            const newPassword = generatePassword(newArr, state.passwordLength);
            state.combined = newPassword;

            if(state.combined.length < 11) {
                state.strength = 'Weak';
            } else if (state.combined.length > 10 && state.combined.length < 18) {
                state.strength = 'Strong';
            } else if (state.combined.length > 17) {
                state.strength = 'Very Strong';
            }
            console.log(state.strength)

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