import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';


import styles from './Quiz.module.css';
import { infoActions } from "../store";
import QuizAnswer from "../components/QuizAnswer";


const Quiz = (props) => {
    const dispatch = useDispatch();
    const {elapsedTime} = props;
    const questionsList = useSelector((state) => state.quiz.activeQuiz);
    const currentScore = useSelector(state => state.info.score);
    const questionNumber = useSelector(state => state.info.currentQuestion);
    const currentQuestion = questionsList[questionNumber];

    let elapsedSeconds, elapsedMinutes;

    const changeQuestionNumber = () => {
        dispatch(infoActions.updateQuestionNumber())
    }

    if(elapsedTime < 60) {
        elapsedSeconds = elapsedTime;
    }
    console.log('rendered')

    if(elapsedTime > 60) {
        elapsedMinutes = Math.floor(elapsedTime / 60)
        elapsedSeconds = (elapsedTime * elapsedMinutes) % 60;
    }


    
    return <Fragment>
            {questionNumber < 10 && <div>
                <h2>Quiz name here</h2>
                <div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.questionNumber}>
                            <h3>Question <span>{questionNumber +1}</span> of <span>{questionsList.length}</span></h3>
                        </div>
                        <div className={styles.score}>
                            <h3>Score</h3>
                            <p>{currentScore}% correct so far</p>
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
            </div>}

    </Fragment>
}

export default Quiz;