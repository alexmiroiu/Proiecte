import React from "react";
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <p>ce mancam?</p>
            <ul>
                <li onClick={props.renderList}>Lista preparate</li>
                <li onClick={props.renderForm}>Adauga ce ai gatit</li>
            </ul>
        </div>
    )
}

export default Header;