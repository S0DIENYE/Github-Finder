import React from 'react';
import Logo from '../../../logo.png';
import { Link } from 'react-router-dom';
import Phone from '../img/phone.svg';
import Mail from '../img/mail.svg';
import Location from '../img/location.svg';
import gitHubImg from '../img/github.png';
import Linkedin from '../img/linkedin.svg';
import Instagram from '../img/instagram.svg';
import Twitter from '../img/twitter.svg';


const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="top-text">
            <img src={Logo} className='logo' alt="web-logo" />
            <h1 className="text-center">GitHub Finder</h1>
        </div>
        <div className="container">
            <ul className="d-flex">
                <h4>Reach us</h4>
                <li id='phone-no'>
                    <img src={Phone} alt="phone" />
                    <span>+234 902 233 8588</span>
                </li>
                <li id='mail'>
                    <img src={Mail} alt="mail" />
                    <span>dienyecodes@gmail.com</span>
                </li>
                <li id='location'>
                    <img src={Location} alt="location" />
                    <span>Lagos, Nigeria</span>
                </li>
            </ul>

            <ul className="d-flex">
                <h4>Links</h4>
                <li id='home'>
                    <Link to="/">Home</Link>
                </li>

                <li id='about'>
                    <Link to="/about">About</Link>
                </li>

                <li id='contact'>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>

            <ul className="d-flex">
                <h4>Socials</h4>
                <li id='github'>
                    <img src={gitHubImg} alt="git-logo" />
                    <a target='blank' href="https://github.com/S0DIENYE">GitHub</a>
                </li>

                <li id='linkedin'>
                    <img src={Linkedin} alt="linkedin-logo" />
                    <a target='blank' href="https://www.linkedin.com/in/david-pepple-96bb40251/">linkedin</a>
                </li>

                <li id='instagram'>
                    <img src={Instagram} alt="instagram-logo" />
                    <a target='blank' href="https://www.instagram.com/dienye._/">Instagram</a>
                </li>

                <li id='twitter'>
                    <img src={Twitter} alt="twitter-logo" />
                    <a target='blank' href="https://twitter.com/Dienye__">twitter</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;