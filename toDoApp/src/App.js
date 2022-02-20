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
  const listItems = useSelector(state => state.listItems);
  const finishedItems = useSelector(state => state.finishedItems);

  useEffect(() => {
    dispatch(taskActions.getInitialState());
    firstRender = false;
  }, [])

  useEffect(() => {
    if(!firstRender) {
      const listString = JSON.stringify(listItems);
      localStorage.setItem('listItems', listString);
      const finishedItemsString = JSON.stringify(finishedItems);
      localStorage.setItem('finishedItems', finishedItemsString);
    }

  },[listItems, finishedItems])

  return <div className={classes.mainWrapper}>
    
    <h1>To do list</h1>
    <AddNewTask />
    <Search />
    <TaskList />
    <FinishedTasks />
  </div>
}

export default App;
