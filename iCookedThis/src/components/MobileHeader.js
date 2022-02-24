import React from "react";
import classes from './MobileHeader.module.css';

import { Link } from 'react-router-dom';

const Header = (props) => {



    return (
        <nav className={classes.header}>
            <p>ce mancam?</p>
            <div className={classes.menuToggle}>
              <input type="checkbox" onChange={props.menuStatus} checked={props.menuIsDisplayed}/>
                <span></span>
                <span></span>
                <span></span>
              <ul className={classes.menu}>
                <Link to="/" className={classes.menuBtn} onClick={props.renderList}>Lista preparate</Link>
                <Link to="/add-recipe" className={classes.menuBtn} onClick={props.renderForm}> Adauga un preparat</Link>
              </ul>
           </div>
        </nav>
    )
}

export default Header;