import React from 'react'
import AboutBanner from '../about/AboutBanner'
import ChefInside from '../chef-team/ChefInside'
import ChefAchive from '../chef-team/ChefAchive'
import Newsletter from '../Newsletter'

const Chef = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat-x">
        <AboutBanner/>
        <ChefInside/>
        <ChefAchive/>
        <Newsletter/>
    </div>
  )
}

export default Chef