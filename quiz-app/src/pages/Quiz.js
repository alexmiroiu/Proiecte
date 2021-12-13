import { Fragment, useState } from "react";
import { useSelector } from '@reduxjs/toolkit';

import styles from './Quiz.module.css';
import QuizAnswer from "../components/QuizAnswer";


const Quiz = () => {
    const questionsList = useSelector((state) => state.questions );
    const questionNumber = useState(0);
    const currentQuestion = questionsList[questionNumber];

    return <Fragment>
                <h2>Quiz name here</h2>
                <div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.questionNumber}>
                            <h3>Question <span>1</span> of <span>total</span></h3>
                        </div>
                        <div className={styles.score}>
                            <h3>Score</h3>
                            <p>0</p>
                        </div>
                    </div>
                    <h2>{currentQuestion.questionText}</h2>
                    {currentQuestion.answers.map(answer => <QuizAnswer text={answer.answerText} isCorrect={answer.isCorrect} />)}
                </div>

    </Fragment>
}

export default Quiz;