import s from './Projects.module.scss'
import { useEffect, useState } from 'react';
import Slider from '../UIELements/Slider/Slider';
const Projects = () => {
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
    },]);

    return (
        <section className={s.projects_section} id="projects">
            <h1 className={s.projects_section_title}>Наши проекты</h1>
            <Slider slides={slides} variant="projects"></Slider>
        </section>
    )
}

export default Projects