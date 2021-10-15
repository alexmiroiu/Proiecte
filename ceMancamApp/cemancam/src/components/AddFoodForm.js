import { Fragment, useState } from "react"
import styles from './AddFoodForm.module.css';

const AddFoodForm = () => {
    const [foodName, setFoodName] = useState('');
    const [time, setTime] = useState('');
    const [recipe, setRecipe] = useState('');
    const [newImage, setNewImage] = useState();
    const [imgUrl, setImgUrl] = useState("");

    const getFoodName = (event) => {
        setFoodName(event.target.value);
    }
    const getTime = (event) => {
        setTime(event.target.value);
    } 

    const getRecipe = (event) => {
        setRecipe(event.target.value);
    }

    const getImage = event => {
        setNewImage(event.target.files[0]);
    }

    const uploadImage = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('file', newImage);
        data.append('upload_preset', 'axmimages');

        const request = await fetch('https://api.cloudinary.com/v1_1/axmwebsitesro/image/upload', {
            method: 'POST',
            body: data
        })
        const response = await request.json();
        console.log(response);
        setImgUrl(response.secure_url)
        console.log(imgUrl)
    }
    
    const foodItem = {
        name: foodName,
        time: time,
        recipe: recipe,
        img: imgUrl
    }

    const storeRecipe = async (event) => {
        event.preventDefault();
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
        setImgUrl('')
        setNewImage('');

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
            <textarea type="text" id="recipe" name="recipe" value={recipe} onChange={getRecipe}/>
            <input type='file'  onChange={getImage}/>
            <button onClick={uploadImage}>Upload Image</button>
            {imgUrl && <img src={imgUrl} alt='upload'/>}
            <button onClick={storeRecipe}>Adauga</button>
        </form>
        </Fragment>
    )

}

export default AddFoodForm;