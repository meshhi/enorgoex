import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { useCallback, useRef, useState } from 'react';
import s from './SliderReviews.module.scss'
import { SlideNextButton } from '../../Buttons/SlideNextButton';
import { SlidePrevButton } from '../../Buttons/SlidePrevButton';
import { Icon } from '@iconify/react';
import { EffectFade } from 'swiper/modules';
import { EffectCreative } from 'swiper/modules';
import 'swiper/scss/effect-creative';
import 'swiper/scss/effect-fade';

const SliderReviews = ({ slides }) => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        console.log('prev')
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        console.log(sliderRef)
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <div className={`${s.swiper_container}`}>
                <SlidePrevButton className={`${s.slider_btn} ${s.slider_next_btn} prev-arrow`} onClick={handlePrev}></SlidePrevButton>
                <Swiper
                    ref={sliderRef}
                    className={s.swiper}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination={{
                        el: "#containerForBulletsReviews",
                        type: "bullets",
                        bulletClass: "swiper-custom-bullet",
                        bulletActiveClass: "swiper-custom-bullet-active",
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={
                        {
                            delay: 10000,
                        }
                    }
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {slides.map((slide) =>
                        <SwiperSlide
                            className={s.swiper_slide}
                            key={slide.id}
                        >
                            {({ isActive }) => {
                                return (
                                    <div className={`${s.card} ${isActive ? s.card__active : ''}`}>
                                        <img
                                            className={s.card_image}
                                            src={slide.url} alt="" />
                                        <header className={s.card_header}>
                                            <h2>{slide.description.title}</h2>
                                            <span style={{ 'display': 'block' }}>{slide.description.text}</span>
                                        </header>
                                    </div>
                                )
                            }}

                        </SwiperSlide>)}
                </Swiper>
                <SlideNextButton className={`${s.slider_btn} ${s.slider_next_btn} next-arrow`} onClick={handleNext}></SlideNextButton>
            </div>
            <div id="containerForBulletsReviews"></div>
        </>
    )
}

export default SliderReviews