import React from 'react'
import './Library.scss'
import GameCard from '../Components/GameCard'

const Library = ({ games, reference }) => {

  return (
    <section id='library' className='library' ref={reference}>
      <div className='container-fluid'>

        <div className='row mb-3'>
          <h1>Minha Biblioteca</h1>
        </div>

        <div className='row'>
          {games.length === 0 ? (
            <h2>Sua biblioteca está vazia.</h2>
          ) : (
            games.map(game => <GameCard key={game._id} game={game} />)
          )}
        </div>

      </div>
    </section>
  )
}

export default Library
