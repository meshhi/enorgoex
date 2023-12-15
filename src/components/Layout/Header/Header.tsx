import s from './Header.module.scss'
import logo_white from '/logo_white.png'

const Header = () => {
  return (
    <header className={s.header}>
      <img 
      className={s.header_logo}
      src={logo_white}
      ></img>
      <nav className={s.header_nav}>
        <ul className={s.header_menu}>
          <li className={s.header_menu_item}>Главная</li>
          <li className={s.header_menu_item}>Преимущества</li>
          <li className={s.header_menu_item}>Услуги</li>
          <li className={s.header_menu_item}>Проекты</li>
          <li className={s.header_menu_item}>О нас</li>
          <li className={s.header_menu_item}>Контакты</li>
        </ul>
      </nav>
      <div className={s.header_phone}>
        +7 (888) 000-00-00
      </div>
      </header>
  )
}

export default Header