import { Icon } from '@iconify/react';
import s from './SlideButton.module.scss'

export const SlideNextButton = ({className, onClick}) => {
    return (
        <div 
        className={`${s.slider_btn} ${s.slider_next_btn} ${className ? className : ""}`}
        onClick={onClick}
        >
            <Icon
                icon="ep:arrow-up"
                className={s.icon}
            />
        </div>
    );
}