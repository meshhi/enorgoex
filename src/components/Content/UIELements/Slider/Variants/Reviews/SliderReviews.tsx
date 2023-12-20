import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { useState } from 'react';
import s from './SliderReviews.module.scss'
import { SlideNextButton } from '../../Buttons/SlideNextButton';
import { SlidePrevButton } from '../../Buttons/SlidePrevButton';
import { Icon } from '@iconify/react';

const SliderReviews = ({ slides }) => {
        return (
            <Swiper
                className={s.slider}
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    el: "#containerForBulletsReviews",
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
                        <img src={slide.url} alt="" />
                        <header>
                            <h2>{slide.description.title}</h2>
                            <span style={{ 'display': 'block' }}>{slide.description.text}</span>
                        </header>
                    </SwiperSlide>)}
                <SlideNextButton></SlideNextButton>

                <div id="containerForBulletsReviews"></div>
            </Swiper>
        )
}

export default SliderReviews