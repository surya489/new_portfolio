import React from "react";

import './Button.css';

const Button = ({ isLink, isDownload, link, isPrimary, children, className, hasOverlay, isPopup, openPopup }) => {
    const buttonClass = `button Roboto ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;
    const downloadClass = `button Roboto download ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;
    const overlayClass = `linkOverlay ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;

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
    } else if (hasOverlay) {
        return (
            <div className={overlayClass}>
                {children}
            </div>
        )
    } else if (isPopup) {
        return (
            <div className={buttonClass} onClick={openPopup}>
                {children}
            </div>
        )
    }
    return (
        <button className={buttonClass} >
            {children}
        </button>
    )
}

export default Button;