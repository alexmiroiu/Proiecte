import { createSlice } from "@reduxjs/toolkit";

const AddFoodSlice = createSlice({
    name: 'AddFood',
    initialState: {
        foodName: {
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
            isValid: false,
            touched: false
        },
        type: {
            value: 'Selecteaza',
            isValid: false,
            touched: false
        },
        selectedImage: '',
        uploadedImage: {
            url:'',
            isLoading: false,
        },
        formValidity: false,
        showError: false

    },
    reducers: {
        setName(state, action) {
            state.foodName.value = action.payload;
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
        setUploadedImage(state, action) {
            state.uploadedImage.url = action.payload;
        },
        changeImageStatus(state, action) {
            state.uploadedImage.isLoading = !state.uploadedImage.isLoading;
        },
        checkNameValidity(state, action) {
            state.foodName.touched = true;
            if(state.foodName.value.length >= 3) {
                state.foodName.isValid = true;
            } else {
                state.foodName.isValid = false;
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
        setFormValid(state, action) {
            state.formValidity = true;
        },
        setFormInvalid(state, action) {
            state.formValidity = false;
        },
        changeErrorState(state, action) {
            state.showError = !state.showError;
        },
        resetAll(state, action) {
            ///foodName
            state.foodName.value = '';
            state.foodName.touched = false;
            state.foodName.isValid = false;
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
            state.type.isValid = false;
            ///image
            state.uploadedImage.url = '';
            state.formValidity = false;
            state.showError = false;
        }
    }

});

export const addFoodActions = AddFoodSlice.actions;

export const uploadRecipe = (event, formValidity, itemName, itemTime, itemRecipe, itemType, imgUrl) => {
    return async dispatch => {
        event.preventDefault();
        const foodItem = {
            name: itemName,
            time: itemTime,
            recipe: itemRecipe,
            type: itemType,
            img: imgUrl
        }
        const postData = async () => {
            if(formValidity) {
                const request = await fetch('https://cemancam-14798-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', {
                    method: 'POST',
                    body: JSON.stringify(foodItem),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const response = await request.json();
                console.log(response);
                dispatch(addFoodActions.resetAll());
            } else {
                throw new Error('Uploading failed!');
            }
        }
        try {
            await postData();
        } catch (error) {
            dispatch(addFoodActions.changeErrorState());
            // adaugare modal aici
            console.log(error)
        }


    }
}

export default AddFoodSlice;