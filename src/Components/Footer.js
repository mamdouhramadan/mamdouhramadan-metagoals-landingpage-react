import React from 'react'
import { FooterSection } from './../Util/data';
import Logo from "./../assets/images/logo-white.png";
import { SectionTitle } from './SectionTitle';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const Footer = () => {
    return (
        <footer id={'footer'} className="footer footer-serciton">
            <div className='main-footer py-5'>

                <div className='container'>
                    <Slide right cascade>
                        <div className='row mt-2'>
                            <div className='footer-widget col-md-4'>
                                <img className='footer-logo' src={(Logo)} alt="" />
                                <p className='footer-about'>
                                    {FooterSection.about}
                                </p>
                                <ul className='social-media'>
                                    {
                                        FooterSection.socialLink.map((item, index) => {
                                            return (
                                                <li key={index} className='list-item'>
                                                    <a className='link-item' href={item.link} alt="">
                                                        <ion-icon name={item.icon}></ion-icon>
                                                    </a>
                                                </li>)
                                        })
                                    }
                                </ul>
                            </div>

                            {FooterSection.columns.map((item, index) => {
                                return (
                                    <div key={index} className={`footer-widget ${index > 1 ? 'col-md-4' : 'col-md-2 col-6'}`}>
                                        {/* <h4 className='widget-title'>{item.title}</h4> */}
                                        <SectionTitle className={'widget-title'}>{item.title}</SectionTitle>
                                        <ul className='widget-list'>
                                            {
                                                item.list.map((item, index) => {
                                                    return (
                                                        <li key={index} className='list-item'>

                                                            <a className='link' href={item.link} alt={item.title}>
                                                                {item.icon && <ion-icon name={item.icon}></ion-icon>}
                                                                <span className={item.icon && 'mx-2'}> {item.title}</span>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )

                            })}
                        </div>
                    </Slide>
                </div>
            </div>

            <Fade duration={3000}>
                <div className='copyright'>
                    <p className='text-center m-0 p-3'>All Right Reserved To Metagols© {new Date().getFullYear()}.</p>
                </div>
            </Fade>

        </footer>
    )
}

export default Footer