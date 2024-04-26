import React from 'react'

const GameSlide = ({ game, active, toggleVideo }) => {

  return (
    <div className='gameSlide'>

      <img src={game.img} alt='Imagem Do Jogo' />

      <div className={`video ${active ? 'active' : undefined}`}>
        <iframe
          width='1280'
          height='720'
          src={game.trailer}
          title={game.title}
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
          allowFullScreen
        />
      </div>

      <article className='content'>

        <h2>{game.title}</h2>
        <p>{game.description}</p>

        <div className='buttons'>

          <a href='#' className='orderBtn'>
            Compre Agora
          </a>

          <a
            href='#'
            className={`playBtn ${active ? 'active' : undefined}`}
            onClick={toggleVideo}
          >

            <span className='pause'>
              <i className='bi bi-pause-fill' />
            </span>

            <span className='play'>
              <i className='bi bi-play-fill' />
            </span>

          </a>

        </div>

      </article>

    </div>
  )
}

export default GameSlide
