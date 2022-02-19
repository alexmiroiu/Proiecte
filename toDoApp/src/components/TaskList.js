import {useSelector, useDispatch} from 'react-redux';
import { taskActions } from '../store/TaskListSlice';

import ListItem from './ListItem';

import classes from './TaskList.module.css';

const TaskList = () => {
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.listItems);

    const sortAscending = () => {
        dispatch(taskActions.sortAscending())
    }
    const sortDescending = () => {
        dispatch(taskActions.sortDescending())
    }

    return <div>
        <div>
            <h2>Your tasks</h2>
            <p>A list of the tasks you have appointed for today</p>
        </div>
        <div>
            {itemList.map(item => <ListItem text={item.text} key={item.id} id={item.id} displayed={item.displayed}/>)}
        </div>
        <div>
            <button onClick={sortAscending}>Sort Ascending</button>
            <button onClick={sortDescending}>Sort Descending</button>
        </div>
    </div>
}

export default TaskList;