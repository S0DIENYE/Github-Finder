import React from 'react';
import Phone from '../../img/phone.svg';
import Location from '../../img/location.svg';
import MailBox from '../../img/mail.svg';
import '../../style.css';
import ContactForm from '../layout/ContactForm';

const Contact = () => {
    return (
        <div id='contact-page'>
            <div className='row'>
                <div className='details-box'>
                    <h1>Contact Us</h1>

                    <div className='icons-box'>
                        <span>
                            <img src={Phone} size={30} alt='icon' />
                            <p>+234 902 233 8588</p>
                        </span>

                        <span>
                            <img src={MailBox} alt='icon' />
                            <p>dienyecodes@gmail.com</p>
                        </span>

                        <span>
                            <img src={Location} alt='icon' />
                            <p>Lagos, Nigeria</p>
                        </span>
                    </div>
                </div>
                <div className='contact-form'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact;