import s from './Footer.module.scss';
import logo_white from '/logo_white.png'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.navigation}>
        <li>Главная</li>
        <li>Преимущества</li>
        <li>Услуги</li>
        <li>Проекты</li>
        <li>Отзывы</li>
      </ul>
      <div className={s.logo_container}>
        <img className={s.logo_container_image} src={logo_white} alt="" />
        <button className={s.logo_container_btn}>Оставить заявку</button>
      </div>
      <div className={s.contacts}>
        <div>+7 (888) 000-00-00</div>
        <div>info@mail.ru</div>
        <ul className={s.contact_logos}>
          <li className={s.contact_logos_item}>
            <Icon
              icon="el:youtube"
              className={s.icon}
            />
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