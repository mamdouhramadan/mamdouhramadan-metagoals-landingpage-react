import Logo from "./../assets/images/logo-white.png";
import Fade from 'react-reveal/Fade';
import { Navmenu } from "../Util/data";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
    const [active, setactive] = useState(false)
    const handleActiveSidebar = () => {
        setactive(!active)
    }
    return (
        <>
            <Fade duration={1500}>
                <header className="app-header">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">

                            <div className="col-3 app-logo">
                                <a href="#!" alt="">
                                    <img src={Logo} className="logo-img" alt="" />
                                </a>
                            </div>
                            <nav className="col-9">
                                <button className="btn toggle-sidebar" onClick={handleActiveSidebar}>
                                    <ion-icon name="menu-outline"></ion-icon>
                                </button>
                                <ul className="list-navigation list-unstyled d-flex m-0  justify-content-end">
                                    {
                                        Navmenu.map((item, index) =>
                                            <li key={index} className="list-item">
                                                <a href={item.link}>{item.title}</a>
                                            </li>
                                        )
                                    }

                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </Fade>
            <Sidebar onClick={handleActiveSidebar} active={active} />
        </>
    );
};

export default Header;
