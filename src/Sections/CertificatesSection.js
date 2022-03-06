import React from "react";
import { SectionTitle } from "../Components/SectionTitle";
import 'react-multi-carousel/lib/styles.css';
import CarouselImage from "../Components/Carousel";
import Fade from 'react-reveal/Fade';

export const CertificatesSection = () => {

  const certificateImage = [
    "certificate-1.png",
    "certificate-2.png",
    "certificate-3.png",
    "certificate-4.png",
    "certificate-5.png",
    "certificate-6.png",
  ];


  const addActive = () => {
    // Get 'middle-slide' class
    var element = document.querySelector('.react-multi-carousel-item--active.middle-slide');
    // If 'middle-slide' class exist remove it from all slides
    element && element.classList.remove("middle-slide");
    // Get Active Elements => return [Arr]
    var activeElements = document.getElementsByClassName('react-multi-carousel-item--active');
    // Calculat the middle value of the Active Slides 
    var middle = Math.round((activeElements.length - 1) / 2)
    //  Add Class "middle-slide" to Middle Active Element
    activeElements[middle].className += 'middle-slide';
  }


  return (
    <section id="our-certificates" className="certificates-section">
      <div className="container">
        <div className="row">
          <Fade bottom>
            <SectionTitle center>Our Certificates </SectionTitle>
          </Fade>
          <div className="my-5">
            <Fade >
              <CarouselImage data={certificateImage} afterChange={addActive} />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
