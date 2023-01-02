import React from 'react'
import HeroPage from './HeroPage';
import Navbar from "./Navbar";

const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div>
        <Navbar/>
        <HeroPage/>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage