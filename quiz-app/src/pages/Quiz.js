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
    }

    
    if(elapsedTime > 60) {
        elapsedMinutes = Math.floor(elapsedTime / 60)
        elapsedSeconds = (elapsedTime * elapsedMinutes) % 60;
    }


    
    return <Fragment>
            {questionNumber < 10 && <div>
                <h2>{quizName}</h2>
                <div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.questionNumber}>
                            <h3>Question <span>{questionNumber +1}</span> of <span>{questionsList.length}</span></h3>
                        </div>
                        <div className={styles.score}>
                            <h3>Score</h3>
                            {questionNumber > 0 && <p>You are {currentScore}% correct so far</p>}
                            {questionNumber === 0 && <p>0%</p>}
                        </div>
                        <div className={styles.elapsedTime}>
                            <h3>Elapsed time</h3>
                            <p>{elapsedMinutes} minutes {elapsedSeconds} seconds</p>
                        </div>
                    </div>
                    <h2>{currentQuestion.questionText}</h2>
                    {currentQuestion.answers.map(answer => <QuizAnswer text={answer.answerText} isCorrect={answer.isCorrect} changeQuestion={changeQuestionNumber} />)}
                </div>
            </div>}
            {questionNumber > 9 && <div>
                results here
                <p>{currentScore}% right</p>
                <p>You got {correctAnswers} answers right </p>
                <p>{elapsedMinutes} minutes and {elapsedSeconds} seconds</p>
            </div>}
            <Link to='/' onClick={() => {dispatch(infoActions.reset()); dispatch(quizActions.reset()); props.resetTimer()}}> HOME </Link>

    </Fragment>
}

export default Quiz;