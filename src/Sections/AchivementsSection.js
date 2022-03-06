import React from "react";
import { SectionTitle } from "../Components/SectionTitle";
import { achivements } from "../Util/data";
import AchivementsImage from './../assets/images/achivement.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export const AchivementsSection = () => {
  return (
    <section id="achievements" className="achivements-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Fade bottom>
              <SectionTitle>Achievements</SectionTitle>
            </Fade>

            <Slide bottom cascade>

              <ul className="achivements-list mt-5">
                {achivements.map((item, index) => {
                  return (
                    <li className="d-flex" key={index}>
                      <ion-icon name="checkmark-circle" size="large"></ion-icon>
                      <div className="list-content ms-3">
                        <h6 className="font-bold">{item.title}</h6>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Slide>
          </div>
          <div className="col-md-6">
            <Fade duration={2000}>
              <div className="image-container">
                <img className="mt-5 p-4" style={{ maxWidth: '100%' }} src={AchivementsImage} alt="" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
