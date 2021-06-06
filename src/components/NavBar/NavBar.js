import React from 'react'
import scrollToComponent from 'react-scroll-to-component';

const NavBar = () => (
    <div className="nav-bar">
        <div className="nav-bar__container"  style={{ borderRight: ".5px solid white" }}>
            Contact Us
        </div>
        <div className="nav-bar__container" style={{ borderRight: ".5px solid white" }}>
            Our Team
        </div>
        <div className="nav-bar__container">
            Our Work
        </div>
    </div >
)

export default NavBar