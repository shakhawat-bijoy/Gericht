import React from 'react'
import AboutBanner from '../about/AboutBanner'
import Video from '../Video'
import Laurels from '../Laurels'
import Newsletter from '../Newsletter'
import Chefss from '../chef-team/Chefss'

const Team = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat-x">
        <AboutBanner text="Our Chefs"/>
        <Chefss/>
        <Video/>
        <Laurels/>
        <Newsletter/>
    </div>
  )
}

export default Team