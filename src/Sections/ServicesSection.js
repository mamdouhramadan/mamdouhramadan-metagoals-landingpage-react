import React from "react";
import { IconBox } from "../Components/IconBox";
import { SectionTitle } from "../Components/SectionTitle";
import { CommersialServices, IndividualServices } from "../Util/data";
import Mockup from "./../assets/images/mockup-2.png";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export const ServicesSection = () => {
  return (
    <section id="our-service" className="service-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Slide left>
              <div className="mockup-img pe-5">
                <img src={Mockup} alt=" " />
              </div>
            </Slide>
          </div>
          <div className="col-lg-6 col-md-12">
            <Fade bottom>
              <SectionTitle>Our services</SectionTitle>
            </Fade>
            <Fade bottom>
              <p className="text-decoration">
                The advantage of MetaGols is that it provides all known and
                unknown services to users, in easy and convenient ways to use.
                MetaGols aims to turn social networks into a means to gain
                benefits in all respects.
              </p>
            </Fade>
            <Fade bottom>
              <h6 className="font-bold"> Individual Services</h6>
            </Fade>
            <Fade cascade bottom>
              <ul className="sevices-list my-3 row">
                {IndividualServices.map((item, index) => {
                  return (
                    <li className="list-item col-6" key={index}>
                      <IconBox data={item} />
                    </li>
                  );
                })}
              </ul>
            </Fade>
            <Fade bottom>
              <h6 className="font-bold"> Commercial Services</h6>
            </Fade>
            <Fade cascade bottom>
              <ul className="sevices-list my-3 row">
                {CommersialServices.map((item, index) => {
                  return (
                    <li className="list-item col-6" key={index}>
                      <IconBox data={item} />
                    </li>
                  );
                })}
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
