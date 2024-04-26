import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import React, { useState } from 'react'
import './App.scss'
import Main from './Pages/Main'

export const AppContext = React.createContext()

const App = () => {

  const [library, setLibrary] = useState ([])
  const [cart, setCart] = useState ([])

  return (
    <>
      <AppContext.Provider value={{ library, setLibrary, cart, setCart }}>
        <Main />
      </AppContext.Provider>
    </>
  )
}

export default App
