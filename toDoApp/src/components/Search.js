import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { taskActions } from "../store/TaskListSlice";


import classes from './Search.module.css';

const Search = () => {
    const dispatch = useDispatch();
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        dispatch(taskActions.searchByText(typedText));
    },[typedText, dispatch]);

    return  <div className={classes.searchWrapper}>
                <h2>Search tasks by name</h2>
                <input type="text" onChange={(event) => {setTypedText(event.target.value)}} value={typedText}/>
            </div>


}

export default Search;