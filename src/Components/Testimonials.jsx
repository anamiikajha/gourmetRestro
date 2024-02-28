import React from "react";
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Testimonials = () => {
  return (
  <div className="work-section-wrapper" >
   <div className="work-section-top" >
    <p className="primary-subheading" >Testimonials</p>
    <h1 className="primary-heading" >
      What They Are Saying
    </h1>
    <p className="primary-text" >
     What are regular customers have to say.
    </p>
  </div>
  <div className="testimonial-section-bottom">
    <img src={ProfilePic} alt="" />
  <p>
    Food from here is so delicious and tasty.
  </p>
  <div className="testimonials-stars-container">
  <AiFillStar/>
  <AiFillStar/>
  <AiFillStar/>
  <AiFillStar/>
  <AiFillStar/>
  </div>
  <h2>Bell Nelson</h2>
  </div>
  </div>
  );
};

export default Testimonials