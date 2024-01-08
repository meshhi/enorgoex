import s from './Footer.module.scss';
import logo_white from '/logo_white.png'
import { Icon } from '@iconify/react';
import { useMediaQuery } from 'react-responsive'
import NavMenu from '../UIELements/NavMenu/NavMenu';
import Modal from '../UIELements/Modal/Modal';
import SubmitRequestForm from '../Forms/SubmitRequestForm';
import { createPortal } from 'react-dom';
import { useState } from 'react';

const Footer = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 535px)' });
  const [isOpen, setOpen] = useState<boolean>(false);
  const closeModalWithScrollReturn = () => {
    setOpen(false);
    document.body.style.overflow = 'unset';
  }
  
  return (
    <footer className={s.footer} id="contacts">
      {/* <ul className={s.navigation}>
        <li>Главная</li>
        <li>Преимущества</li>
        <li>Услуги</li>
        <li>Проекты</li>
        <li>Отзывы</li>
      </ul> */}
      <NavMenu className={s.navigation} itemClassName={s.navigation_item}></NavMenu>
      {
        isMobileOrTablet
        ? false
        :      <div className={s.logo_container}>
        <img className={s.logo_container_image} src={logo_white} alt="" />
        <button 
        className={s.logo_container_btn}
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
      </div>

      }

      <div className={s.contacts}>
        <div>+7 (888) 000-00-00</div>
        <div>info@mail.ru</div>
        <ul className={s.contact_logos}>
          <li className={s.contact_logos_item}>
            <Icon
              icon="fa:youtube"
              className={`${s.icon} ${s.icon__yt}`}
            />
            <svg className={s.icon_svg} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 659 522">
              
              <path 
              width="100%" height="100%"
              fill="currentColor" d="M19.437 19.937H4.562a2.5 2.5 0 0 1-2.5-2.5V6.563a2.5 2.5 0 0 1 2.5-2.5h14.875a2.5 2.5 0 0 1 2.5 2.5v10.874a2.5 2.5 0 0 1-2.5 2.5M4.562 5.063a1.5 1.5 0 0 0-1.5 1.5v10.874a1.5 1.5 0 0 0 1.5 1.5h14.875a1.5 1.5 0 0 0 1.5-1.5V6.563a1.5 1.5 0 0 0-1.5-1.5Z"/>
              <path fill="currentColor" d="M14.568 11.149L10.6 8.432a1.032 1.032 0 0 0-1.614.851v5.434a1.032 1.032 0 0 0 1.614.851l3.972-2.717a1.031 1.031 0 0 0-.004-1.702"/></svg>
          </li>
          <li className={s.contact_logos_item}>
            <Icon
              icon="fa6-brands:vk"
              className={s.icon}
            />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer