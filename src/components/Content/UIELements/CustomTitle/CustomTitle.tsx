import s from './CustomTitle.module.scss'

interface ICustomTitleProps {
    title: string;
    position?: string;
    color?: string;
}

const CustomTitle = ({ title, position, color }: ICustomTitleProps) => {
    return (
        <div className={s.custom_title_container} style={{"color": color === "white" ? "#FFF" : "auto"}}>
            <div className={s.line} style={{
                "flexBasis": position === "left" ? "20%" : "100%",
                "backgroundColor": color === "white" ? "#FFF" : "auto"
            }}></div>
            <h1 className={s.title}>{title}</h1>
            <div className={s.line} style={{
                "flexBasis": position === "right" ? "20%" : "100%",
                "backgroundColor": color === "white" ? "#FFF" : "auto"
            }}></div>
        </div>
    )
}

export default CustomTitle