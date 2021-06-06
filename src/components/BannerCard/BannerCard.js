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
                        To provide HooThinks members with real world consulting experience through projects that positively impact the University of Virginia and the Charlottesville community 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCard