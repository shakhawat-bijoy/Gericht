import React from 'react'
import AboutBanner from '../about/AboutBanner'
import ChefsDetails from '.././chef-team/ChefDetails'
import ChefAchive from '../chef-team/ChefAchive'
import Newsletter from '../Newsletter'

const Chef = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat-x">
        <AboutBanner text="Our Chefs"/>
        <ChefsDetails/>
        <ChefAchive/>
        <Newsletter/>
    </div>
  )
}

export default Chef


// this part is under Team page