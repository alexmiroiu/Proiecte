import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { taskActions } from "../store/TaskListSlice";



const DeletedItem = (props) => {
    const dispatch = useDispatch();
    const itemId = props.id;

    const moveItemBackHandler = () => {
        dispatch(taskActions.backToList(itemId))
    }

    return <div>
        <p>{props.text}</p>
        <button onClick={moveItemBackHandler}>Undo</button>
    </div>
}

export default DeletedItem;