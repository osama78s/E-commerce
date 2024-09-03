import React from 'react'
import SwiperMainHome from './SwiperMainHome/SwiperMainHome'
import Parallex from './Parallex/Parallex'
import Offers from './Offers/Offers'
import ExploreProducts from './Offers/ExploreProducts/ExploreProducts'

const MainHome = () => {
  return (
    <>
      <SwiperMainHome/>
      <Parallex/>
      <Offers/>
      <ExploreProducts/>
    </>
  )
}

export default MainHome