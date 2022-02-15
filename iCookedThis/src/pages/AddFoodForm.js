import { Fragment } from "react/cjs/react.production.min";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFoodActions, uploadImage } from "../store/AddFoodSlice";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import ErrorModal from "../components/Modals/ErrorModal";

import placeholderImg from '../assets/placeholder.png';
import classes from './AddFoodForm.module.css';
import { modalActions } from "../store/ModalSlice";

const AddFoodForm = () => {
    const dispatch = useDispatch();

    const modalActive = useSelector(state => state.modal.modalActive);

    ///food name
    const foodName = useSelector(state => state.addFood.foodName.value);
    const foodNameValid = useSelector(state => state.addFood.foodName.isValid);
    const foodNameTouched = useSelector(state => state.addFood.foodName.touched);
    ///time
    const time = useSelector(state => state.addFood.time.value);
    const timeIsValid = useSelector(state => state.addFood.time.isValid);
    const timeTouched = useSelector(state => state.addFood.time.touched);
    ///recipe
    const recipe = useSelector(state => state.addFood.recipe.value);
    const recipeIsValid = useSelector(state => state.addFood.recipe.isValid);
    const recipeTouched = useSelector(state => state.addFood.recipe.touched);
    ///type 
    const type = useSelector(state => state.addFood.type.value);
    const typeIsValid = useSelector(state => state.addFood.type.isValid);
    const typeIsTouched = useSelector(state => state.addFood.type.touched);
    /// image 
    const newImage = useSelector(state => state.addFood.selectedImage);
    const imgUrl = useSelector(state => state.addFood.uploadedImage.url);
    const imgIsLoading = useSelector(state => state.addFood.uploadedImage.isLoading);
    //form validity
    const formIsValid = useSelector(state => state.addFood.formValididty);
    const showError = useSelector(state => state.addFood.showError);


    const setFoodName = (event) => {
        dispatch(addFoodActions.setName(event.target.value));
    }
    const checkNameValidity = (event) => {
        dispatch(addFoodActions.checkNameValidity(event.target.value))
    }

    const setTimeValue = (event) => {
        dispatch(addFoodActions.setTime(event.target.value));
    }
    const checkTimeValidity = (event) => {
        dispatch(addFoodActions.checkTimeValidity(event.target.value));
    }

    const setRecipeText = (event) => {
        dispatch(addFoodActions.setRecipe(event.target.value));
    }
    const checkRecipeValidity = (event) => {
        dispatch(addFoodActions.checkRecipeValidity(event.target.value));
    }

    const setTypeText = (event) => {
        dispatch(addFoodActions.setType(event.target.value));
    }
    const checkTypeValidity = (event) => {
        dispatch(addFoodActions.checkTypeValidity(event.target.value));
    }

    const setImage = (event) => {
        dispatch(addFoodActions.setSelectedImage(event.target.files[0]));
    }
    const uploadImg = (event) => {
        dispatch(uploadImage(event, newImage))
    }
    const closeErrorModal = () => {
        dispatch(modalActions.changeModalState());
        dispatch(addFoodActions.changeErrorState())
    }

    useEffect(() => {
        if(foodNameValid && timeIsValid && recipeIsValid && typeIsValid) {
            dispatch(addFoodActions.setFormValid());
        } else {
            dispatch(addFoodActions.setFormInvalid());
        }
    },[])

    const errorVisible = `${classes.errorMessage}`;
    const errorHidden = `${classes.errorMessage} ${classes.errorHidden}`;
    const invalidInput = `${classes.input} ${classes.inputError}`;
    const invalidTextarea = `${classes.description} ${classes.inputError}`;
    const invalidSelect = `${classes.select} ${classes.inputError}`;

    return <Fragment>
    <h1>Adauga ce ai gatit</h1>
    <form className={modalActive ? `${classes.form} ${classes.modalIsDisplayed}` : `${classes.form}`}>
        <label htmlFor="foodName">Nume preparat</label>
        <input type="text" required id="foodName" name="foodName" value={foodName} onChange={setFoodName} onBlur={checkNameValidity} className={!foodNameValid && foodNameTouched ? invalidInput : classes.input}/>
        <p className={!foodNameValid && foodNameTouched ? errorVisible : errorHidden}>Introdu un nume valid !</p>
        <label htmlFor="time">Durata (in minute)</label>
        <input type="number" id="time" name="time" value={time} onChange={setTimeValue} onBlur={checkTimeValidity} className={!timeIsValid && timeTouched ? invalidInput : classes.input}/>
        <p className={!timeIsValid && timeTouched ? errorVisible : errorHidden}>Introdu un numar de minute !</p>
        <label htmlFor="recipe">Ingrediente si reteta</label>
        <textarea type="text" name="recipe" value={recipe} rows={10} onChange={setRecipeText} onBlur={checkRecipeValidity} className={!recipeIsValid && recipeTouched ? invalidTextarea : classes.description}/>
        <p className={!recipeIsValid && recipeTouched ? errorVisible : errorHidden}>Reteta trebuie sa contina mai mult de 3 litere sau cifre !</p>
        <select name="type" id="type" onChange={setTypeText} onBlur={checkTypeValidity} value={type} className={!typeIsValid && typeIsTouched ? invalidSelect : classes.select}>
            <option hidden value='Selecteaza'>--selecteaza felul preparatului--</option>
            <option value="Aperitiv">Aperitiv</option>
            <option value="Fel principal">Fel principal</option>
            <option value="Desert">Desert</option>
            <option value="Gustare">Gustare</option>
        </select>
        <p className={!typeIsValid && typeIsTouched ? errorVisible : errorHidden}>Selecteaza tipul preparatului!</p>
        <div className={classes.fileSelectWrapper}>
            <label htmlFor='fileSelect' className={newImage ? classes.fileSelectActive : classes.fileSelect}>{newImage ? newImage.name : 'Selecteaza o imagine'} </label>
            <input type='file' id="fileSelect" name="fileSelect" hidden onChange={setImage} />
            <button onClick={uploadImg} className={classes.uploadBtn}>Adauga imaginea</button>
            {imgUrl && <img src={imgUrl} alt='upload'/>}
            {!imgUrl && !imgIsLoading && <img src={placeholderImg} alt='upload'/>}
            {imgIsLoading && <LoadingSpinner className={classes.spinner}/>}
        </div>
        <button onClick={storeRecipe} className={classes.submitBtn} >Finalizeaza</button>
    </form>
    {showError && <ErrorModal message={'Eroare'} description={'Nu ai introdus corect datele!'} closeModal={closeErrorModal}></ErrorModal>}
    </Fragment>
}

export default AddFoodForm;