import React from "react";
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <nav className={styles.header}>
            <button onClick={props.renderList}>Lista preparate</button>
            <button onClick={props.renderForm}>Adauga ce ai gatit</button>
        </nav>
    )
}

export default Header;