import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";



const DeletedItem = (props) => {
    

    return <div>
        <p>{props.text}</p>
    </div>
}

export default DeletedItem;