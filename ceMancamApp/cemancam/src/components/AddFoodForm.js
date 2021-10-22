import { Fragment, useState } from "react"
import styles from './AddFoodForm.module.css';
import LoadingSpinner from "./UI/LoadingSpinner";

const AddFoodForm = () => {
    const [foodName, setFoodName] = useState('');
    const [time, setTime] = useState('');
    const [recipe, setRecipe] = useState('');
    const [type, setType] = useState('Selecteaza');
    const [newImage, setNewImage] = useState();
    const [imgUrl, setImgUrl] = useState("");
    const [imgIsLoading, setImgIsLoading] = useState(false)
    const [formValid, setFormValid] = useState(false);

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
    console.log('rendered addfoodform');
    
    return (
        <Fragment>
        <h1>Adauga ce ai gatit</h1>
        <form className={styles.form}>
            <label htmlFor="foodName">Nume preparat</label>
            <input type="text" id="foodName" name="foodName" value={foodName} onChange={getFoodName} className={styles.input}/>
            <label htmlFor="time">Durata (in minute)</label>
            <input type="number" id="time" name="time" value={time} onChange={getTime} className={styles.input}/>
            <label htmlFor="recipe">Ingrediente si reteta</label>
            <textarea type="text" name="recipe" value={recipe} rows={10} onChange={getRecipe} className={styles.description}/>
            <select name="type" id="type" onChange={getType} value={type} className={styles.select}>
                <option hidden value='Selecteaza'>--selecteaza felul preparatului--</option>
                <option value="Aperitiv">Aperitiv</option>
                <option value="Fel principal">Fel principal</option>
                <option value="Desert">Desert</option>
                <option value="Gustare">Gustare</option>
            </select>
            <div className={styles.fileSelectWrapper}>
            <label htmlFor='fileSelect' className={newImage ? styles.fileSelectActive : styles.fileSelect}>{newImage ? newImage.name : 'Selecteaza o imagine'} </label>
            <input type='file' id="fileSelect" name="fileSelect" hidden onChange={getImage} />
            </div>
            <button onClick={uploadImage} className={styles.uploadBtn}>Adauga imaginea</button>
            {imgUrl && <img src={imgUrl} alt='upload'/>}
            {imgIsLoading && <LoadingSpinner />}
            <button onClick={storeRecipe} className={styles.submitBtn}>Finalizeaza</button>
        </form>
        </Fragment>
    )

}

export default AddFoodForm;