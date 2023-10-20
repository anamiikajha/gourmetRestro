// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png"

const Home = () => {
    return (
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
       <div className = "home-bannerImage-container">   
        {/* <img src={bannerbackground} alt="" /> */}
        </div>
      </div>
    </div>
    );
};

export default Home;
