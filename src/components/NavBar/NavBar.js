import React from 'react'
import scrollToComponent from 'react-scroll-to-component';

const NavBar = () => (
    <div className="nav-bar">
        <div className="nav-bar__container"  style={{ borderRight: ".5px solid white" }}>
            Contact Us
        </div>
        <div className="nav-bar__container" style={{ borderRight: ".5px solid white" }}>
            Services
        </div>
        <div className="nav-bar__container">
            Portfolio
        </div>
    </div >
)

export default NavBar