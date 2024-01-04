import s from './CustomTitle.module.scss'

interface ICustomTitleProps {
    title: string;
    position?: string;
    color?: string;
}

const positionObj = {
    "left": {
        "l": "20%",
        "r": "80%"
    },
    "right": {
        "l": "80%",
        "r": "20%"
    },
    "center": {
        "l": "50%",
        "r": "50%"
    },
}

const colorObj = {
    "white": "#FFF",
    "black": "#00294F",
}

const CustomTitle = ({ title, position, color }: ICustomTitleProps) => {
    return (
        <div className={s.custom_title_container} style={{"color": colorObj[color]}}>
            <div className={s.line} style={{
                "flexBasis": positionObj[position]["l"],
                "backgroundColor": colorObj[color]
            }}></div>
            <h1 className={s.title}>{title}</h1>
            <div className={s.line} style={{
                "flexBasis": positionObj[position]["r"],
                "backgroundColor": colorObj[color]
            }}></div>
        </div>
    )
}

export default CustomTitle