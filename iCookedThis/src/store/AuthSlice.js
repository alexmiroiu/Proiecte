import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        isLoggedIn: false,
        userId: null,

    },
    reducers: {

    }
});

export const authActions = AuthSlice.actions;

export const signUp = (url, email, password) => {
    return async () => {
            console.log('initiated')
            const request =  await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response = await request.json();
            console.log(response);

    }
}
export const signIn = (url, email, password) => {
    return async () => {
            console.log('initiated')
            const request =  await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response = await request.json();
            console.log(response);

    }
}

export default AuthSlice;