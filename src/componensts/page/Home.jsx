import React from 'react'
import Banner from '../Banner'
import About from '../AboutUs'
import Reservations from '../Reservations'
import BarMenu from '../BarMenu'
import Review from '../Review'
import SpecialMenu from '../SpecialMenu'
import ChefWord from '../ChefWord'
import Laurels from '../Laurels'
import UpdateBlogs from '../UpdateBlogs'
import Video from '../Video'
import Photogallery from '../Photogallery'
import Newsletter from '../Newsletter'


const Home = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat-x"> 
      {/* className="div bg-home-bg z-10  bg-repeat-y" */}
        <Banner />
        <About />
        <Reservations />
        <BarMenu/>
        <SpecialMenu/>
        <ChefWord/>
        <Review/>
        <Video/>
        <Laurels/>
        <UpdateBlogs/>
        <Photogallery/>
        <Newsletter/>
    </div>

  )
}

export default Home
