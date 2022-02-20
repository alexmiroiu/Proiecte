import React from "react";
import { useDispatch } from "react-redux";

import { taskActions } from "../store/TaskListSlice";

import classes from './DeletedItem.module.css';
import checkedImg from '../assets/checked.svg';
import undoImg from '../assets/undo.svg';



const DeletedItem = (props) => {
    const dispatch = useDispatch();
    const itemId = props.id;

    const moveItemBackHandler = () => {
        dispatch(taskActions.backToList(itemId))
    }

    return <div className={classes.deletedItem}>
                <p><img src={checkedImg} alt="checked"/><span className={classes.text}>{props.text}</span></p>
                <button className={classes.itemBtn} onClick={moveItemBackHandler}><img src={undoImg} alt="undo"/><span>Undo</span></button>
    </div>
}

export default DeletedItem;