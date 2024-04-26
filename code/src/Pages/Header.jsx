import React, { useContext } from 'react'
import './Header.scss'
import { AppContext } from '../App'
import userImg from '../Imagem/user.jpg'

const Header = ({ toggleActive }) => {

  const { library, cart } = useContext (AppContext)

  return (
    <header>

      <a href='#' className='menu' onClick={toggleActive}>
        <i className='bi bi-sliders' />
      </a>

      <article className='userItems'>

        <a href='#' className='icon'>
          <i className='bi bi-heart-fill'/>
          <span className='like'>{library.length}</span>
        </a>

        <a href='#' className='icon'>
          <i className='bi bi-cart-fill'/>
          <span className='cart'>{cart.length}</span>
        </a>

        <div className='avatar'>

          <a href=''>
            <img src={userImg} alt='Usuário' />
          </a>

          <div className='user'>
            <span>Usuário</span>
            <a href='#'>Ver Perfil</a>
          </div>

        </div>

      </article>

    </header>
  )
}

export default Header
