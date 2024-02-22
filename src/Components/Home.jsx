// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
       <div className = "home-bannerImage-container">   
       </div>
        <img src={BannerBackground} alt="" />
        <div className="home-text-section">
         <h1 className="primary-heading"> 
          Your Favourite Food Delivered Hot & Fresh
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;