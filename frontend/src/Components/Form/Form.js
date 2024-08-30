import React, { useState } from "react";
import axios from 'axios';

import './Form.css';

import Button from "../Button/Button";

const Form = () => {

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [message, setMessage] = useState('');
    const [mobileField, setMobileField] = useState('');
    const [error, setError] = useState("");

    const baseUrl = 'https://new-portfolio-8gzn.onrender.com';

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${baseUrl}/contactForm`, { nameField, emailField, message, mobileField });

            if (response.status === 200) {
                console.log("Form submitted successfully");
                setError(response.data.message);
                resetForm();
            } else {
                console.log("Unexpected response status:", response.status);
                setError('Unexpected error. Please try again.');
            }

            if (response.status === 400) {
                alert('hi');
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            setError(err.response.data.message);
        }
    };

    const resetForm = () => {
        setNameField('');
        setEmailField('');
        setMessage('');
        setMobileField('');
        setError('');
    }

    return (
        <form className="contact_form" onSubmit={handleSubmit}>
            <div className="input_field">
                <label htmlFor='name'>Name<span className="required">*</span></label>
                <div>
                    <input
                        type="text"
                        name="nameField"
                        id="name"
                        value={nameField}
                        onChange={(e) => setNameField(e.target.value)}
                    />
                </div>
            </div>
            <div className="input_field">
                <label htmlFor='email'>Email<span className="required">*</span></label>
                <input
                    type="text"
                    name="emailField"
                    id="email"
                    value={emailField}
                    onChange={(e) => setEmailField(e.target.value)}
                />
            </div>
            <div className="input_field">
                <label htmlFor='email'>Phone</label>
                <input
                    type="tel"
                    name="mobileField"
                    id="mobileField"
                    value={mobileField}
                    onChange={(e) => setMobileField(e.target.value)}
                />
            </div>
            <div className="input_field">
                <label htmlFor='message'>Message<span className="required">*</span></label>
                <textarea
                    rows="10"
                    cols='10'
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div className={`error ${error ? 'show_error' : ''}`}>{error}</div>
            <Button alignLeft isSubmit submitBtnVal='Send' submitBtnId='submit_btn' submitBtnClass="submit_btn" />
        </form>
    )
}

export default Form;
