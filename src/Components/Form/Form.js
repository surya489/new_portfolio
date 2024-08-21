import React from "react";

import './Form.css';

import Button from "../Button/Button";

const Form = () => {
    return (
        <form className="contact_form">
            <div className="input_field">
                <label for='name'>Name</label>
                <input type="text" name="name" id="name" className="" />
            </div>
            <div className="input_field">
                <label for='email'>Email</label>
                <input type="email" name="email" id="email" className="" />
            </div>
            <div className="input_field">
                <label for='message'>Message</label>
                <textarea rows="10" col='10' name="message" id="message" className="" />
            </div>
            <div>
                <Button isSubmit submitBtnVal='Send' submitBtnId='submit_btn' submitBtnClass="submit_btn" />
            </div>
        </form >
    )
}

export default Form;