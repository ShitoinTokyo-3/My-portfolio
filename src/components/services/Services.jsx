import React from "react";
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className="service">
                    <div className="service__head">
                        <h3>Front-End</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p>Development and production of web applications</p>
                        </li>
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p>Development of scalable applications</p>
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
                            <p>Dashboards.</p>
                        </li>
                        <li>
                            <p>And more...</p>
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
                            <p>Development and production of servers for the client</p>
                        </li>
                        <li>
                            <BiCheck  className="service__list-icon"/>
                            <p>Database management</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Services;