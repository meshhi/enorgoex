import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { SlidePrevButton } from '../../Buttons/SlidePrevButton';
import { SlideNextButton } from '../../Buttons/SlideNextButton';

import s from './SliderProjects.module.scss'


const SliderProjects = ({ slides }) => {
        return (
            <Swiper
                className={s.slider}
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    el: "#containerForBulletsProjects",
                    type: "bullets",
                    bulletClass: "swiper-custom-bullet",
                    bulletActiveClass: "swiper-custom-bullet-active",
                    clickable: true,
                }}
                // autoplay={
                //     {
                //         delay: 5000,
                //     }
                // }
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SlidePrevButton></SlidePrevButton>
                {slides.map((slide) =>
                    <SwiperSlide
                        className={s.slider_slide}
                        key={slide.id}
                    >
                        <img className={s.slider_image} src={slide.url} alt="" />
                        <header className={s.slider_header}>
                            <h2>{slide.description.title}</h2>
                            <span style={{ 'display': 'block' }}>{slide.description.text}</span>
                        </header>
                    </SwiperSlide>)}
                <SlideNextButton></SlideNextButton>

                <div id="containerForBulletsProjects"></div>
            </Swiper>
        )
}

export default SliderProjects