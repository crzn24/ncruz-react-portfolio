import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [pages] = useState([
        {
            name: "Contact Me"
        }
    ]);

    const [currentPage] = useState(pages[0]);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    }; // TODO: After submit need to clear fields. Return to empty string

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4 pt-4">
                    <h1 className="text-center">{(currentPage.name)}</h1>
                        <hr className="light my-4" />
                        <form id="contact-form" onSubmit={handleSubmit} className="mb-5">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    onBlur={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email address:</label>
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    defaultValue={email}
                                    onBlur={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    name="message"
                                    rows="5"
                                    defaultValue={message}
                                    onBlur={handleChange}
                                />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-xl js-scroll-trigger">Submit</button>
                            </div>
                        </form>
                    
                        <h4>
                            <br />
                            Or send me an email:  <a href="mailto:cruzn@uw.edu"> cruzn@uw.edu</a>
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;