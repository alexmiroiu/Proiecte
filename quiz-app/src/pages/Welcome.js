import { Fragment } from "react";
import styles from './Welcome.module.css'

const Welcome = () => {
    return (
        <Fragment>
            <h1>Choose the quiz you are interested in</h1>
            <div className={styles.buttonWrapper}>
                <button>HTML</button>
                <button>Javascript</button>
                <button>React</button>
            </div>
        </Fragment>

    )
}

export default Welcome;