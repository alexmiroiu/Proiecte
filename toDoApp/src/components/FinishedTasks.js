import React from "react"
import { useSelector } from "react-redux"
import { taskActions } from "../store/TaskListSlice"

import DeletedItem from "./DeletedItem";

import classes from './FinishedTasks.module.css';



const FinishedTasks = () => {
    const finishedItems = useSelector(state => state.finishedItems);

    return <div>
                <h1>Finished items here</h1>
                <div>
                    {finishedItems.map(item => <DeletedItem text={item.text} key={finishedItems.indexOf(item)} id={item.id}/>)}   
                </div>
                <button>Clear finished items</button>
            </div> 
}

export default FinishedTasks;