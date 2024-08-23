import React from "react";

import './Contact.css';
import Form from "../Form/Form";
import SecTitle from "../SecTitle/SecTitle";

const Contact = () => {
    return (
        <div>
            <div className="pb_30">
                <SecTitle tag="h2">Contact Us</SecTitle>
            </div>
            <Form />
        </div>
    )
}

export default Contact;