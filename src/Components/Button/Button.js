import React from "react";

import './Button.css';

const Button = ({ isBtn, isLink, isDownload, link, isPrimary, children, className, hasOverlay, isSubmit, submitBtnVal, submitBtnId, submitBtnClass }) => {
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
            <a href={link} className={overlayClass}>
                {children}
            </a>
        )
    } else if (isSubmit) {
        return (
            <input type="submit" value={submitBtnVal} id={submitBtnId} className={`${submitBtnClass ? submitBtnClass : ''}`} />
        )
    }
    return (
        <button className={buttonClass} >
            {children}
        </button>
    )
}

export default Button;