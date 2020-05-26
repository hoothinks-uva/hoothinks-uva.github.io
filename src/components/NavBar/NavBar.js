import React from 'react'
import scrollToComponent from 'react-scroll-to-component';

const NavBar = () => (
    <div className="nav-bar">
        <div className="nav-bar__container" style={{ backgroundImage: "linear-gradient(to right,#103247,#1C577F)" }}>
            Contact Us
        </div>
        <div className="nav-bar__container" style={{ backgroundImage: "linear-gradient(to right,#1C577F,#5190BA)" }}>
            Our Team
        </div>
        <div className="nav-bar__container" style={{ backgroundImage: "linear-gradient(to right,#5190BA,#9ac7e6)" }}>
            Our Work
        </div>
    </div >
)

export default NavBar