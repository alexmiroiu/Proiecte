import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFoodItems } from "../store/FoodListSlice";
import { listActions } from "../store/FoodListSlice";

import FoodItem from "../components/FoodItem";


import classes from './FoodList.module.css';

const FoodList = () => {
    const dispatch = useDispatch();
    const modalActive = useSelector(state => state.modal.modalActive);
    const selectedType = useSelector(state => state.list.selectedType);
    const searchText = useSelector(state => state.list.searchText);
    const errorMsg = useSelector(state => state.list.errorMessage);
    const listOfFoods = useSelector(state => state.list.foodList);

    useEffect(() => {
        dispatch(getFoodItems());
        localStorage.setItem('foodList', JSON.stringify(listOfFoods));
    }, [dispatch, listOfFoods]);


    const toate = selectedType === 'Toate' && listOfFoods.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
                                                      .sort((a, b) => {
                                                            if(a.name.toLowerCase() < b.name.toLowerCase()) {
                                                            return -1;
                                                        } 
                                                        if(a.name.toLowerCase() > b.name.toLowerCase()) {
                                                            return 1;
                                                        }
                                                        return 0;})
                                                       .map(item => <FoodItem name={item.name} time={item.time} recipe={item.recipe} type={item.type} image={item.image} key={item.id} itemId={item.id} ></FoodItem>);
    const filtered = selectedType && listOfFoods.filter(item => item.type === selectedType && item.name.toLowerCase().includes(searchText.toLowerCase()))
                                             .sort((a, b) => {
                                                            if(a.name.toLowerCase() < b.name.toLowerCase()) {
                                                            return -1;
                                                        } 
                                                        if(a.name.toLowerCase() > b.name.toLowerCase()) {
                                                            return 1;
                                                        }
                                                        return 0;})
                                             .map(item => <FoodItem name={item.name} time={item.time} recipe={item.recipe} type={item.type} image={item.image} key={item.id} itemId={item.id} ></FoodItem>)


    return (        
    <div className={modalActive ? `${classes.modalIsDisplayed} ${classes.foodList}` : `${classes.foodList}`}>
        <label htmlFor="foodType">Selecteaza dupa felul preparatului: </label>
        <select name="foodType" onChange={(event) => {dispatch(listActions.getSelectedType(event.target.value))}} value={selectedType} className={classes.select}>
            <option value='Toate'>Toate</option>
            <option value="Aperitiv">Aperitiv</option>
            <option value="Fel principal">Fel principal</option>
            <option value="Desert">Desert</option>
            <option value="Gustare">Gustare</option>
        </select>
        <label htmlFor="search">Cauta un preparat</label>
        <input type="text" name="search" value={searchText} onChange={(event) => {dispatch(listActions.getSearchPhrase(event.target.value))}} className={classes.search}/>
        {errorMsg && <p>{errorMsg}</p>}
        {toate}
        {filtered}
    </div>
    )
}

export default FoodList;