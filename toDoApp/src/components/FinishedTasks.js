import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { taskActions } from "../store/TaskListSlice"

import DeletedItem from "./DeletedItem";

import classes from './FinishedTasks.module.css';



const FinishedTasks = () => {
    const dispatch = useDispatch();
    const finishedItems = useSelector(state => state.finishedItems);

    const clearFinishedItemsHandler = () => {
        dispatch(taskActions.clearFinishedItems());
    } 

    return <div>
                <h2>Finished items here</h2>
                <div>
                    {finishedItems.map(item => <DeletedItem text={item.text} key={finishedItems.indexOf(item)} id={item.id}/>)}   
                </div>
                <button onClick={clearFinishedItemsHandler}>Clear finished items</button>
            </div> 
}

export default FinishedTasks;