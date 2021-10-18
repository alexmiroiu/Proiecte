import { Fragment, useState } from "react"
import styles from './AddFoodForm.module.css';

const AddFoodForm = () => {
    const [foodName, setFoodName] = useState('');
    const [time, setTime] = useState('');
    const [recipe, setRecipe] = useState('');
    const [type, setType] = useState('Selecteaza');
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

    const getType = event => {
        setType(event.target.value);
    }

    const getImage = event => {
        setNewImage(event.target.files[0]);
    }

    const uploadImage = async (event) => {
        event.preventDefault();
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
            setImgUrl(response.secure_url);
        } catch(err) {
            console.log(err)
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

    }
    console.log('rendered addfoodform')
    
    return (
        <Fragment>
        <h1>Adauga ce ai gatit</h1>
        <form className={styles.form}>
            <label htmlFor="foodName">Nume preparat</label>
            <input type="text" id="foodName" name="foodName" value={foodName} onChange={getFoodName}/>
            <label htmlFor="time">Durata</label>
            <input type="text" id="time" name="time" value={time} onChange={getTime} />
            <label htmlFor="recipe">Ingrediente si reteta</label>
            <textarea type="text" id="recipe" name="recipe" value={recipe} onChange={getRecipe}/>
            <label htmlFor="type">Tipul mancarii</label>
            <select name="type" id="type" onChange={getType} value={type}>
                <option hidden value='Selecteaza'>--selecteaza un fel--</option>
                <option value="Aperitiv">Aperitiv</option>
                <option value="Fel principal">Fel principal</option>
                <option value="Desert">Desert</option>
                <option value="Gustare">Gustare</option>
            </select>
            <input type='file'  onChange={getImage}/>
            <button onClick={uploadImage}>Upload Image</button>
            {imgUrl && <img src={imgUrl} alt='upload'/>}
            <button onClick={storeRecipe}>Adauga</button>
        </form>
        </Fragment>
    )

}

export default AddFoodForm;