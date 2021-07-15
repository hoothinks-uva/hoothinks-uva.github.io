import React from 'react'
import Slider from "react-slick";

const PortfolioProjectCard = ({ graphic, title, description, impact, skills }) => {

    const impactList = impact.map((bullets) => {
        return <li>{bullets}</li>;
    });

    const skillsList = skills.map((skill) => {
        return <button class="portfolio-project-card__skill"> {skill} </button>
    });

    const content = (
        <div className="portfolio-project-card__content">
            <div className="portfolio-project-card__title">{title}</div>
            <p className="portfolio-project-card__text">{description}</p>
            <br></br>
            <p className="portfolio-project-card__text">
                Project Impact:
                <ul style={{ marginLeft: "1%", marginBottom: "3%" }}>
                    {impactList}
                </ul>
            </p>
            <p className="portfolio-project-card__text">
                Skills and techniques: {skillsList}
            </p>


        </div>
    )

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    if (graphic.length == 1) {
        let image = (
            <div className="portfolio-project-card__img-container">
                <img src={graphic[0]} className="portfolio-project-card__img" />
            </div>
        )
    }
    else {
        let image = () => (
            <Slider {...settings}>
                {graphic.map((pic) => {
                    return (
                        <div key={pic}>
                            <h3>{pic}</h3>
                        </div>
                    );
                })}
            </Slider>
        );
    }



    return (
        <div className="portfolio-project-card">
            {image}
            {content}
        </div>
    )

}

export default PortfolioProjectCard