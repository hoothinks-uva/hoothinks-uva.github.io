import React from 'react'
import Link from "gatsby-link"

const NavBar = ({ color }) => {

    const styleBorder = {
        borderRight: '.5px solid ' + color,
    };

    const styleFont = {
        color: color,
    }
    return (
        <div className="nav-bar">
            <div className="nav-bar__container" style={styleBorder}>
                <a className="nav-bar__link" href="#contact" style={styleFont}> Contact us</a>
            </div>
            <div className="nav-bar__container" style={styleBorder}>
                <Link to="/services" style={styleFont}>
                    Services
                </Link>
            </div>
            <div className="nav-bar__container" style={styleFont}>
                <Link to="/portfolio" style={styleFont}>
                    Portfolio
                </Link>
            </div>
        </div >
    )
}

export default NavBar