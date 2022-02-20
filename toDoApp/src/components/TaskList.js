import {useSelector, useDispatch} from 'react-redux';
import { taskActions } from '../store/TaskListSlice';

import ListItem from './ListItem';

import classes from './TaskList.module.css';
import arrowUp from '../assets/arrowUp.svg';
import arrowDown from '../assets/arrowDown.svg';

const TaskList = () => {
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.listItems);

    const sortAscending = () => {
        dispatch(taskActions.sortAscending())
    }
    const sortDescending = () => {
        dispatch(taskActions.sortDescending())
    }

    return <div className={classes.listWrapper}>
        <h2>Active tasks</h2>
        <h3>Sort tasks by date</h3>
        <div className={classes.buttonsWrapper}>
            <button onClick={sortAscending}>
                <img src={arrowUp} alt='arrow up' />
                <span>Sort Ascending</span>
            </button>
            <button onClick={sortDescending}>
                <img src={arrowDown} alt='arrow up' />
                <span>Sort Descending</span>
            </button>
        </div>
        <div className={classes.itemListWrapper}>
            {itemList.map(item => <ListItem text={item.text} key={item.id} id={item.id} displayed={item.displayed}/>)}
        </div>
    </div>
}

export default TaskList;