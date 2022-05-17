import React from "react";
import './footer.css';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FormattedMessage } from 'react-intl';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Juan Duque</a>

            <ul className="permalinks">
                <li>
                    <a href="#">
                        <FormattedMessage
                            id="footer.a1"
                            defaultMessage="Home"/>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <FormattedMessage
                            id="footer.a2"
                            defaultMessage="About"/>
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        <FormattedMessage
                            id="footer.a3"
                            defaultMessage="Experience"/>
                    </a>
                </li>
                <li>
                    <a href="#services">
                        <FormattedMessage
                            id="footer.a4"
                            defaultMessage="Services"/>
                    </a>
                </li>
                <li>
                    <a href="#portfolio">
                        <FormattedMessage
                            id="footer.a5"
                            defaultMessage="Portfolio"/>
                    </a>
                </li>
                <li>
                    <a href="#testimonials">
                        <FormattedMessage
                            id="footer.a6"
                            defaultMessage="Testimonials"/>
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <FormattedMessage
                            id="footer.a7"
                            defaultMessage="Contact"/>
                    </a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/juanduque-fullstackdeveloper/"><BsLinkedin/></a>
                <a href="https://github.com/ShitoinTokyo-3"><BsGithub/></a>
                <a href="https://wa.me/+573213982985"><BsWhatsapp/></a>
            </div>
        </footer>
    );
}

export default Footer;