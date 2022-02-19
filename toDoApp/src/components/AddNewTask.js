import uniqid from 'uniqid';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { taskActions } from '../store/TaskListSlice';

import classes from './AddNewTask.module.css';

let initial = true;

const AddNewTask = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');
    const [minErr, setMinErr] = useState(false);
    const [maxErr, setMaxErr] = useState(false);
    // de adaugat TOUCHED

    const updateTextHandler = (event) => {
        setInputText(event.target.value);
    }

    const unFocusHandler = () => {
        // if(inputText.length < 3) {
        //     setMinErr(true);
        // } else if(inputText.length > 2) {
        //     setMinErr(false)
        // }
        // if(inputText.length > 30) {
        //     setMaxErr(true);
        // } else if (inputText.length < 31) {
        //     setMaxErr(false);
        // }
    }

    useEffect(() => {
        if(!initial){
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
        }
        initial = false;
    },[inputText])

    const getTimeStamp = () => {
        const currentDate = new Date().getTime();
        return currentDate - 1645197300000;
    }

    const addNewItem = () => {
        if(minErr || maxErr) {
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
    }

    return <div>
        <h2>Add new Task here</h2>
        <div>
        <input type="text" onChange={updateTextHandler} onBlur={unFocusHandler} value={inputText}/>
        {minErr && <p>task name must be minimum 3 characters long</p>}
        {maxErr && <p>Max characters allowed 20</p>}
        <button onClick={addNewItem}>Add</button>
        </div>

    </div>
}

export default AddNewTask;