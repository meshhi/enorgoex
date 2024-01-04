import React from 'react'
import s from './Card.module.scss'
import { Icon } from '@iconify/react/dist/iconify.js'

const Card = ({text, icon}) => {
  return (
    <div className={s.card}>
        <div className={s.card_icon_container}>
            <div className={s.card_icon}>
                <div className={s.circle}></div>
                <div className={s.icon_container}>
                    <Icon
                    icon={icon}
                    className={s.icon}
                    />
                </div>
            </div>
        </div>
        <div className={s.card_text_container}>
            <header className={s.card_text}>
                {text}
            </header>
        </div>
    </div>
  )
}

export default Card