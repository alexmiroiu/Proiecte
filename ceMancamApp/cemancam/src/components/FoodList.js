import React, { Fragment, useEffect, useState } from "react";

const FoodList = () => {
    const [foodList, setFoodList] = useState()

    const getFoods = async () => {
        const request = await fetch('https://cemancam-14798-default-rtdb.europe-west1.firebasedatabase.app/recipes.json');
        const response = await request.json();
        let listOfFoods = [];
        // console.log(response);
        for(const item in response) {
            const food = {
                id: item, 
                name: response[item].name,
                time: response[item].time,
                recipe: response[item].recipe,
                image: response[item].img
            }
            listOfFoods.push(food);
        }
        setFoodList(listOfFoods);
    }
    
    let renderedItems;
    useEffect(() => {
        getFoods();
        console.log('rendered');
        console.log(foodList);
        renderedItems = foodList.map(dish => <li>
            <p>{dish.name}</p>
        </li>)
    },[])

    return (
        <Fragment>
        <h3>List of foods here</h3>
        {/* <p>{foodList}</p> */}
        </Fragment>
    );
}

export default FoodList;