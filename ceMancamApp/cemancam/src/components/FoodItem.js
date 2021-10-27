import React from "react";
import styles from './FoodItem.module.css';

const FoodItem = (props) => {
    const shortRecipe = () => {
        let maxLength = 10;
        let shortenedRecipe = props.recipe.slice(0, maxLength);
        while(shortenedRecipe.charAt(maxLength-1) === '.' ||
        shortenedRecipe.charAt(maxLength-1) === ',' ) {
            maxLength++;
            shortenedRecipe = props.recipe.slice(0, maxLength);
        } 
        return shortenedRecipe;

    }


    return (
        <div className={styles.foodItem}>
            <div className={styles.titleWrapper}>
                <div className={styles.titleContainer}>
                    <h2>{props.name}</h2>
                    <p>{props.type}</p>
                </div>
                <p>{props.time} min</p>
            </div>
            <div className={styles.recipe}>
                <h3>Reteta</h3>
                <p>{shortRecipe()}</p>
            </div>
            <img src={props.image} alt='food item' />
        </div>
    )
}

export default FoodItem;