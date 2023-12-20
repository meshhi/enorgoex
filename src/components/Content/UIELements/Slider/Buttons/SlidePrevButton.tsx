import { useSwiper } from 'swiper/react';
import { Icon } from '@iconify/react';
import s from './SlideButton.module.scss'

export const SlidePrevButton = () => {
    const swiper = useSwiper();
    return (
        <Icon
            icon="ep:arrow-up"
            className={`${s.slider_btn} ${s.slider_prev_btn}`}
            onClick={() => swiper.slidePrev()}
        />
    );
}