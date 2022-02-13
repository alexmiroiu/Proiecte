import React from "react";
import classes from './MobileHeader.module.css';

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
                <li><button onClick={props.renderList}>Lista preparate</button></li>
                <li><button onClick={props.renderForm}>Adauga un preparat</button></li>
              </ul>
           </div>
        </nav>
    )
}

export default Header;