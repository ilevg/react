import React from "react";
import classes from './MyInput.module.css'

const MyInput = function({children, ...props}) {
    return (
        <input className={classes.myInput} {...props}/> 
    )
}

export default MyInput