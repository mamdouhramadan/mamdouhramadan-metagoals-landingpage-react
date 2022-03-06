import React from 'react'
import { Navmenu } from '../Util/data'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

function Sidebar({ onClick, active }) {


    return (
        <>
            {
                active &&
                <div id="sidebar" className={`sidebar  ${active ? 'sidebar-active' : 'sidebar-closed'}`}>
                    <Fade opposite duration={500}>
                        <div className='sidebar-overlay'>
                            <div className='sidebar-content'>
                                <Rotate duration={500}>
                                    <button onClick={onClick} className='close-button btn btn-danger '>
                                        <ion-icon name="close-outline"></ion-icon>
                                    </button>
                                </Rotate>
                                <nav className='mobile-menu menu-nav'>
                                    <Fade bottom opposite duration={500} cascade >
                                        <ul className='list-unstyled'>
                                            {
                                                Navmenu.map((item, index) =>
                                                    <li key={index} className="list-item">
                                                        <a className='nav-link' href={item.link}>{item.title}</a>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </Fade>
                                </nav>
                            </div>
                        </div>
                    </Fade>
                </div>
            }
        </>

    )
}

export default Sidebar