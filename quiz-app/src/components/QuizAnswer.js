import { useDispatch } from "react-redux";
import styles from "./QuizAnswer.module.css";

import { htmlQuizActions } from "../store";

const QuizAnswer = (props) => {
    const dispatch = useDispatch();
    const isValid = props.isCorrect;
    const chooseAnswerHandler = () => {
        props.changeQuestion();
        if(isValid) {
            dispatch(htmlQuizActions.increase())
        }
    }

    return <div className={styles.quizAnswer} onClick={chooseAnswerHandler}>
        <p>{props.text}</p>
    </div>
}

export default QuizAnswer;