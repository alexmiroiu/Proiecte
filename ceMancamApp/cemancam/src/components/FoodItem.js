import React from "react";

const FoodItem = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.time}</p>
            <p>{props.recipe}</p>
            <p>{props.type}</p>
            <img src={props.image} alt='food item' />
        </div>
    )
}

export default FoodItem;