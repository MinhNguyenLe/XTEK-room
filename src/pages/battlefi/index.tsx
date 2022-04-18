import Battlefi from 'views/Battlefi'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import bannerImage from '../../../public/images/battlefi/prediction_promotion.png'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper'

const Custom = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color: #3e497a;
  }
  .swiper-pagination-bullet-active {
    background-color: #ee4296 !important;
    filter: drop-shadow(0 0 5px #ee4296);
  }
  .swiper-pagination-bullet {
    background-color: #3e497a;
    opacity: 1 !important;
  }
`

const BattlefiPage = () => {
  const dummyData = [bannerImage]

  const Container = styled.div`
    margin: 20px;
    height: 280px;
    border-radius: 15px;
    width: 940px;
    flex: ;
  `
  const ImageContainer = styled(Image)``

  return (
    <Container>
      <Custom
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <ImageContainer src={dummyData[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer src={dummyData[0]} />
        </SwiperSlide>
      </Custom>
    </Container>
  )
}

export default BattlefiPage
