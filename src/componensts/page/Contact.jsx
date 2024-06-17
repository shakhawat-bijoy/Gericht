import React from 'react'
import AboutBanner from '../about/AboutBanner'
import Map from '../contacts/Map'
import Subscribe from '../contacts/Subscribe'
import Newsletter from '../Newsletter'

const Contact = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat-x">
        <AboutBanner text="Contact Us"/>
        <Map/>
        <Subscribe/>
        <Newsletter/>
    </div>
  )
}

export default Contact