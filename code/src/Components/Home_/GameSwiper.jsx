import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
import React, { useState } from 'react'
import GameSlide from './GameSlide'

const GameSwiper = ({ games }) => {

  const [active, setActive] = useState (false)

  const handleToggleVideo = () => {
    setActive (!active)
  }

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      navigation={true}
      loop= 'true'
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true
      }}
      Autoplay={{
        delay: 2500,
        disableOnInteration: false
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className='gameSwiper'
    >
      {games.map (game => (
        <SwiperSlide
          key={game._id}
        >
          <GameSlide
            active={active}
            toggleVideo={handleToggleVideo}
            game={game}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default GameSwiper
