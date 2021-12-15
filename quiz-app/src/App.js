import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';

import {useState, useEffect} from 'react';

import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import QuizAnswer from './components/QuizAnswer';

function App() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerStarted = useSelector(state => state.info.timerStarted);


  useEffect(() => {
    let interval = null;

    if(timerStarted) {
        interval = setInterval(() => {
            setElapsedTime(elapsedTime => elapsedTime + 1);
          }, 1000);
    }else {
        clearInterval(interval);

    }
    
    }, [timerStarted])


  return <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/quiz' element={<Quiz elapsedTime={elapsedTime} />} />
    <Route path='/results' element={<QuizAnswer />} />
  </Routes>
}

export default App;
