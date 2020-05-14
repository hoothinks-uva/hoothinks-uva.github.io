import React from 'react'

const HomeCard = ({ graphic, imagePosition }) => {
    const content = (
        <div className="home-card__content">
            <div className="home-card__title">Mission Statement</div>
            <p className="home-card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum nobis architecto quas ratione ad animi laudantium, 
                neque rem consequuntur suscipit saepe natus impedit. Aut minima eos 
                quibusdam consequatur quidem vitae suscipit modi magni tempora rem, 
                voluptatibus quam dolorem incidunt aspernatur!
            </p>
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