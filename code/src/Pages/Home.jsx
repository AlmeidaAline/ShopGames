import React from 'react'
import GameSwiper from '../Components/Home_/GameSwiper'
import './Home.scss'
import GameCard from '../Components/GameCard'

const Home = ({ games, reference }) => {

  return (
    <section id='home' className='home active' ref={reference}>

      <div className='container-fluid'>

        <div className='row'>
          <GameSwiper games={games} />
        </div>

        <span className='row'>
          <h2 className='spanTitle'>jogos Em Promoção</h2>
        </span>

        <div className='row'>
          {games.slice(0, 4).map(game => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>

      </div>

    </section>
  )
}

export default Home
