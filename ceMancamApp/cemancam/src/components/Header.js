import React, { useState } from "react";
import styles from './Header.module.css';

const Header = (props) => {



    return (
        <nav className={styles.header}>
            <p>ce mancam?</p>
            <div className={styles.menuToggle}>
              <input type="checkbox" onChange={props.menuStatus} checked={props.menuIsDisplayed}/>
                <span></span>
                <span></span>
                <span></span>
              <ul className={styles.menu}>
                <li><button onClick={props.renderList}>Lista preparate</button></li>
                <li><button onClick={props.renderForm}>Adauga un preparat</button></li>
              </ul>
           </div>
        </nav>
    )
}

export default Header;