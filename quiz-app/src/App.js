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
      console.log(timerStarted)
        interval = setInterval(() => {
            setElapsedTime(elapsedTime => elapsedTime + 1);
          }, 1000);
    }else if(!timerStarted){
        clearInterval(interval);
        console.log('interval cleared')
    }

    return () => clearInterval(interval);
    
    }, [timerStarted]);

    const resetElapsedTime = () => {
      setElapsedTime(0);
    }


  return <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/quiz' element={<Quiz elapsedTime={elapsedTime} resetTimer={resetElapsedTime}/>} />
    <Route path='/results' element={<QuizAnswer />} />
  </Routes>
}

export default App;
