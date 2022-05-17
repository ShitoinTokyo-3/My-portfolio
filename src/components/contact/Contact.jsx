import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FormattedMessage } from 'react-intl';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iidz8uf', 'template_zpmi16o', form.current, 'kpnTdg5K8Q0Cuq1-b')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
      };
    return (
        <section id='contact'>
            <h5><FormattedMessage
                id="contact.titleh5"
                defaultMessage="Get In Touch"
            /></h5>
            <h2><FormattedMessage
                id="contact.titleh2"
                defaultMessage="Contact Me"
            /></h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>juanmanuelduque0920@gmail.com</h5>
                        <a href="mailto:juanmanuelduque0920@gmail.com" target='_blank'>
                            <FormattedMessage
                                id="contact.sendmessage"
                                defaultMessage="Send a message"
                            />
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+57 321 3982985</h5>
                        <a href="https://wa.me/+573213982985" target='_blank'>
                            <FormattedMessage
                                id="contact.sendmessage"
                                defaultMessage="Send a message"
                            />
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon"/>
                        <h4>Linkedin</h4>
                        <h5>Juan Duque</h5>
                        <a href="https://www.linkedin.com/in/juanduque-fullstackdeveloper/" target='_blank'>
                            <FormattedMessage
                                id="contact.sendmessage"
                                defaultMessage="Send a message"
                            />
                        </a>
                    </article> 
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required/>
                    <input type="email" name='email' placeholder="Your Email" required/>
                    <textarea name='message' rows='7' placeholder="Your Message" required></textarea>
                    <button type='submit' className="btn btn-primary">
                        <FormattedMessage
                                id="contact.sendmessage2"
                                defaultMessage="Send message"
                            />
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;