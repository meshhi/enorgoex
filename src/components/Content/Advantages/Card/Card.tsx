import React from 'react'
import s from './Card.module.scss'
import { Icon } from '@iconify/react/dist/iconify.js'

const Card = ({text, icon}) => {
  return (
    <div className={s.card}>
        <div className={s.card_icon}>
            <div className={s.circle}></div>
            <div className={s.icon_container}>
                <Icon
                icon={icon}
                className={s.icon}
                />
            </div>
        </div>
        <header className={s.card_text}>
            {text}
        </header>
    </div>
  )
}

export default Card