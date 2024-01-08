import { Link } from 'react-router-dom'
import s from './NavMenu.module.scss'

const NavMenu = ({className, itemClassName, itemCallback}) => {
  const anchors = [
    ["#start", "Главная"],
    ["#advantages", "Преимущества"],
    ["#typesofjob", "Услуги"],
    ["#projects", "Проекты"],
    ["#about", "О нас"],
    ["#contacts", "Контакты"],
  ]
    return(        
    <ul className={className ? className : s.nav_menu}>
      {
        anchors.map(el => {
          return(<Link 
            key={el[0]}
            className={itemClassName ? itemClassName : s.nav_menu_item} 
            to={el[0]}
            onClick={itemCallback ? itemCallback : () => {}}
            >{el[1]}</Link>)
        })
      }
    </ul>)
  }

  export default NavMenu;