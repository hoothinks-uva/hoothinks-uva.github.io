import React from 'react'

const HomeCard = () => (
    <div className="home-card">
        <div className="home-card__header">
            <div className="home-card__title">
                Mission Statement
            </div>
            <div className="home-card__img-container">
                <img src="https://source.unsplash.com/random?300x300?search=beach" alt="" className="home-card__img" />
            </div>
        </div>
        <div className="member-card__content">
            <h1 className="member-card__title">Visit Hawaii</h1>
            <p className="member-card__text">Looking for a vacation? Hawaii is the perfect place to kick back, relax, and enjoy the summer sun.</p>
            <a href="#" className="member-card__button">Find a hotel</a>
            <a href="#" className="member-card__button card__button--outline">Price Comparisons</a>
        </div>
    </div>
)

export default HomeCard