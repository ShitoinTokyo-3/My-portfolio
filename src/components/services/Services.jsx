import React from "react";
import './services.css';
import { BiCheck } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';

const Services = () => {
    return (
        <section id='services'>
            <h5><FormattedMessage
                id="services.titleh5"
                defaultMessage="What I Offer"
            /></h5>
            <h2><FormattedMessage
                id="services.titleh2"
                defaultMessage="Services"
            /></h2>

            <div className='container services__container'>
                <article className="service">
                    <div className="service__head">
                        <h3>Front-End</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p><FormattedMessage
                                id="services.p1"
                                defaultMessage="Development and production of web applications"
                            /></p>
                        </li>
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p><FormattedMessage
                                id="services.p2"
                                defaultMessage="Development of scalable applications"
                            /></p>
                        </li>
                    </ul>
                </article>
                {/*End of Front-End*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p>Websites</p>
                        </li>
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p>Portfolios</p>
                        </li>
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p>Ecommerces</p>
                        </li>
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p>Dashboards</p>
                        </li>
                        <li>
                            <p>
                            <FormattedMessage
                                id="services.p3"
                                defaultMessage="And more..."
                            /></p>
                        </li>
                    </ul>
                </article>
                {/*End of Web Development*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Back-End</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p><FormattedMessage
                                id="services.p4"
                                defaultMessage="Development and production of servers for user's interfaces"
                            /></p>
                        </li>
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p><FormattedMessage
                                id="services.p5"
                                defaultMessage="Database management"
                            /></p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Services;