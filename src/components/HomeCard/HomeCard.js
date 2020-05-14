import React from 'react'

const HomeCard = ({ graphic }) => (
    <div className="home-card">
        <div className="home-card__img-container">
            <img src={graphic} alt="" className="home-card__img" />
        </div>
        <div className="home-card__content">
            <div className="home-card__title">
                Mission Statement
            </div>
            <p className="home-card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nobis architecto quas ratione ad animi laudantium, neque rem consequuntur suscipit saepe natus impedit. Aut minima eos quibusdam consequatur quidem vitae suscipit modi magni tempora rem, voluptatibus quam dolorem incidunt aspernatur!
            </p>
        </div>
    </div>
)

export default HomeCard