import React from 'react'
import s from './Card.module.scss'

const Card = ({text}) => {
  return (
    <div className={s.card}>
        {text}
    </div>
  )
}

export default Card