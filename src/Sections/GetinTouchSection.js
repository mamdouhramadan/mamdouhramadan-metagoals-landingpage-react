import React from "react";
import { Button } from "../Components/Button";
import GoogleMapSection from "../Components/GoogleMap";
import { InputField } from "../Components/InputField";
import { SectionTitle } from "../Components/SectionTitle";
import Fade from 'react-reveal/Fade';

export const GetinTouchSection = () => {
  return (
    <section id="contact" className="getin-touch-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pe-5">
            <Fade bottom>
              <SectionTitle>Get in touch</SectionTitle>
            </Fade>

            <Fade bottom>
              <p>Sign up to be the first to know when we launch</p>
            </Fade>

            <Fade bottom>
              <InputField id="FullnameField" label="Full Name" type="text" />
            </Fade>
            <Fade bottom>
              <InputField id="EmailField" label="Email Address" type="email" />
            </Fade>
            <Fade bottom>
              <Button rounded className="btn btn-lg mt-4" icon={'send'}>Notify</Button>
            </Fade>
          </div>
          <div className="col-md-6 ps-5">
            <GoogleMapSection />
          </div>
        </div>
      </div>
    </section>
  );
};
