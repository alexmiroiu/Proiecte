import { useDispatch, useSelector } from "react-redux";

import { Fragment } from "react";
import styles from './Welcome.module.css';
import { quizActions } from "../store";
import { infoActions } from "../store";
import { useNavigate } from "react-router-dom";


const Welcome = () => {
    const dispatch = useDispatch();
    const quizIsActive = useSelector(state => state.info.quizActive);

    let navigate = useNavigate();

    const setToHtmlHandler = () => {
        dispatch(quizActions.setHTML())
        dispatch(infoActions.startQuiz())
        navigate('/quiz');
    }

    const setToJSHandler = () => {
        dispatch(quizActions.setJS());
        dispatch(infoActions.startQuiz())
        navigate('/quiz');
    }

    const setToReactHandler = () => {
        dispatch(quizActions.setReact());
        dispatch(infoActions.startQuiz());
        navigate('/quiz')
    }

    return (
        <Fragment>
            <h1>Choose the quiz you are interested in</h1>
            <div className={styles.buttonWrapper}>
                <button onClick={ setToHtmlHandler }>HTML</button>
                <button onClick={ setToJSHandler }>Javascript</button>
                <button onClick={ setToReactHandler }>React</button>
            </div>
        </Fragment>

    )
}

export default Welcome;