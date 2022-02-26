import { createSlice } from "@reduxjs/toolkit";
import { modalActions } from "./ModalSlice";

const FoodListSlice = createSlice({
    name: 'FoodList',
    initialState: {
        foodList: [],
        selectedType : "Toate",
        searchText: '',
        errorMessage:''
    },
    reducers: {
        displayDishes(state, action) {
            state.foodList = action.payload;
        },
        setErrorMessage(state, action) {
            state.errorMessage = action.payload;
        },
        getSelectedType(state, action) {
            state.selectedType = action.payload;
        },
        getSearchPhrase(state, action) {
            state.searchText = action.payload;
        },

    },

});

export const listActions = FoodListSlice.actions;

export const getFoodItems = () => {
    return async dispatch => {
        const fetchData = async () =>{
            const request = await fetch('https://cemancam-14798-default-rtdb.europe-west1.firebasedatabase.app/recipes.json');
            const response = await request.json();
            if(!response) {
                throw new Error('Something went wrong!');
            }
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
        } catch (error) {
            dispatch(listActions.setErrorMessage(error.message))
        }

    }
}

export const deleteFoodItem = (id) => {
    return async dispatch => {
        const request = await fetch(`https://cemancam-14798-default-rtdb.europe-west1.firebasedatabase.app/recipes/${id}.json`, {method: 'DELETE'});
        const response = await request.json();
        console.log(response);
        dispatch(modalActions.changeModalState());
    }
}


export default FoodListSlice;