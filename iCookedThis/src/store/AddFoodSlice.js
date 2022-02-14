import { createSlice } from "@reduxjs/toolkit";

const AddFoodSlice = createSlice({
    name: 'AddFood',
    initialState: {
        foodname: {
            value: '',
            isValid: false,
            touched: false
        },
        time: {
            value: '',
            isValid: false,
            touched: false
        },
        recipe: {
            value: '',
            isValid,
            touched
        },
        type: {
            value: 'Selecteaza',
            isValid: false,
            touched: false
        },
        selectedImage,
        uploadedImage: {
            url:'',
            isLoading: false,
        },
        formValidity: false,
        showError: false

    },
    reducers: {
        setName(state, action) {
            state.foodname.value = action.payload;
        },
        setTime(state, action) {
            state.time.value = action.payload;
        },
        setRecipe(state, action) {
            state.recipe.value = action.payload;
        },
        setType(state, action) {
            state.type.value = action.payload;
        },
        setSelectedImage(state, action) {
            state.selectedImage = action.payload;
        },
        checkNameValidity(state, action) {
            state.foodname.touched = true;
            if(state.foodname.value.length >= 3) {
                state.foodname.isValid = true;
            } else {
                state.foodname.isValid = false;
            }
        },
        checkTimeValidity(state, action) {
            state.time.touched = true;
            if(state.time.value > 0) {
                state.time.isValid = true;
            } else {
                state.time.isValid = false;
            }
        },
        checkRecipeValidity(state, action) {
            state.recipe.touched = true;
            if(state.recipe.value.length > 10) {
                state.recipe.isValid = true;
            } else {
                state.recipe.isValid = false;
            }
        },
        checkTypeValidity(state, action) {
            state.type.touched = true;
            if(state.type.value !== 'Selecteaza') {
                state.type.isValid = true;
            } else {
                state.type.isValid = false;
            }
        },
        resetAll(state, action) {
            ///foodname
            state.foodname.value = '';
            state.foodname.touched = false;
            state.foodname.isValid = false;
            ///time
            state.time.value = '';
            state.time.isValid = false;
            state.time.touched = false;
            ///recipe
            state.recipe.value = '';
            state.recipe.touched = false;
            state.recipe.isValid = false;
            ///type
            state.type.value = 'Selecteaza';
            state.type.touched = false;
            state.type.isValid false;
            ///image
            state.selectedImage = '';
            state.uploadedImage.url = '';
            state.formValidity = false;
            state.showError = false;
        }
    }

});

export const addFoodActions = AddFoodSlice.actions;

export const uploadImage = (event, image) => {
    return async dispatch => {
        event.preventDefault();

    }
}

export default AddFoodSlice;