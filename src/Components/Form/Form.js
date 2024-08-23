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
            setError('I’d love to know your name. Could you please provide it?');
            return false;
        } else if (emailField.trim() === '') {
            setError('Your email address is important to me. Please enter it.');
            return false;
        } else if (message.trim() === '') {
            setError('I value your thoughts. Could you please leave a message?');
            return false;
        } else {
            setError('');  // Clear any error messages
            return true;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload

        // Perform client-side validation
        if (formValidate()) {
            try {
                const response = await fetch('http://localhost:5000/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: nameField, email: emailField, message })
                });

                const data = await response.json();
                console.log(data.message); // 'Form submitted successfully'

                // Reset form fields if submission is successful
                resetForm();
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
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
                <label htmlFor='name'>Name<span className="required">*</span></label>
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
                <label htmlFor='email'>Email<span className="required">*</span></label>
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
                <label htmlFor='message'>Message<span className="required">*</span></label>
                <textarea
                    rows="10"
                    cols='10'
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
    );
}

export default Form;