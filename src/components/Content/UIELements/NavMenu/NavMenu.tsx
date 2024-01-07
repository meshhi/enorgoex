import { Link } from 'react-router-dom'
import s from './NavMenu.module.scss'

const NavMenu = ({className, itemClassName}) => {
    return(        
    <ul className={className ? className : s.nav_menu}>
      <Link className={itemClassName ? itemClassName : s.nav_menu_item} to="#start">Главная</Link>
      <Link className={itemClassName ? itemClassName : s.nav_menu_item} to="#advantages">Преимущества</Link>
      <Link className={itemClassName ? itemClassName : s.nav_menu_item} to="#typesofjob">Услуги</Link>
      <Link className={itemClassName ? itemClassName : s.nav_menu_item} to="#projects">Проекты</Link>
      <Link className={itemClassName ? itemClassName : s.nav_menu_item} to="#about">О нас</Link>
      <Link className={itemClassName ? itemClassName : s.nav_menu_item} to="#contacts">Контакты</Link>
    </ul>)
  }

  export default NavMenu;