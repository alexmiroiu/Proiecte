import { useDispatch } from "react-redux";

import { Fragment } from "react";
import styles from './Welcome.module.css';
import { quizActions } from "../store";
import { infoActions } from "../store";
import { useNavigate } from "react-router-dom";


const Welcome = () => {
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const setToHtmlHandler = () => {
        dispatch(quizActions.setHTML())
        dispatch(infoActions.startTimer())
        navigate('/quiz');
    }

    const setToJSHandler = () => {
        dispatch(quizActions.setJS());
        dispatch(infoActions.startTimer())
        navigate('/quiz');
    }

    const setToReactHandler = () => {
        dispatch(quizActions.setReact());
        dispatch(infoActions.startTimer());
        navigate('/quiz')
    }

    return (
        <Fragment>
            <h1 className={styles.mainTitle}>The basic webdev quiz</h1>
            <h2 className={styles.secondaryTitle}>Choose a quiz and test your knowledge!</h2>
            <div className={styles.buttonWrapper}>
                <button onClick={ setToHtmlHandler }>HTML</button>
                <button onClick={ setToJSHandler }>Javascript</button>
                <button onClick={ setToReactHandler }>React</button>
            </div>
        </Fragment>

    )
}

export default Welcome;