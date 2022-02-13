import { createSlice } from "@reduxjs/toolkit";

const FoodListSlice = createSlice({
    name: 'FoodList',
    initialState: {
        foodList: [],
        errorMessage:''
    },
    reducers: {
        displayDishes(state, action) {
            state.foodList = action.payload;
        },
        setErrorMessage(state, action) {
            state.errorMessage = action.payload;
        }

    },

});

export const listActions = FoodListSlice.actions;
export const getFoodItems = () => {
    return async dispatch => {
        const fetchData = async () =>{
            const request = await fetch('https://cemancam-14798-default-rtdb.europe-west1.firebasedatabase.app/recipes.json');
            const response = await request.json();
            if(!response) {
                console.log('error');
                throw new Error('Something went wrong!');
            }
            console.log('fetched')
            let listOfFoods = [];
            for(const item in response) {
                const food = {
                    id: item, 
                    name: response[item].name,
                    time: response[item].time,
                    type: response[item].type,
                    recipe: response[item].recipe,
                    image: response[item].img
                }
                listOfFoods.push(food);
            }
            return listOfFoods;
        }

        try {
            const data = await fetchData();
            dispatch(listActions.displayDishes(data));
            console.log('dispatched')
        } catch (error) {
            dispatch(listActions.setErrorMessage(error.message))
        }

    }
}


export default FoodListSlice;