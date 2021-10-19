import React from "react";
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <nav className={styles.header}>
            <p>ce mancam?</p>
            <ul>
                <li onClick={props.renderList}>Lista preparate</li>
                <li onClick={props.renderForm}>Adauga ce ai gatit</li>
            </ul>
        </nav>
    )
}

export default Header;