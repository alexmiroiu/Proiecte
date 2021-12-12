import { Route, Routes } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import styles from './App.module.css';

import { quizActions } from './store/index';
import Welcome from './pages/Welcome';

function App() {
  // const dispatch = useDispatch();
  // const quizStarted = useSelector((state) => state.quizStarted);

  // const startQuiz = () => {
  //   dispatch(quizActions.endQuiz());
  // }

  return <Routes>
    <Route path='/' element={<Welcome />} />
  </Routes>
}

export default App;
