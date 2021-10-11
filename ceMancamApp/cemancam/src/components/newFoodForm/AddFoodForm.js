import { Fragment, useState } from "react"
import ImageUpload from "./ImageUpload";
import styles from './AddFoodForm.module.css';

const AddFoodForm = () => {
    const [foodName, setFoodName] = useState('');
    const [time, setTime] = useState('');
    const [recipe, setRecipe] = useState('');

    const getFoodName = (event) => {
        setFoodName(event.target.value);
    }
    const getTime = (event) => {
        setTime(event.target.value);
    } 

    const getRecipe = (event) => {
        setRecipe(event.target.value);
    }

    const getImg = (url) => {
        const foodItem = {
            name: foodName,
            time: time,
            recipe: recipe,
            img: url
        }
        console.log(foodItem)
    }

    

    const sendData = (event) => {
        event.preventDefault();
    }

    
    return (
        <Fragment>
        <h1>Adauga ce ai gatit</h1>
        <form className={styles.form}>
            <label htmlFor="foodName">Nume mancare</label>
            <input type="text" id="foodName" name="foodName" value={foodName} onChange={getFoodName}/>
            <label htmlFor="time">Durata</label>
            <input type="text" id="time" name="time" value={time} onChange={getTime} />
            <label htmlFor="recipe">Ingrediente si reteta</label>
            <textarea type="text" id="recipe" name="recipe" onChange={getRecipe}/>
            <ImageUpload saveImgUrl={getImg}/>
            <button onClick={sendData}>Adauga</button>
        </form>
        </Fragment>
    )

}

export default AddFoodForm;