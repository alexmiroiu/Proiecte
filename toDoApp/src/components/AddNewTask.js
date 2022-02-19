import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { taskActions } from '../store/TaskListSlice';

import classes from './AddNewTask.module.css';

const AddNewTask = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');

    const updateTextHandler = (event) => {
        setInputText(event.target.value);
    }

    const getTimeStamp = () => {
        const currentDate = new Date().getTime();
        return currentDate - 1645197300000;
    }

    const addNewItem = () => {
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
    }

    return <div>
        <h2>Add new Task here</h2>
        <div>
        <input type="text" onChange={updateTextHandler} value={inputText}/>
        <button onClick={addNewItem}>Add</button>
        </div>

    </div>
}

export default AddNewTask;