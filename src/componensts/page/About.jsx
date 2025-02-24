import React from 'react'
import AboutBanner from '../about/AboutBanner'
import AboutHistory from '../about/AboutHistory'
import AboutVideo from '../about/AboutVideo'
import ChefWord from '../ChefWord'
import Review from '../Review'
import Photogallery from '../Photogallery'
import Newsletter from '../Newsletter'

const About = () => {
  return (
    <div className="bg-[#070707] bg-home-bg">
      <AboutBanner text="Welcome to Gerícht"/>
      <AboutHistory/>
      <AboutVideo/>
      <ChefWord/>
      <Review/>
      <Photogallery/>
      <Newsletter/>
    </div>
  )
}

export default About