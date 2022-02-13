import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getFoodItems } from "../store/FoodListSlice";


import classes from './FoodList.module.css';

const FoodList = () => {
    const dispatch = useDispatch();
    const listOfFoods = useSelector(state => state.list.foodList);

    useEffect(() => {
        dispatch(getFoodItems())
    }, [dispatch])

    console.log(listOfFoods)

    return <div className={classes.font}><p>{}</p></div>
}

export default FoodList;