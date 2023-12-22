import React from 'react'
import classes from './Loader.module.css'
const Loader = function({children, ...props}) {
    return (
        <div className={classes.loader}>
        </div>
    )
}

export default Loader