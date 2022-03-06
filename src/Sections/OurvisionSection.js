import React from 'react'
import { IconBox } from '../Components/IconBox'
import { SectionTitle } from '../Components/SectionTitle'
import { OurVisionData } from '../Util/data'
import Fade from 'react-reveal/Fade';


export const OurvisionSection = () => {
    return (
        <section id={"our-vision"} className="ourvisiosn-section py-5">
            <div className="container">
                <Fade bottom>
                    <SectionTitle center>Our Vision</SectionTitle>
                </Fade>
                <Fade bottom cascade>
                    <div className="row my-5" >
                        {OurVisionData.map((item, index) =>
                            <div key={index} className="col-lg-4 col-md-6 mb-3">
                                <IconBox data={item} />
                            </div>
                        )}
                    </div>
                </Fade>
            </div>
        </section>
    )
}
