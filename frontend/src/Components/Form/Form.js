import React, { useState } from "react";
import axios from 'axios';

import './Form.css';

import Button from "../Button/Button";
import loader from '../../assets/images/loader.png';

const Form = () => {

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [message, setMessage] = useState('');
    const [mobileField, setMobileField] = useState('');
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [statusClass, setStatusClass] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setStatusClass('');
        setError('');

        try {
            const response = await axios.post('https://new-portfolio-8gzn.onrender.com//contactForm', { nameField, emailField, message, mobileField });

            if (response.status === 200) {
                setTimeout(() => {
                    setIsLoading(false);
                    setStatusClass('success');
                    setError(response.data.message);
                    resetForm();
                }, 2000);
            }
        } catch (err) {
            setTimeout(() => {
                setIsLoading(false);
                setStatusClass('error');
                setError(err.response.data.message);
            }, 2000);
        }
    };

    const resetForm = () => {
        setTimeout(() => {
            setNameField('');
            setEmailField('');
            setMessage('');
            setMobileField('');
            setError('');
            setStatusClass('');
        }, 3000);
    }

    return (
        <form className={`contact_form ${isLoading ? 'loading' : ''}`} onSubmit={handleSubmit}>
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
            <div className={`error ${error ? 'show_error' : ''} ${statusClass}`}>{error}</div>
            <div className="btnWrap">
                <div className="loader">
                    <img src={loader} alt="loader" />
                </div>
                <Button alignLeft isSubmit submitBtnVal='Send' submitBtnId='submit_btn' submitBtnClass="submit_btn" />
            </div>
        </form>
    )
}

export default Form;
