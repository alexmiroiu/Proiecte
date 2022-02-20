import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { taskActions } from '../store/TaskListSlice';



import classes from './ListItem.module.css';
import circle from '../assets/circle.svg';
import editIcon from '../assets/edit.svg';
import closeIcon from '../assets/close.svg';

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
                <div className={classes.textWrapper}>
                    {!editable && <p><img src={circle} alt="circle"/><span>{props.text}</span></p>}
                    {editable && <input type="text" onChange={(event) => {setEditableText(event.target.value)}} value={editableText} /> }
                </div>
                <div className={classes.buttonsWrapper}>
                    {!editable && <button className={`${classes.itemBtn} ${classes.editBtn}`} onClick={() => {setEditable(true)}}>
                        <img src={editIcon} alt='edit'/>
                        </button>}
                    {editable && <button className={classes.itemBtn} onClick={doneEditingHandler}>
                        <img src={closeIcon} alt="close" />
                        <span>Done Editing</span>
                        </button>}
                    {!editable && <button className={classes.itemBtn} onClick={deleteItemHandler}>Finish Task</button>}
                </div>
            </div>
}

export default ListItem;