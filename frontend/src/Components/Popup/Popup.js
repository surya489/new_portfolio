import React from "react";

import './Popup.css';
import Button from "../Button/Button";

const Popup = ({ src, closePopup, className, projectName, projectdesc, projectLink, isResponsive }) => {
    return (
        <div className={`popup_overlay ${className ? className : ''}`} onClick={closePopup}>
            <div className="popup_content" onClick={(e) => e.stopPropagation()}>
                <div className="popup_content_body">
                    <span className="close_btn" onClick={closePopup}></span>
                    <div className="project_contents col_50">
                        <div className="project_name Comfortaa primary">{projectName}</div>
                        <p className="Nunito">{projectdesc}</p>
                    </div>
                    <div className="col_50 popup_right">
                        <div className="img_wrap">
                            <div className="view_btn_wrap">
                                <Button
                                    {...(isResponsive
                                        ? { isTarget: true, isLink: true, link: projectLink }
                                        : { isDisabled: true })}
                                >
                                    View Site
                                </Button>
                            </div>
                            <div className="sizer"></div>
                            <div
                                className="bg_image"
                                style={{ backgroundImage: `url(${src})` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;