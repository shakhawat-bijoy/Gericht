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
    <div className="bg-home-bg z-10 bg-repeat-x">
      <AboutBanner/>
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