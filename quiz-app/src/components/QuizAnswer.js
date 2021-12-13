import styles from "QuizAnswer.module.css";

const QuizAnswer = (props) => {
    return <div className={styles.quizAnswer}>
        <p>number</p>
        <p>props.text</p>
    </div>
}

export default QuizAnswer;