import React, { useState } from "react";

import './Form.css';

import Button from "../Button/Button";

const Form = () => {

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState("");

    const formValidate = () => {
        if (nameField.trim() === '') {
            setError('Name Field cannot be empty')
        } else if (emailField.trim() === '') {
            setError('E-mail Field cannot be empty');
        } else if (message.trim() === '') {
            setError('Message Field cannot be empty')
        } else {
            resetForm();
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        formValidate();
    };

    const resetForm = () => {
        setNameField('');
        setEmailField('');
        setMessage('');
        setError('');
    }

    return (
        <form className="contact_form" onSubmit={handleSubmit}>
            <div className="input_field">
                <label for='name'>Name<span className="required">*</span></label>
                <div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className=""
                        value={nameField}
                        onChange={(e) => setNameField(e.target.value)}
                    />
                </div>
            </div>
            <div className="input_field">
                <label for='email'>Email<span className="required">*</span></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className=""
                    value={emailField}
                    onChange={(e) => setEmailField(e.target.value)}
                />
            </div>
            <div className="input_field">
                <label for='message'>Message<span className="required">*</span></label>
                <textarea
                    rows="10"
                    col='10'
                    name="message"
                    id="message"
                    className=""
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div className={`error ${error ? 'show_error' : ''}`}>{error}</div>
            <Button alignLeft isSubmit submitBtnVal='Send' submitBtnId='submit_btn' submitBtnClass="submit_btn" />
        </form >
    )
}

export default Form;