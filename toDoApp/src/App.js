import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { taskActions } from './store/TaskListSlice';

import Search from './components/Search';
import TaskList from './components/TaskList';
import AddNewTask from './components/AddNewTask';
import FinishedTasks from './components/FinishedTasks';

import classes from './App.module.css';

let firstRender = true;

function App() {
  const dispatch = useDispatch();
  const [noItems, setNoItems] = useState(false);
  const listItems = useSelector(state => state.listItems);
  const finishedItems = useSelector(state => state.finishedItems);

  useEffect(() => {
    dispatch(taskActions.getInitialState());
    if(listItems.length === 0 && finishedItems.length === 0) {
      setNoItems(true);
    }
    firstRender = false;
  }, [])



  useEffect(() => {
    if(!firstRender) {
      const listString = JSON.stringify(listItems);
      localStorage.setItem('listItems', listString);
      const finishedItemsString = JSON.stringify(finishedItems);
      localStorage.setItem('finishedItems', finishedItemsString);
    }
    if(listItems.length > 0 || finishedItems.length > 0) {
      setNoItems(false);
    }

  },[listItems, finishedItems])

  return  <div className={classes.mainWrapper}>
            <h1 className={classes.mainTitle}><span>To do </span>list</h1>
            <AddNewTask />
            {!noItems && <div className={classes.secondaryWrapper}>
              <Search />
              <TaskList />
              <FinishedTasks />
            </div>}
            {noItems && <div className={classes.secondaryWrapper}>
              <p className={classes.noTasksTitle}>Create a <span>list</span> of tasks and manage it here!</p>
            </div>
            }
          </div>
}

export default App;
