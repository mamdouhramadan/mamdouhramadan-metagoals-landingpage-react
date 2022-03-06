import React from "react";
import { SectionTitle } from "../Components/SectionTitle";
import { LeadershipTeam } from "../Util/data";
import { TeamMember } from "../Components/TeamMember";
import Fade from 'react-reveal/Fade';

export const LeadershipSection = () => {
  return (
    <section className="leadership-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Fade bottom>
              <SectionTitle>Leadership</SectionTitle>
            </Fade>
            <Fade bottom>
              <p>
                Our forward-looking leadership team is made up of dedicated,
                focused, and experienced executives. Working with each other and
                with our employees worldwide, their knowledge and experience come
                together to make a difference for all our stakeholders
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Our leadership is comprised of dedicated, honest, and inspiring
                individuals. Together, they are responsible for leading METAGOLS
                to new heights.
              </p>
            </Fade>
            <div className="row mt-4">
              {LeadershipTeam.map((item, index) => {
                return (
                  <Fade right delay={index + Number('00')}>
                    <div className="col-md-6" key={index}>
                      <TeamMember
                        type="leadership"
                        name={item.name}
                        title={item.title}
                        img={require(`./../assets/images/avatar/${item.image}`)}
                      />
                    </div>
                  </Fade>
                );
              })}
            </div>
          </div>

          <div className="col-md-4">
            <Fade right>
              <div className="manager-card">

                <div className="manager-img">
                  <img
                    src={require("./../assets/images/avatar/ceo-avatar.png")}
                    alt=""
                  />
                </div>
                <Fade right delay={100}>
                  <div className="manager-content">
                    <h4 className="manager-name">Shekh. Feras Abu Hdaib</h4>
                    <h5 className="manager-title">CEO - Founder</h5>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section >
  );
};
