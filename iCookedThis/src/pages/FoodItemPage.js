


import { Fragment } from 'react/cjs/react.production.min';
import classes from './FoodItemPage.module.css';


const FoodItemPage = () => {


    return <Fragment>
            <div className={styles.imageWrapper}>
                <img src={props.image} alt='food item' className={styles.mainImage}/>
                <div className={styles.timeWrapper}>
                    <img src={clock} alt='clock' className={styles.icon}/>
                    <p className={styles.time}>{props.time} min</p>
                </div>
                <p className={styles.type}>{props.type}</p>
            </div>
            <h3>{props.name}</h3>
            <div className={styles.recipeWrapper}>
                <h4>Reteta</h4>
                <p className={styles.errorDescription}>{props.recipe}</p>
            </div>
            <button className={styles.modalBtn} onClick={props.clickAction}>Inchide</button>
            </Fragment>



}

export default FoodItemPage;