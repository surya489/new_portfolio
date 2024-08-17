import React from "react";

import './Center.css';

const Center = ({ children, noPaddingY }) => {
    return (
        <div className={`center ${noPaddingY ? 'py_0' : ''}`}>
            {children}
        </div>
    )
}

export default Center;