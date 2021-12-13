import { Fragment, useState } from "react";
import { useSelector } from 'react-redux';

import styles from './Quiz.module.css';
import QuizAnswer from "../components/QuizAnswer";


const Quiz = () => {
    const questionsList = useSelector((state) => state.questions );
    const currentScore = useSelector(state => state.score)
    console.log(questionsList)
    const [questionNumber, setQuestionNumber] = useState(0);
    const currentQuestion = questionsList[questionNumber];
    console.log(currentQuestion.answers);

    const changeQuestionNumber = () => {
        setQuestionNumber(questionNumber + 1)
    }

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
                    </div>
                    <h2>{currentQuestion.questionText}</h2>
                    {currentQuestion.answers.map(answer => <QuizAnswer text={answer.answerText} isCorrect={answer.isCorrect} changeQuestion={changeQuestionNumber} />)}
                </div>

    </Fragment>
}

export default Quiz;