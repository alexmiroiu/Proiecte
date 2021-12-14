import { Fragment, useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import styles from './Quiz.module.css';
import QuizAnswer from "../components/QuizAnswer";


const Quiz = () => {
    const questionsList = useSelector((state) => state.html.questions);
    const currentScore = useSelector(state => state.info.score);
    const timerStarted = useSelector(state => state.info.timerStarted);

    const [elapsedTime, setElapsedTime] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    
    const currentQuestion = questionsList[questionNumber];

    const changeQuestionNumber = () => {
        setQuestionNumber(questionNumber + 1)
    }

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

    return <Fragment>
                <h2>Quiz name here</h2>
                <div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.questionNumber}>
                            <h3>Question <span>{questionNumber +1}</span> of <span>{questionsList.length}</span></h3>
                        </div>
                        <div className={styles.score}>
                            <h3>Score</h3>
                            <p>{currentScore}</p>
                        </div>
                        <div className={styles.elapsedTime}>
                            <h3>Elapsed time</h3>
                            <p>{elapsedTime}</p>
                        </div>
                    </div>
                    <h2>{currentQuestion.questionText}</h2>
                    {currentQuestion.answers.map(answer => <QuizAnswer text={answer.answerText} isCorrect={answer.isCorrect} changeQuestion={changeQuestionNumber} />)}
                </div>

    </Fragment>
}

export default Quiz;