import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { taskActions } from "../store/TaskListSlice";


import classes from './Header.module.css';

const Header = () => {
    const dispatch = useDispatch();
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        dispatch(taskActions.searchByText(typedText));
    },[typedText, dispatch])

    return <header>
        <h1>To do list</h1>
        <div>
            <div>
                <label>Search:</label>
                <input type="text" onChange={(event) => {setTypedText(event.target.value)}} value={typedText}/>
            </div>
        </div>
    </header>

}

export default Header;