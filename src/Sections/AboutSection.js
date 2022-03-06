import React from 'react'
import { SectionTitle } from '../Components/SectionTitle'
import Fade from 'react-reveal/Fade';

export const AboutSection = () => {
    return (
        <section id={"about"} className="about-section py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Fade right>
                            <SectionTitle>About Meta Goals</SectionTitle>
                        </Fade>
                        <Fade right>
                            <p className="text-description font-bold main-color pe-5">
                                MetaGols will feel like a mixture of online social experiences, and it will allow you to share your experiences and ideas with other people.</p>
                        </Fade>
                    </div>
                    <div className="col-md-6">
                        <Fade left>
                            <p>
                                It is the perfect evolution in a long line of social technologies, and it opens the door to a new development for our company.
                            </p>
                            <p>Creativity, and the strategic mindset of leadership in giving, and the vision to adapt to a changing world is exactly what set MetaGols apart from the rest. In nominal terms, the company's vision is a representation of where we want to be for a given period of time.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}
