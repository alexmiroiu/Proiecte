import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { taskActions } from '../store/TaskListSlice';

import classes from './ListItem.module.css';

const ListItem = (props) => {
    const [editableText, setEditableText] = useState(props.text)
    const dispatch = useDispatch();
    const itemId = props.id;
    const displayed = props.displayed;

    const [editable, setEditable] = useState(false);

    const deleteItemHandler = () => {
        dispatch(taskActions.deleteItem(itemId))
    }

    const doneEditingHandler = () => {
        dispatch(taskActions.editText({id: itemId, text: editableText}))
        setEditable(false);
    }

    return <div className={`${classes.item} ${displayed ? '' : classes.hidden}`}>
                {!editable && <p>{props.text}</p>}
                {editable && <input type="text" onChange={(event) => {setEditableText(event.target.value)}} value={editableText} /> }
                {!editable && <button onClick={() => {setEditable(true)}}>Edit</button>}
                {editable && <button onClick={doneEditingHandler}>Done Editing</button>}
                <button onClick={deleteItemHandler}>Finish Task</button>
            </div>
}

export default ListItem;