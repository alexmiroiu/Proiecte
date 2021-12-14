import { Route, Routes } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import styles from './App.module.css';

import { quizActions } from './store/index';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';

function App() {
  // const dispatch = useDispatch();
  // const quizStarted = useSelector((state) => state.quizStarted);

  // const startQuiz = () => {
  //   dispatch(quizActions.endQuiz());
  // }

  return <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/quiz' element={<Quiz />} />
  </Routes>
}

export default App;
