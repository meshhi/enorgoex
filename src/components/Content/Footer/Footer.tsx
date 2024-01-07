import s from './Footer.module.scss';
import logo_white from '/logo_white.png'
import { Icon } from '@iconify/react';
import { useMediaQuery } from 'react-responsive'
import NavMenu from '../UIELements/NavMenu/NavMenu';

const Footer = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 535px)' });

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
        <button className={s.logo_container_btn}>Оставить заявку</button>
      </div>

      }

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