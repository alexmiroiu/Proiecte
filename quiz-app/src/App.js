import {useSelector, useDispatch} from 'react-redux';
import styles from './App.module.css';

import { quizActions } from './store/index';

function App() {
  const dispatch = useDispatch();
  const quizStarted = useSelector((state) => state.quizStarted);

  const startQuiz = () => {
    dispatch(quizActions.endQuiz());
  }

  return <div>

    {quizStarted && <div className={styles.quiz}> 
      <button onClick={startQuiz}>hide</button>
    </div>}
  </div>
}

export default App;
