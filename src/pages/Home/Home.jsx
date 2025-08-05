import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
            <img src={hero_banner} alt="" className="banner-img"/>
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img'/>
                <p>
                  Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on an epic adventure to save the city from a powerful threat.
                </p>
                <div className="hero-btns">
                  <button className='btn'>
                    <img src={play_icon} alt="Play" />
                    Play
                  </button>
                  <button className='btn dark-btn'>
                    <img src={info_icon} alt="More Info" />
                    More Info   
                  </button>
                </div>
                <TitleCards />
            </div>
        </div>
        <div className="more-cards">
          <TitleCards title="Blockmaster Movies" category=""/>
          <TitleCards title="Only on NetFlix" category=""/>
          <TitleCards title="Upcoming" category=""/>
          <TitleCards title="Top pics for you" category=""/>
        </div>
        <Footer />
    </div>
  )
}

export default Home