import React, { useContext } from 'react'
import { AppContext } from '../../App'

const ShopCartItem = ({ game, index }) => {

  const { cart, setCart } = useContext (AppContext)

  const handleRemoveFromCart = game => {
    setCart (cart.filter(item => item._id !== game._id))
  }

  return (
    <tr className='shopCartItem'>

      <th scope='row'>{index+1}</th>
      <td><img src={game.img} alt='' className='img-fluid' /></td>
      <td>{game.title}</td>
      <td>${game.price.toFixed(2)}</td>
      <td>{game.discount * 100}%</td>
      <td>${(game.price * (1-game.discount)).toFixed(2)}</td>
      <td>
        <a href='#' onClick={() => handleRemoveFromCart (game)}>
          <i className='bi bi-trash' />
        </a>
      </td>

    </tr>
  )
}

export default ShopCartItem
