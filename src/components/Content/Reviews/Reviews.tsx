import s from './Reviews.module.scss'
import { useState } from 'react';
import Slider from '../UIELements/Slider/Slider';
const Reviews = () => {
    const [slides, setSlides] = useState([{
        id: 1,
        url: 'project_slides/1.png',
        description: {
            title: 'Project 1',
            text: 'teeeext'
        }
    }, {
        id: 2,
        url: 'project_slides/2.png',
        description: {
            title: 'Project 2',
            text: 'teeeext\n\nteeeext\n\nteeeext\nteeeext'
        }
    }, {
        id: 3,
        url: 'project_slides/3.png',
        description: {
            title: 'Project 3',
            text: 'teeeext'
        }
    }, {
        id: 4,
        url: 'project_slides/3.png',
        description: {
            title: 'Project 3',
            text: 'teeeext'
        }
    }, {
        id: 5,
        url: 'project_slides/3.png',
        description: {
            title: 'Project 3',
            text: 'teeeext'
        }
    }, {
        id: 6,
        url: 'project_slides/3.png',
        description: {
            title: 'Project 3',
            text: 'teeeext'
        }
    },]);

    return (
        <section className={s.reviews_section}>
            <h1 className={s.reviews_section_title}>Что о нас пишут заказчики</h1>
            <Slider slides={slides} variant="reviews"></Slider>
        </section>
    )
}

export default Reviews