import React from "react";
import styles from './FoodItem.module.css';

const FoodItem = (props) => {
    return (
        <div className={styles.foodItem}>
            <div>
            <h2>{props.name}</h2>
            <p>{props.time} min</p>
            </div>
            <h3>{props.type}</h3>
            <h3>Reteta</h3>
            <p>{props.recipe}</p>
            <img src={props.image} alt='food item' />
        </div>
    )
}

export default FoodItem;