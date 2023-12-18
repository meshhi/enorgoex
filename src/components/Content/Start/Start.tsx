import s from './Start.module.scss'
import { useState } from 'react'

const Start = () => {
  const [activities, setActivities] = useState<string[]>(["Строим кабельные линии", "Строим воздушные линии", "Строим трансформаторные подстанции", "Испытываем электрические подсети"]);
  return (
    <section className={s.start}>
        <header className={s.start_header}>
            <h1 className={s.start_header__main}>
               Решаем вопрос <br></br>с энергоснабжением
            </h1>
            <h3 className={s.start_header__additional}>От проекта до готового решения</h3>
        </header>
        <img className={s.start_image} src="start.svg" alt="" />
        <ul className={s.start_activities}>
          {activities.map(activity => <li key={activity} className={s.start_activities_item}>{activity}</li>)}
        </ul>
        <button className={s.start_button}>
            Оставить заявку
        </button>
      </section>
  )
}

export default Start