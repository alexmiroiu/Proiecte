import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { taskActions } from '../store/TaskListSlice';

import classes from './AddNewTask.module.css';

const AddNewTask = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');
    const [inputTouched, setInputTouched] = useState(false);
    const [minErr, setMinErr] = useState(false);
    const [maxErr, setMaxErr] = useState(false);
    // de adaugat TOUCHED

    const updateTextHandler = (event) => {
        setInputText(event.target.value);
    }

    const checkValidity = () => {
        setInputTouched(true);
        if(inputText.length < 3) {
            setMinErr(true);
        } else if(inputText.length > 2) {
            setMinErr(false)
        }
        if(inputText.length > 30) {
            setMaxErr(true);
        } else if (inputText.length < 31) {
            setMaxErr(false);
        }
        if(inputText.length === 0) {
            setMinErr(false);
            setInputTouched(false);
        }
    }


    const getTimeStamp = () => {
        const currentDate = new Date().getTime();
        return currentDate - 1645197300000;
    }

    const addNewItem = () => {
        if(inputTouched && minErr) {
            return ;
        }
        if(inputTouched && maxErr) {
            return;
        }
        if(!inputTouched) {
            return;
        }
        const id = uniqid();
        const newTimeStamp = getTimeStamp();
        const itemToAdd = {
            text: inputText,
            createdAt: newTimeStamp,
            id,
            displayed: true
        };
        dispatch(taskActions.addItemToList(itemToAdd));
        setInputText('');
        setInputTouched(false);
    }

    return <div>
        <h2>Add a task</h2>
        <div>
        <input type="text" onChange={updateTextHandler} onBlur={checkValidity} value={inputText}/>
        {minErr && <p>task name must be minimum 3 characters long</p>}
        {maxErr && <p>Max characters allowed 30</p>}
        <button onClick={addNewItem}>PLUS</button>
        </div>

    </div>
}

export default AddNewTask;