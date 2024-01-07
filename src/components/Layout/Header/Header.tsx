import { Icon } from '@iconify/react/dist/iconify.js'
import s from './Header.module.scss'
import logo_white from '/logo_white.png'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import NavMenu from '../../Content/UIELements/NavMenu/NavMenu'
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

const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 414px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <header className={s.header}>
      <img 
      className={s.header_logo}
      src={logo_white}
      ></img>
      <nav className={s.header_nav}>
        {
          isMobileOrTablet
          ? 
          <div className={s.icon_container}>
            <Icon
            icon="iconamoon:menu-burger-horizontal-fill"
            className={s.icon}
            />
          </div>
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