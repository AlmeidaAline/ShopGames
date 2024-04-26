import React, { useContext, useEffect, useRef, useState } from 'react'
import Api from '/api/gamesData.json?url'
import { AppContext } from '../App'
import './Main.scss'
import SideMenu from '../Components/SideMenu'
import Header from './Header'
import Home from './Home'
import Categories from './Categories'
import Library from './Library'
import Cart from './Cart'

const Main = () => {

  const {library, cart} = useContext (AppContext)
  const [active, setActive] = useState (false)
  const [games, setGames] = useState ([])

  const homeRef = useRef ()
  const categoriesRef = useRef ()
  const libraryRef = useRef ()
  const cartRef = useRef ()

  const sections = [
    {name: 'home', ref: homeRef, active: true},
    {name: 'categories', ref: categoriesRef, active: false},
    {name: 'library', ref: libraryRef, active: false},
    {name: 'cart', ref: cartRef, active: false},
  ]

  const handleToggleActive = () => {
    setActive (!active)
  }

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active')
      if(section.ref.current.id === target) {
        section.ref.current.classList.add('active')
      }
      return section
    })
  }

  const fetchData = () => {
    fetch (Api)
    .then (res => res.json ())
    .then (data => {
      setGames (data)
    })
    .catch (e => console.log (e.message))
  }

  useEffect (() => {
    fetchData ()
  }, [])

  return (
    <main>

      <SideMenu active={active} sectionActive={handleSectionActive} />

      <div className={`banner ${active ? 'active' : undefined}`}>

        <Header toggleActive={handleToggleActive} />

        <article className='container-fliud'>
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef} />
              <Categories games={games} reference={categoriesRef} />
              <Library games={library} reference={libraryRef} />
              <Cart games={cart} reference={cartRef} />
            </>
          )}
        </article>

      </div>

    </main>
  )
}

export default Main
