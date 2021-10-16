import React from "react";
import styles from './Header.module.css';

const Header = (props) => {
    console.log('header rendered')
    return (
        <nav className={styles.header}>
            <button onClick={props.renderList}>Lista mancaruri</button>
            <button onClick={props.renderForm}>Adauga ce ai gatit</button>
        </nav>
    )
}

export default Header;