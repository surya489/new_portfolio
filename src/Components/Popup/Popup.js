import React from "react";

import './Popup.css';

const Popup = ({ src, closePopup, className }) => {
    return (
        <div className={`popup_overlay ${className ? className : ''}`} onClick={closePopup}>
            <div className="popup_content" onClick={(e) => e.stopPropagation()}>
                <span className="close_btn" onClick={closePopup}></span>
                <img src={src} alt="Project" />
            </div>
        </div>
    )
}

export default Popup;