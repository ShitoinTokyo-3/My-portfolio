import React from "react";
import './portfolio.css';
import DoggoApp from '../../assets/DoggosApp.jpeg';
import SotelinoGallery from '../../assets/SotelinoGallery.jpeg';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={DoggoApp} alt="Doggos App" />
                    </div>
                    <h3>Doggos App</h3>
                    <div className="portfolio__item-cta">
                        <a 
                        href="https://github.com/ShitoinTokyo-3/PI-Dogs/tree/main/PI-Dogs-main" 
                        className="btn" 
                        target='_blank'>
                            Github
                        </a>
                        <a 
                        href="https://workshop-heroku-q1fbl94av-shitointokyo-3.vercel.app" 
                        className="btn btn-primary"
                        target='_blank'>
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={SotelinoGallery} alt="Sotelino Gallery" />
                    </div>
                    <h3>Sotelino Gallery</h3>
                    <div className="portfolio__item-cta">
                        <a 
                        href="https://github.com/Jorg397/Gallery-Art-Final-Project" 
                        className="btn" 
                        target='_blank'>
                            Github
                        </a>
                        <a 
                        href="https://sotelino.vercel.app" 
                        className="btn btn-primary"
                        target='_blank'>
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;