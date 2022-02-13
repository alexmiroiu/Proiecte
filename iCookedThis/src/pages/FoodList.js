import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getFoodItems } from "../store/FoodListSlice";


import classes from './FoodList.module.css';

const FoodList = () => {
    const dispatch = useDispatch();
    const listOfFoods = useSelector(state => state.list.FoodList);

    useEffect(() => {
        dispatch(getFoodItems())
    }, [dispatch])

    console.log(listOfFoods)

    return <div>{listOfFoods}</div>
}

export default FoodList;