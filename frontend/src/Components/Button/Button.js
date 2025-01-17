import React from "react";

import './Button.css';

const Button = ({ isLink, isDownload, link, isPrimary, children, className, hasOverlay, isPopup, openPopup, isTarget, submitBtnVal, submitBtnId, isSubmit, alignRight, alignLeft, isIcon, isDisabled }) => {
    const buttonClass = `button Roboto ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;
    const downloadClass = `button Nunito download ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;
    const overlayClass = `linkOverlay ${isPrimary ? 'primary' : 'bordered_btn'} ${className || ''}`;
    const submitBtnClass = `button primary ${className || ''}`;
    const submitBtnAlign = alignRight ? 'alignRight' : alignLeft ? 'alignLeft' : 'alignCenter';
    const iconClass = `icon_wrap ${className || ''}`;
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
            <input type="submit" value={submitBtnVal} id={submitBtnId} className={`${submitBtnClass} ${submitBtnAlign}`} />
        )
    } else if (isIcon) {
        return (
            <a href={link} className={iconClass}>
                {children}
            </a>
        )
    } else if (isDisabled) {
        return (
            <div className={`${buttonClass} isDisabled`}>
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