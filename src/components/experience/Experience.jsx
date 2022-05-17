import React from "react";
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

const Experience = () => {
    return (
        <section id='experience'>
            <h5><FormattedMessage
                id="experience.titleh5"
                defaultMessage="What Skills I Have"
            /></h5>
            <h2><FormattedMessage
                id="experience.titleh2"
                defaultMessage="My Experience"
            /></h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3><FormattedMessage
                        id="experience.frontendtitle"
                        defaultMessage="Frontend Development"
                    /></h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.intermediate"
                                    defaultMessage="Intermediate"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>TypeScript</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.intermediate"
                                    defaultMessage="Intermediate"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Redux</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.intermediate"
                                    defaultMessage="Intermediate"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>React Router</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>CSS Modules</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.intermediate"
                                    defaultMessage="Intermediate"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>styled-components</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.basic"
                                    defaultMessage="Basic"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.basic"
                                    defaultMessage="Basic"
                                /></small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of Frontend */}
                <div className="experience__backend">
                <h3><FormattedMessage
                        id="experience.backendtitle"
                        defaultMessage="BackEnd Development"
                    /></h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>NodeJs</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Express</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Sequelize</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Passport</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.intermediate"
                                    defaultMessage="Intermediate"
                                /></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Jason Web Token</h4>
                                <small className="text-light"><FormattedMessage
                                    id="experience.experienced"
                                    defaultMessage="Experienced"
                                /></small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;