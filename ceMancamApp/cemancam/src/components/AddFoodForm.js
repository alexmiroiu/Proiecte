import { Fragment, useState } from "react"
import styles from './AddFoodForm.module.css';
import LoadingSpinner from "./UI/LoadingSpinner";
import placeholderImg from '../assets/placeholder.png';

const AddFoodForm = () => {
    const [foodName, setFoodName] = useState('');
    const [foodNameIsValid, setFoodNameIsValid] = useState(false);
    const [foodNameTouched, setFoodNameTouched] = useState(false);
    const [time, setTime] = useState('');
    const [timeIsValid, setTimeIsValid] = useState(false);
    const [timeTouched, setTimeTouched] = useState(false);
    const [recipe, setRecipe] = useState('');
    const [recipeIsValid, setRecipeIsValid] = useState(false);
    const [recipeTouched, setRecipeTouched] = useState(false);
    const [type, setType] = useState('Selecteaza');
    const [typeIsValid, setTypeIsValid] = useState(false);
    const [typeIsTouched, setTypeIsTouched] = useState(false);
    const [newImage, setNewImage] = useState();
    const [imgUrl, setImgUrl] = useState("");
    const [imgIsLoading, setImgIsLoading] = useState(false)
    const [formValid, setFormValid] = useState(false);


// SETTING VALUES TO STATE
    const getFoodName = (event) => {
        setFoodName(event.target.value);
    }

    const getTime = (event) => {
        setTime(event.target.value);
    } 

    const getRecipe = (event) => {
        setRecipe(event.target.value);
    }

    const getType = event => {
        setType(event.target.value);
    }

    const getImage = event => {
        setNewImage(event.target.files[0]);
    }

// CHECKING VALIDITY
    const checkNameValidity = () => {
        setFoodNameTouched(true);
        if(foodName.length >= 3) {
            setFoodNameIsValid(true);
        } else {
            setFoodNameIsValid(false);
        }
    }

    const checkTimeValidity = () => {
        setTimeTouched(true);
        if(time > 0) {
            setTimeIsValid(true)
        } else {
            setTimeIsValid(false)
        }
    }

    const checkRecipeValidity = () => {
        setRecipeTouched(true);
        if(recipe.length > 2) {
            setRecipeIsValid(true);
        } else {
            setRecipeIsValid(false);
        }
    }

    const checkTypeValidity = () => {
        setTypeIsTouched(true);
        if(type !== 'Selecteaza') {
            setTypeIsValid(true);
        } else {
            setTypeIsValid(false);
        }
    }
    
    const checkFormValidity = () => {
        if(foodNameIsValid && timeIsValid && recipeIsValid && typeIsValid) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }

    const errorVisible = `${styles.errorMessage}`;
    const errorHidden = `${styles.errorMessage} ${styles.errorHidden}`;
    const invalidInput = `${styles.input} ${styles.inputError}`;
    const invalidTextarea = `${styles.description} ${styles.inputError}`;
    const invalidSelect = `${styles.select} ${styles.inputError}`;

    const uploadImage = async (event) => {
        event.preventDefault();
        setImgIsLoading(true);
        const data = new FormData();
        data.append('file', newImage);
        data.append('upload_preset', 'axmimages');
        try {
            const request = await fetch('https://api.cloudinary.com/v1_1/axmwebsitesro/image/upload', {
                method: 'POST',
                body: data
            })
            console.log(request);
            if(!request.ok) {
                throw new Error('Image did not upload!')
            }
            const response = await request.json();
            setImgIsLoading(false);
            setImgUrl(response.secure_url);
        } catch(err) {
            console.log(err)
            setImgIsLoading(false);
        }
    }
    
    const foodItem = {
        name: foodName,
        time: time,
        recipe: recipe,
        type: type,
        img: imgUrl
    }

    const storeRecipe = async (event) => {
        event.preventDefault();
        checkFormValidity();
        if(formValid) {
            const request = await fetch('https://cemancam-14798-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', {
                method: 'POST',
                body: JSON.stringify(foodItem),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response = await request.json();
            console.log(response);
            setFoodName('');
            setTime('');
            setRecipe('');
            setType('');
            setImgUrl('');
            setNewImage('');
        } else {
            return;
        }


    }
    console.log('rendered addfoodform');
    
    return (
        <Fragment>
        <h1>Adauga ce ai gatit</h1>
        <form className={styles.form}>
            <label htmlFor="foodName">Nume preparat</label>
            <input type="text" required id="foodName" name="foodName" value={foodName} onChange={getFoodName} onBlur={checkNameValidity} className={!foodNameIsValid && foodNameTouched ? invalidInput : styles.input}/>
            <p className={!foodNameIsValid && foodNameTouched ? errorVisible : errorHidden}>Introdu un nume valid !</p>
            <label htmlFor="time">Durata (in minute)</label>
            <input type="number" id="time" name="time" value={time} onChange={getTime} onBlur={checkTimeValidity} className={!timeIsValid && timeTouched ? invalidInput : styles.input}/>
            <p className={!timeIsValid && timeTouched ? errorVisible : errorHidden}>Introdu un numar de minute !</p>
            <label htmlFor="recipe">Ingrediente si reteta</label>
            <textarea type="text" name="recipe" value={recipe} rows={10} onChange={getRecipe} onBlur={checkRecipeValidity} className={!recipeIsValid && recipeTouched ? invalidTextarea : styles.description}/>
            <p className={!recipeIsValid && recipeTouched ? errorVisible : errorHidden}>Reteta trebuie sa contina mai mult de 3 litere sau cifre !</p>
            <select name="type" id="type" onChange={getType} onBlur={checkTypeValidity} value={type} className={!typeIsValid && typeIsTouched ? invalidSelect : styles.select}>
                <option hidden value='Selecteaza'>--selecteaza felul preparatului--</option>
                <option value="Aperitiv">Aperitiv</option>
                <option value="Fel principal">Fel principal</option>
                <option value="Desert">Desert</option>
                <option value="Gustare">Gustare</option>
            </select>
            <p className={!typeIsValid && typeIsTouched ? errorVisible : errorHidden}>Selecteaza tipul preparatului!</p>
            <div className={styles.fileSelectWrapper}>
            <label htmlFor='fileSelect' className={newImage ? styles.fileSelectActive : styles.fileSelect}>{newImage ? newImage.name : 'Selecteaza o imagine'} </label>
            <input type='file' id="fileSelect" name="fileSelect" hidden onChange={getImage} />
            <button onClick={uploadImage} className={styles.uploadBtn}>Adauga imaginea</button>
            {imgUrl && <img src={imgUrl} alt='upload'/>}
            {!imgUrl && !imgIsLoading && <img src={placeholderImg} alt='upload'/>}
            {imgIsLoading && <LoadingSpinner />}
            </div>
            <button onClick={storeRecipe} className={styles.submitBtn}>Finalizeaza</button>
        </form>
        </Fragment>
    )

}

export default AddFoodForm;