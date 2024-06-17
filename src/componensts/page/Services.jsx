import React from 'react'
import AboutBanner from '../about/AboutBanner'
import Quality from '../services/Quality'
import BarMenu from '../BarMenu'
import Reservations from '../Reservations'
import HappyHours from '../services/HappyHours'
import Newsletter from '../Newsletter'

const Services = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat-x">
        <AboutBanner text="What We offer"/>
        <Quality/>
        <BarMenu/>
        <Reservations/>
        <HappyHours/>
        <Newsletter/>
    </div>
  )
}

export default Services