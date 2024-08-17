import React from "react";
import './SecTitle.css';

const SecTitle = ({ tag: Tag, children }) => {
    return (
        <Tag className="section_title">{children}</Tag>
    );
};

export default SecTitle;