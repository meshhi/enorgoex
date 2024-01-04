import React from 'react'
import s from './Advantages.module.scss'
import CustomTitle from '../UIELements/CustomTitle/CustomTitle'
import Card from './Card/Card'

const advantageCards = [{
  "id": 1,
  "icon": "card",
  "text": "Опыт в сфере более 25 лет"
}, {
  "id": 2,
  "icon": "card",
  "text": "Всегда на связи"
}, {
  "id": 3,
  "icon": "card",
  "text": "Согласовываем докуметнально"
},]

const Advantages = () => {
  return (
    <section className={s.advantages}>
        <CustomTitle title="Преимущества" position="center" color="black"></CustomTitle>
        <div className={s.advantages_list}>{
          advantageCards.map(el => <Card key={el.id} text={el.text}></Card>)
        }</div>
    </section>
  )
}

export default Advantages