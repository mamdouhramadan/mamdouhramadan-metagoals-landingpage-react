import React from "react";
import { TeamMember } from "../Components/TeamMember";
import { TeamMembers } from "../Util/data";
import { SectionTitle } from "./../Components/SectionTitle";
import Fade from 'react-reveal/Fade';

export const TeamSection = () => {
  return (
    <section id="our-team" className="team-section">
      <div className="container">
        <Fade bottom>
          <SectionTitle center>Our Team</SectionTitle>
        </Fade>
        <Fade bottom>
          <p className="desctiption text-center w-75 mx-auto">
            Our employees are our most important asset. Today, our team consists
            of over 50 professionals representing close to 10 nationalities across
            20 offices worldwide.
          </p>
        </Fade>
        <Fade bottom cascade>
          <div className="row justify-content-center">
            {TeamMembers.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-6" key={index}>
                  <TeamMember
                    name={item.name}
                    title={item.title.split(",").join("\n")}
                    img={require(`./../assets/images/avatar/${item.image}`)}
                  />
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
};
