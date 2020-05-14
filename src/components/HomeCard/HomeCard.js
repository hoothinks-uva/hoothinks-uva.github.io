import React from 'react'

const HomeCard = ({ graphic, imagePosition, children, title }) => {
    const content = (
        <div className="home-card__content">
            <div className="home-card__title">{title}</div>
            <p className="home-card__text">{children}</p>
        </div>
    )

    const image = (
        <div className="home-card__img-container">
            <img src={graphic} className="home-card__img"/>
        </div>
    )

    if(imagePosition === "left") {
        return (
            <div className="home-card">
                {content}
                {image}
            </div>
        )
    } else {
       return (
            <div className="home-card">
                {image}
                {content}
            </div>
        )
    }
}

export default HomeCard