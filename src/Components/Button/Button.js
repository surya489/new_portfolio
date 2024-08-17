import React from "react";

import './Button.css';

const Button = ({ isBtn, isLink, isDownload, link, isPrimary, children, className }) => {
    const buttonClass = `button ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;
    const downloadClass = `button download ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;

    if (isLink) {
        return (
            <a href={link} className={buttonClass}>
                {children}
            </a>
        )
    } else if (isDownload) {
        return (
            <a href={link} className={downloadClass} download>
                {children}
            </a>
        );
    }
    return (
        <button className={buttonClass} >
            {children}
        </button>
    )
}

export default Button;