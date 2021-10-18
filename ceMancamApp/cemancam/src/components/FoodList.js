import React, { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import styles from "./FoodList.module.css";

const FoodList = () => {
    const [foodList, setFoodList] = useState([]);
    const [selectedType, setSelectedType] = useState('Toate');
    const [searchPhrase, setSearchPhrase] = useState('');
    const [error, setError] = useState(null);

    const getFoods = async () => {
        try {
            const request = await fetch('https://cemancam-14798-default-rtdb.europe-west1.firebasedatabase.app/recipes.json');
            console.log(request);
            const response = await request.json();
            if(!response) {
                throw new Error('Something went wrong!');
            }
            let listOfFoods = [];
            for(const item in response) {
                const food = {
                    id: item, 
                    name: response[item].name,
                    time: response[item].time,
                    type: response[item].type,
                    recipe: response[item].recipe,
                    image: response[item].img
                }
                listOfFoods.push(food);
            }
            setFoodList(listOfFoods);

        } catch(error) {
            setError(error.message);
        }
    }

    const getSelectedType = (event) => {
        setSelectedType(event.target.value);
    }

    const search = (event) => {
        setSearchPhrase(event.target.value)
    } 

    useEffect(() => {
        getFoods();
        console.log('rendered');
        // console.log(foodList);
    },[])

    return (
        <div className={styles.foodList}>
        <label htmlFor="foodType">Selecteaza dupa felul preparatului: </label>
        <select name="foodType" onChange={getSelectedType} value={selectedType} >
                <option value='Toate'>Toate</option>
                <option value="Aperitiv">Aperitiv</option>
                <option value="Fel principal">Fel principal</option>
                <option value="Desert">Desert</option>
                <option value="Gustare">Gustare</option>
        </select>
        <label htmlFor="search">Cauta preparatul</label>
        <input type="text" name="search" value={searchPhrase} onChange={search} />
        {error && <p>{error}</p>}
        {selectedType === 'Toate' && foodList.filter(item => item.name.toLowerCase().includes(searchPhrase.toLowerCase())).map(item => <FoodItem name={item.name} time={item.time} recipe={item.recipe} type={item.type} image={item.image} key={item.id}></FoodItem>)}
        {selectedType && foodList.filter(item => item.type === selectedType && item.name.toLowerCase().includes(searchPhrase.toLowerCase()))
                                 .map(item => <FoodItem name={item.name} time={item.time} recipe={item.recipe} type={item.type} image={item.image} key={item.id}></FoodItem>)}
        </div>
    );
}

export default FoodList;