import classes from './App.module.css';


import Header from './components/Header';
import TaskList from './components/TaskList';
import AddNewTask from './components/AddNewTask';
import FinishedTasks from './components/FinishedTasks';

function App() {
  return <div className={classes.mainWrapper}>
    <Header />
    <TaskList />
    <AddNewTask />
    <FinishedTasks />
  </div>
}

export default App;
