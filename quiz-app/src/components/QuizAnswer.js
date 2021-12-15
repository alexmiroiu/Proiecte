import { useDispatch, useSelector } from "react-redux";
import styles from "./QuizAnswer.module.css";

import { infoActions } from "../store";

const QuizAnswer = (props) => {
    const questionNumber = useSelector(state => state.info.currentQuestion)
    const dispatch = useDispatch();
    const isValid = props.isCorrect;
    const chooseAnswerHandler = () => {
        props.changeQuestion();
        if(isValid) {
            dispatch(infoActions.updateCorrectAnswers());
            dispatch(infoActions.updateScore());
        } else {
            dispatch(infoActions.updateScore());
        }

    }

    return <div className={styles.quizAnswer} onClick={chooseAnswerHandler}>
        <p>{props.text}</p>
    </div>
}

export default QuizAnswer;