import React from "react";
import './testimonials.css';
import Nata from '../../assets/Nata.jpeg';
import Felipe from '../../assets/Felipe.jpeg';
import Victor from '../../assets/Victor.png';
import Pablo from '../../assets/Pablo.jpg';
import Ivan from '../../assets/Ivan.jpeg';
import { FormattedMessage } from 'react-intl';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const data = [
        {
            avatar: Ivan,
            name: 'Ivan Iraldi',
            review: <FormattedMessage
                id="testimonials.ivanreview"
                defaultMessage="I had the opportunity to work with Juan Duque during a group project for a bootcamp named soyHenry, the truth is he was an excellent colleague being able to learn while working and developing many new skills that can help the team That is why I think Juan Duque is one of the best people i know as a job candidate."
            />
        },{
            avatar: Victor,
            name: 'Victor Rodriguez',
            review: <FormattedMessage
                id="testimonials.victorreview"
                defaultMessage="I worked with Juan Duque in the preparation of the final project for the SoyHenry Bootcamp, I was able to demonstrate his proactivity, critical thinking, teamwork, and ability to adapt to the needs of development and to solve problems. It was a real pleasure working together."
            />
        },{
            avatar: Pablo,
            name: 'Juan Pablo Tuttolomondo',
            review: <FormattedMessage
                id="testimonials.pabloreview"
                defaultMessage="Juan is a person with great reasoning skills, always willing to help solve problems, and has a very good attitude when investigating new technologies. Excellent coworker and works with the humility of who knows what he does."
            />
        },{
            avatar: Nata,
            name: 'Natalia Amaya',
            review: <FormattedMessage
                id="testimonials.nataliareview"
                defaultMessage="He is an incredible colleague, he brings excellent arguments to the work and most importantly he knows how to listen to other people's ideas, he is also a very friendly and intelligent person, he knows a lot about programming and he comes to the solution of the exercises quickly which contributes a lot, it is Comprehensive with people who cannot grasp the solutions to the exercise quickly, so they have no problem providing help by explaining."
            />
        },{
            avatar: Felipe,
            name: 'Felipe Nieto',
            review: <FormattedMessage
                id="testimonials.felipereview"
                defaultMessage="Juan Duque is a person committed to his part of development in projects and jobs, who takes the time necessary to correctly complete the proposed objective. On the other hand, he lends himself to being a source of solution help in other areas of work, thus lending a good different point of view."
            />
        },
    ]
    return (
        <section id="testimonials">
            <h5><FormattedMessage
                id="testimonials.titleh5"
                defaultMessage="Review from coworkers"
            /></h5>
            <h2><FormattedMessage
                id="testimonials.titleh2"
                defaultMessage="Testimonials"
            /></h2>

            <Swiper 
            className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
                {
                data.map(({avatar,name,review}, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">
                                {review}
                            </small>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </section>
    );
}

export default Testimonials;