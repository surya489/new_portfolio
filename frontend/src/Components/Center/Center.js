import React from "react";

import './Center.css';

const Center = ({ children, noPaddingY, className }) => {
    const myClass = 'center';
    return (
        <div className={`${noPaddingY ? 'py_0' : ''} ${className ? className + " " + myClass : myClass}`}>
            {children}
        </div>
    )
}

export default Center;