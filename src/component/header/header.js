import React from 'react';
import classes from './header.module.css';

const header = () => {
    return (
        <div className = {classes.Header}>
            <header>
                <a href = '/'>Nahid Tech</a>
            </header>         
        </div>
    )
};

export default header;