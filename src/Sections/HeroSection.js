import React from "react";
import { Button } from "../Components/Button";
import Fade from 'react-reveal/Fade';

import BgImage from "./../assets/images/hero-bg.png";
import Mockup from "./../assets/images/mockup-1.png";

export const HeroSection = () => {
  return (
    <div
    id={"home"}
      className="hero-section"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="container">
        <div className="hero-container text-center ">
          <Fade bottom>
            <h3 className="hero-title"> Meet in Style Like Never Before</h3>
          </Fade>
          <Fade bottom>
            <p className="text-white">
              We work to connect people all over the world. Recruiting high-level
              people helps us create better experiences for everyone. We build
              technologies that help people connect with friends and family, find
              communities, and grow businesses.
            </p>
          </Fade>
          <Fade top>

            <Button className={'mx-auto'} color="light">We are lunching Soon, Get Notify</Button>
          </Fade>
          <Fade bottom>
            <img className="mockup-img" src={Mockup} alt="" />
          </Fade>
        </div>
      </div>
    </div>
  );
};
