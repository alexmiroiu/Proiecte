import { Fragment } from "react";

import styles from './Quiz.module.css';


const Quiz = () => {
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
                    <h2>Question name</h2>
                    
                </div>

    </Fragment>
}

export default Quiz;