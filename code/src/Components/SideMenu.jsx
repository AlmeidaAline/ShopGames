import React, { useState } from 'react'
import './SideMenu.scss'
import navListData from '../Data/NavListData'
import NavList from './SideMenu_/NavList'
import socialListData from '../Data/SocialListData'
import SocialList from './SideMenu_/SocialList'

const SideMenu = ({ active, sectionActive }) => {

  const [navData, setNavData] = useState (navListData)

  const handleNavOnClick = (id, target) => {
    const newNavData = navData.map(nav => {
      nav.active = false
      if (nav._id === id) nav.active = true
      return nav
    })
    setNavData(newNavData)
    sectionActive(target)
  }

  return (
    <article className={`sideMenu ${active ? 'active' : undefined}`}>

      <a href='#' className='logo'>
        <i className='bi bi-controller' />
        <span className='brand'>Play</span>
      </a>

      <ul className='nav'>
        {navData.map (item => (
          <NavList
            key={item._id}
            item={item}
            navOnClick={handleNavOnClick}
          />
        ))}
      </ul>

      <ul className='social'>
        {socialListData.map(item => (
          <SocialList
            key={item._id}
            item={item}
          />
        ))}
      </ul>

    </article>
  )
}

export default SideMenu
