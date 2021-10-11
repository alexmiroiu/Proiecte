import { Fragment } from "react"
import ImageUpload from "./ImageUpload";
import styles from './AddFoodForm.module.css';

const AddFoodForm = () => {
    
    return (
        <Fragment>
        <h1>Adauga ce ai gatit</h1>
        <form className={styles.form}>
            <label htmlFor="numeMancare">Nume mancare</label>
            <input type="text" id="numeMancare" name="numeMancare"/>
            <label htmlFor="durata">Durata</label>
            <input type="text" id="durata" name="durata"/>
            <label htmlFor="reteta">Ingrediente si reteta</label>
            <textarea type="text" id="reteta" name="reteta"/>
            <ImageUpload />
            <button>Adauga</button>
        </form>
        </Fragment>
    )

}

export default AddFoodForm;