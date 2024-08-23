import React from "react";

import './Contact.css';
import Form from "../Form/Form";
import SecTitle from "../SecTitle/SecTitle";

const Contact = () => {
    return (
        <div>
            <div className="pb_30">
                <SecTitle tag="h2">Let’s Connect</SecTitle>
            </div>
            <Form />
        </div>
    )
}

export default Contact;