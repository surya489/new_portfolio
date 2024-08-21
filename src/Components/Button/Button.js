import React from "react";

import './Button.css';

const Button = ({ isLink, isDownload, link, isPrimary, children, className, hasOverlay, isPopup, openPopup, isTarget, submitBtnVal, submitBtnId, submitBtnClass, isSubmit }) => {
    const buttonClass = `button Roboto ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;
    const downloadClass = `button Roboto download ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;
    const overlayClass = `linkOverlay ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;

    if (isLink) {
        return (
            <a href={link} className={buttonClass} target={isTarget ? '_blank' : '_self'} rel={isTarget ? 'noopener noreferrer' : ''}>
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
            <div className={buttonClass} target={isTarget ? '_blank' : '_self'} rel={isTarget ? 'noopener noreferrer' : ''} onClick={openPopup}>
                {children}
            </div>
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