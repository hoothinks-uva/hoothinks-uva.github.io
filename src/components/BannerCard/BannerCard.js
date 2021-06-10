import React from 'react'
import NavBar from "../NavBar/NavBar"

const BannerCard = () => {
    return (
        <div className={"banner-card"}>
            <div className={"banner-container"}>
                <div className = {"banner-nav-text"}>
                    <div className={"banner-nav"}>
                        <NavBar></NavBar>
                    </div>
                    <div className = {"banner-text"}>
                        <div className={"banner-title"}>
                            Hoothinks
                        </div>
                        <div className={"banner-subtitle"}>
                        Using data driven solutions to address university challenges                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCard