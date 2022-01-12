import React from "react";
import classes from './MobileHeader.module.css';

const MobileHeader = (props) => {

    return (
        <nav className={classes.header}>
            <p>ce mancam?</p>
            <div className={classes.menuToggle}>
              <input type="checkbox" checked={props.menuIsDisplayed}/>
                <span></span>
                <span></span>
                <span></span>
              <ul className={classes.menu}>
                <li><button >Lista preparate</button></li>
                <li><button >Adauga un preparat</button></li>
              </ul>
           </div>
        </nav>
    )
}

export default MobileHeader;