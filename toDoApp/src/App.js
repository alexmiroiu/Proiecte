import classes from './App.module.css';
import AddNewTask from './components/AddNewTask';

import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return <div className={classes.mainWrapper}>
    <Header />
    <TaskList />
    <AddNewTask />
  </div>
}

export default App;
