import React from 'react'
import scrollToComponent from 'react-scroll-to-component';
import Link from "gatsby-link"

const NavBar = () => (
    <div className="nav-bar">
        <div className="nav-bar__container"  style={{ borderRight: ".5px solid white" }}>
        <a className="nav-bar__link" href="#contact"> Contact us</a>
        </div>
        <div className="nav-bar__container" style={{ borderRight: ".5px solid white" }}>
        <Link to="/services">
            Services
        </Link>
        </div>
        <div className="nav-bar__container">
            Portfolio
        </div>
    </div >
)

export default NavBar