import SliderProjects from './Variants/Projects/SliderProjects';
import SliderReviews from './Variants/Reviews/SliderReviews';

const Slider = ({ slides, variant }) => {
    if (variant === 'projects') {
        return(<SliderProjects slides={slides}></SliderProjects>)
    } else if (variant === 'reviews') {
        return(<SliderReviews slides={slides}></SliderReviews>)
    }
}

export default Slider