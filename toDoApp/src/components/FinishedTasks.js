import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { taskActions } from "../store/TaskListSlice"

import DeletedItem from "./DeletedItem";

import classes from './FinishedTasks.module.css';
import closeIcon from '../assets/close.svg';



const FinishedTasks = () => {
    const dispatch = useDispatch();
    const finishedItems = useSelector(state => state.finishedItems);

    const clearFinishedItemsHandler = () => {
        dispatch(taskActions.clearFinishedItems());
    } 

    return  <div className={classes.finishedItemsWrapper}>
                <h2>Finished tasks</h2>
                <div className={classes.finishedItemsList}>
                    {finishedItems.map(item => <DeletedItem text={item.text} key={finishedItems.indexOf(item)} id={item.id}/>)}   
                </div>
                <button onClick={clearFinishedItemsHandler}>
                        <img className={classes.closeImg} src={closeIcon} alt="close" />
                        <span>Clear finished items</span>
                </button>
            </div> 
}

export default FinishedTasks;