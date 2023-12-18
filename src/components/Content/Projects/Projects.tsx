import s from './Projects.module.scss'
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react';

const Projects = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        register();
        const params = {
            slidesPerView: 3,
            breakpoints: {
              768: {
                slidesPerView: 4,
              },
            },
          };
      
          // Assign it to swiper element
          Object.assign(swiperRef.current, params);
      
          // initialize swiper
          swiperRef.current.initialize();
    }, [])
    return (
        <section className={s.projects_section}>
            <h1>Наши проекты</h1>
            <swiper-container
                init="false" 
                ref={swiperRef}
            >
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper-container>

        </section>
    )
}

export default Projects