import React, { useEffect, useState, useContext } from "react";
import FoodItem from "./FoodItem";
import styles from "./FoodList.module.css";
import ModalHelper from "../store/modal-helper";

const FoodList = () => {
    const ctx = useContext(ModalHelper);
    const [foodList, setFoodList] = useState([]);
    const [selectedType, setSelectedType] = useState('Toate');
    const [searchPhrase, setSearchPhrase] = useState('');
    const [error, setError] = useState(null);

    const getFoods = async () => {
        try {
            const request = await fetch('https://cemancam-14798-default-rtdb.europe-west1.firebasedatabase.app/recipes.json');
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
            console.log('called this')

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
    },[])

    const renderListHandler = () => {
        getFoods();
    }

    const toate = selectedType === 'Toate' && foodList.filter(item => item.name.toLowerCase().includes(searchPhrase.toLowerCase()))
                                                      .sort((a, b) => {
                                                            if(a.name.toLowerCase() < b.name.toLowerCase()) {
                                                            return -1;
                                                        } 
                                                        if(a.name.toLowerCase() > b.name.toLowerCase()) {
                                                            return 1;
                                                        }
                                                        return 0;})
                                                       .map(item => <FoodItem name={item.name} time={item.time} recipe={item.recipe} type={item.type} image={item.image} key={item.id} itemId={item.id} renderList={renderListHandler}></FoodItem>);
    const filtered = selectedType && foodList.filter(item => item.type === selectedType && item.name.toLowerCase().includes(searchPhrase.toLowerCase()))
                                             .sort((a, b) => {
                                                            if(a.name.toLowerCase() < b.name.toLowerCase()) {
                                                            return -1;
                                                        } 
                                                        if(a.name.toLowerCase() > b.name.toLowerCase()) {
                                                            return 1;
                                                        }
                                                        return 0;})
                                             .map(item => <FoodItem name={item.name} time={item.time} recipe={item.recipe} type={item.type} image={item.image} key={item.id} itemId={item.id} renderList={renderListHandler}></FoodItem>)

    return (
        <div className={ctx.modalDisplayed ? `${styles.modalIsDisplayed} ${styles.foodList}` : `${styles.foodList}`}>
        <label htmlFor="foodType">Selecteaza dupa felul preparatului: </label>
        <select name="foodType" onChange={getSelectedType} value={selectedType} className={styles.select}>
                <option value='Toate'>Toate</option>
                <option value="Aperitiv">Aperitiv</option>
                <option value="Fel principal">Fel principal</option>
                <option value="Desert">Desert</option>
                <option value="Gustare">Gustare</option>
        </select>
        <label htmlFor="search">Cauta un preparat</label>
        <input type="text" name="search" value={searchPhrase} onChange={search} className={styles.search}/>
        {error && <p>{error}</p>}
        {toate}
        {filtered}
        </div>
    );
}

export default FoodList;