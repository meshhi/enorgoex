import React from 'react'
import s from './Header.module.scss'
import logo_white from '/logo_white.png'

const Header = () => {
  return (
    <header className={s.header}>
      <img 
      className={s.header_logo}
      src={logo_white}
      >

      </img>
      <nav className={s.header_nav}>
        <ul>
          <li></li>
        </ul>
      </nav>
      Header
      </header>
  )
}

export default Header