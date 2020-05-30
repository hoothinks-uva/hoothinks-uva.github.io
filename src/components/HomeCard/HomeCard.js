import React from 'react'

const HomeCard = ({ graphic, imagePosition, children, title, sectionId }) => {
    return (
        <div className={`home-card home-card__bg--${sectionId}`}>
            <div className="home-card__container">
                <div className="home-card__img-container">
                    <img src={graphic} className="home-card__img" />
                </div>
                <div className="home-card__content">
                    <div className="home-card__title">{title}</div>
                    <div><p className="home-card__text">{children}</p></div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard