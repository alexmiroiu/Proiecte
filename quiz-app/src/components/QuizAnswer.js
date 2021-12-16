import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./QuizAnswer.module.css";

import { infoActions } from "../store";

const QuizAnswer = (props) => {
    const [answered, setAnswered] = useState(false)
    const dispatch = useDispatch();
    const isValid = props.isCorrect;
    const chooseAnswerHandler = () => {
        if(answered === true) {
            return;
        }
        setAnswered(true)
        setTimeout(() => {
            props.changeQuestion();
            if(isValid) {
                dispatch(infoActions.updateCorrectAnswers());
                dispatch(infoActions.updateScore());
                dispatch(infoActions.updateQuestionsCompleted())
                setAnswered(false);
            } else {
                dispatch(infoActions.updateScore());
                dispatch(infoActions.updateQuestionsCompleted());
                setAnswered(false);
            }

        }, 1000)
        

    }

    return <div className={`${styles.quizAnswer} ${isValid ? styles.correctAnswer : styles.wrongAnswer}`} onClick={chooseAnswerHandler}>
        <p>{props.text}</p>
    </div>
}

export default QuizAnswer;