import React, {useContext} from 'react'
import './GameCard.scss'
import GameRating from './GameCard_/GameRating'
import { AppContext } from '../App'

const GameCard = ({ game }) => {

  const {library, setLibrary, cart, setCart} = useContext (AppContext)

  const handleAddToLibrary = game => {
    setLibrary ([...library, game])
  }

  const handleRemoveFromLibrary = game => {
    setLibrary (library.filter(item => item._id !== game._id))
  }

  const handleAddToCart = game => {
    if (cart.includes(game)) return
    setCart ([...cart, game])
  }

  return (
    <article className='col-xl-3 col-lg-4 col-md-6'>
      <div className='gameCard'>

        <img src={game.img} alt={game.title} className='img-fluid' />

        <a
          href='#'
          className={`like ${library.includes(game) ? 'active' : undefined}`}
          onClick={library.includes(game) ? () => handleRemoveFromLibrary(game) : () => handleAddToLibrary(game)}
        >
          <i className='bi bi-heart-fill' />
        </a>

        <div className='gameFeature'>

          <span className='gameType'>
            {game.level}
          </span>

          <GameRating rating={game.rating} />

        </div>

        <span className='gameTitle mt-4 mb-3'>
          {game.title}
        </span>

        <div className='gamePrice'>

          {game.discount !=0 && (
            <>
              <span className='discount'>
                <i>{game.discount * 100}%</i>
              </span>
              <span className='prevPrice'>
                ${game.price.toFixed(2)}
              </span>
            </>
          )}

          <span className='currentPrice'>
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>

        </div>

        <a href='#' className='addCart' onClick={() => handleAddToCart(game)}>
          <i className='bi bi-cart-plus-fill'/>
        </a>

      </div>
    </article>
  )
}

export default GameCard
