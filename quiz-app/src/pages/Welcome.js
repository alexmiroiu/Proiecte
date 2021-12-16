import { useDispatch } from "react-redux";

import { Fragment } from "react";
import styles from './Welcome.module.css';
import { quizActions } from "../store";
import { infoActions } from "../store";
import { useNavigate } from "react-router-dom";

import htmlImage from '../assets/htmlImg.png';
import jsImage from '../assets/javaScript.png';
import reactImage from '../assets/reactImg.png';


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
                <div className={styles.card}>
                    <img src={htmlImage} alt='html logo' />
                    <button onClick={ setToHtmlHandler }>HTML</button>
                </div>
                <div className={styles.card}>
                    <img src={jsImage} alt="javascript logo" />
                    <button onClick={ setToJSHandler }>Javascript</button>
                </div>
                <div className={styles.card}>
                    <img src={reactImage} alt="react logo" />
                    <button onClick={ setToReactHandler }>React</button>

                </div>
            </div>
        </Fragment>

    )
}

export default Welcome;