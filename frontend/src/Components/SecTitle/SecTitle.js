import React from "react";
import './SecTitle.css';

const SecTitle = ({ tag: Tag, children }) => {
    return (
        <Tag className="section_title PlayfairDisplayBold">
            <span>
                {children}
            </span>
        </Tag>
    );
};

export default SecTitle;