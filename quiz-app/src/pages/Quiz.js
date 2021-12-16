import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';


import styles from './Quiz.module.css';
import { infoActions, quizActions } from "../store";
import QuizAnswer from "../components/QuizAnswer";
import { Link } from "react-router-dom";


const Quiz = (props) => {
    const dispatch = useDispatch();
    const {elapsedTime} = props;
    const questionsList = useSelector((state) => state.quiz.activeQuiz);
    const currentScore = useSelector(state => state.info.score);
    const questionNumber = useSelector(state => state.info.currentQuestion);
    const correctAnswers = useSelector(state => state.info.correctAnswers);
    const quizName = useSelector(state => state.quiz.quizName);
    const currentQuestion = questionsList[questionNumber];

    let elapsedSeconds, elapsedMinutes;

    const changeQuestionNumber = () => {
        dispatch(infoActions.updateQuestionNumber())
    }

    useEffect(() => {
        if(questionNumber > 9) {
            dispatch(infoActions.stopTimer())
        }
    }, [questionNumber, dispatch])

    if(elapsedTime < 60) {
        elapsedSeconds = elapsedTime;
        elapsedMinutes = 0;
    }

    
    if(elapsedTime > 60) {
        elapsedMinutes = Math.floor(elapsedTime / 60)
        elapsedSeconds = (elapsedTime * elapsedMinutes) % 60;
    }


    
    return <Fragment>
            {questionNumber < 10 && 
        <div className={styles.quizWrapper}>
            <h2>{quizName}</h2>
            <div className={styles.mainQuiz}>
                <div className={styles.infoWrapper}>
                    <div className={`${styles.questionNumber} ${styles.infoSection}`}>
                        <p>Question {questionNumber +1} of {questionsList.length}</p>
                    </div>
                    <div className={`${styles.score} ${styles.infoSection}`}>
                        <p>Score: </p>
                            {questionNumber > 0 && <p>{currentScore}% correct</p>}
                            {questionNumber === 0 && <p>0%</p>}
                    </div>
                    <div className={`${styles.elapsedTime} ${styles.infoSection}`}>
                        <p>Elapsed time:</p>
                        <p>{elapsedMinutes} m {elapsedSeconds} s</p>
                    </div>
                </div>
                <div className={styles.questionWrapper}>
                    <h2>{currentQuestion.questionText}</h2>
                    {currentQuestion.answers.map(answer => <QuizAnswer text={answer.answerText} isCorrect={answer.isCorrect} changeQuestion={changeQuestionNumber} />)}
                </div>
            </div>
        </div>}
            {questionNumber > 9 && 
            <div className={styles.resultsWrapper}>
                <h1>Your results</h1>
                <p>You were {currentScore}% correct.</p>
                <p>You got {correctAnswers} answers right.</p>
                <p>You completed the test in {elapsedMinutes} minutes and {elapsedSeconds} seconds.</p>
            </div>}
            <Link className={styles.homeBtn} to='/' onClick={() => {dispatch(infoActions.reset()); dispatch(quizActions.reset()); props.resetTimer()}}>Home</Link>

    </Fragment>
}

export default Quiz;