import React from "react";

import classes from './Header.module.css';

const Header = () => {
    return <header>
        <h1>To do list</h1>
        <div>
            <div>
                <label>Search:</label>
                <input type="text" />
            </div>
            <div>
                <label>Order By:</label>
                <input type="text" />
            </div>
        </div>
    </header>

}

export default Header;