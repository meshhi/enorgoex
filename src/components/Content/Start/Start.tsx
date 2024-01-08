import { useState } from 'react'
import { createPortal } from 'react-dom';
import s from './Start.module.scss'
import Modal from '../UIELements/Modal/Modal';
import SubmitRequestForm from '../Forms/SubmitRequestForm';

const Start = () => {
  const [activities, setActivities] = useState<string[]>(["Строим кабельные линии", "Строим воздушные линии", "Строим трансформаторные подстанции", "Испытываем электрические подсети"]);
  const [isOpen, setOpen] = useState<boolean>(false);
  const closeModalWithScrollReturn = () => {
    setOpen(false);
    document.body.style.overflow = 'unset';
  }
  
  return (
    <section className={s.start} id="start">
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
        <button 
        className={s.start_button}
        onClick={() => setOpen(prev => !prev)}
        >
            Оставить заявку
        </button>
        {createPortal(
        <Modal isOpen={isOpen} handleClose={closeModalWithScrollReturn}>
          <SubmitRequestForm handleFormClose={closeModalWithScrollReturn}></SubmitRequestForm>
        </Modal>,
        document.body
      )}
        
      </section>
  )
}

export default Start