import React from 'react'
import s from './Advantages.module.scss'
import CustomTitle from '../UIELements/CustomTitle/CustomTitle'
import Card from './Card/Card'

const advantageCards = [{
  "id": 1,
  "icon": "iconamoon:like-bold",
  "text": "Опыт в сфере более 25 лет"
}, {
  "id": 2,
  "icon": "ph:phone",
  "text": "Всегда на связи"
}, {
  "id": 3,
  "icon": "carbon:document",
  "text": "Согласовываем документально"
}, {
  "id": 4,
  "icon": "mingcute:lightning-line",
  "text": "Соблюдаем правила и технологии"
}, {
  "id": 5,
  "icon": "material-symbols-light:high-quality-outline-rounded",
  "text": "Качественно и в срок"
},]

const Advantages = () => {
  return (
    <section className={s.advantages} id="advantages">
        {/* <CustomTitle title="Преимущества" position="center" color="black"></CustomTitle> */}
        <div className={s.advantages_list}>{
          advantageCards.map(el => <Card key={el.id} text={el.text} icon={el.icon}></Card>)
        }</div>
    </section>
  )
}

export default Advantages