import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { SlidePrevButton } from '../../Buttons/SlidePrevButton';
import { SlideNextButton } from '../../Buttons/SlideNextButton';

import s from './SliderProjects.module.scss'
import { useCallback, useRef } from 'react';


const SliderProjects = ({ slides }) => {
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
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                        el: "#containerForBulletsProjects",
                        type: "bullets",
                        bulletClass: "swiper-custom-bullet",
                        bulletActiveClass: "swiper-custom-bullet-active",
                        clickable: true,
                    }}
                    autoplay={
                        {
                            delay: 5000,
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
                            <div className={s.card}>
                                <img className={s.card_image} src={slide.url} alt="" />
                                <header className={s.card_header}>
                                    <h2>{slide.description.title}</h2>
                                    <span style={{ 'display': 'block' }}>{slide.description.text}</span>
                                </header>
                            </div>
                        </SwiperSlide>)}



                </Swiper>
                <SlideNextButton className={`${s.slider_btn} ${s.slider_next_btn} next-arrow`} onClick={handleNext}></SlideNextButton>
            </div>
            <div id="containerForBulletsProjects"></div>
        </>
    )
}

export default SliderProjects