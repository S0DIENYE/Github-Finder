import React, { useState } from 'react';


const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('text');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" name="text" placeholder="Full name" />
                <input type="email" className="form-control" name="email" placeholder="Email" />
                <input type="number" className="form-control" name="number" placeholder="Phone number" />
                <textarea cols="30" rows="10" className="form-control" name="message" placeholder="Your Message" />

                {/* <input type="email" name="email" className="form-control" placeholder="Enter your email address"
                    onChange={handleChange} value={state.email} />

                <textarea className="form-control" cols="30" rows="10" name="message" placeholder="Your message"
                    onChange={handleChange} value={state.message}></textarea> */}

                <button className="get-involved-btn btn mt-2" type="submit">Get Involved</button>
            </form>
        </div>
    )
}

export default ContactForm