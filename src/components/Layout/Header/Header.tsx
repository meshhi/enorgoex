import { Icon } from '@iconify/react/dist/iconify.js'
import s from './Header.module.scss'
import logo_white from '/logo_white.png'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import NavMenu from '../../Content/UIELements/NavMenu/NavMenu'
import { useState } from "react";
// const HeaderMenu = () => {
//   return(        
//   <ul className={s.header_menu}>
//     <Link className={s.header_menu_item} to="#start">Главная</Link>
//     <Link className={s.header_menu_item} to="#advantages">Преимущества</Link>
//     <Link className={s.header_menu_item} to="#typesofjob">Услуги</Link>
//     <Link className={s.header_menu_item} to="#projects">Проекты</Link>
//     <Link className={s.header_menu_item} to="#about">О нас</Link>
//     <Link className={s.header_menu_item} to="#contacts">Контакты</Link>
//   </ul>)
// }

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return(  
    <div className={s.burger_container}>
      <div 
      className={s.icon_container}
      onClick={() => {
        setOpen(prev => !prev);
      }}
      >
        {
        isOpen
          ?
          <Icon
          icon="iconamoon:menu-burger-horizontal-fill"
          className={s.icon}
          />
          : 
          <Icon
          icon="iconamoon:menu-burger-vertical-fill"
          className={s.icon}
          />
        }
      </div>
      <div className={s.burger_menu}>
      {
        isOpen
        ? <NavMenu className={s.burger_nav_menu} itemClassName={s.burger_nav_menu_item} itemCallback={() => setOpen(false)}></NavMenu>
        : false
      }
      </div>
    </div>
  )
}

const Header = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <header className={s.header}>
      <img 
      className={s.header_logo}
      src={logo_white}
      ></img>
      <nav className={s.header_nav}>
        {
          isMobileOrTablet
          ? <BurgerMenu></BurgerMenu>
          : <NavMenu></NavMenu>
        }
      </nav>
      {
        isMobileOrTablet
        ? false
        : <div className={s.header_phone}>
        +7 (888) 000-00-00
      </div>
      }
      </header>
  )
}

export default Header