import React, {useContext} from "react";
import './about.css';
import ME from '../../assets/me.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
            <section id='about'>
                <h5><FormattedMessage
                    id="about.titleh5"
                    defaultMessage="Get To Know"
                /></h5>
                <h2><FormattedMessage
                    id="about.titleh2"
                    defaultMessage="About Me"
                /></h2>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="" />
                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__cards">

                            <article className="about__card">
                                <FaAward className="about__icon"/>
                                <h5><FormattedMessage
                                    id="about.experienceh5"
                                    defaultMessage="Experience"
                                /></h5>
                                <small><FormattedMessage
                                    id="about.experiencesmall"
                                    defaultMessage="2+ Years programming"
                                /></small>
                            </article>

                            <article className="about__card">
                                <FiUsers className="about__icon"/>
                                <h5><FormattedMessage
                                    id="about.clientsh5"
                                    defaultMessage="Clients"
                                /></h5>
                                <small><FormattedMessage
                                    id="about.clientssmall"
                                    defaultMessage="1"
                                /></small>
                            </article>

                            <article className="about__card">
                                <VscFolderLibrary className="about__icon"/>
                                <h5><FormattedMessage
                                    id="about.projectsh5"
                                    defaultMessage="Projects"
                                /></h5>
                                <small><FormattedMessage
                                    id="about.projectssmall"
                                    defaultMessage="10+ Completed"
                                /></small>
                            </article>
                        </div>

                        <p><FormattedMessage
                            id="about.aboutp"
                            defaultMessage="I'm 19 years old Colombian, i like videogames and programming. I am currently focused on full stack web development and learn new technologies to exploit them. I want share with you my skills. Welcome!!"
                        /></p>

                        <a href="#contact" className="btn btn-primary">
                            <FormattedMessage
                            id="about.bottonContact"
                            defaultMessage="Let's Talk"/>
                        </a>
                    </div>
                </div>
            </section>
    );
}

export default About;