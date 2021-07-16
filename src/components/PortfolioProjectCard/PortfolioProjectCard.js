import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const PortfolioProjectCard = ({ graphic, title, description, impact, skills, link }) => {

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
    };

    let image;
    if (graphic.length == 1) {
        image = (
            <div className="portfolio-project-card__img-container">
                <img src={graphic[0]} className="portfolio-project-card__img" />
                {link &&
                    <a href={link} className="portfolio-project-card__link">{link}</a>
                }
            </div>
        )
    }

    else {
        image = (
            <div style={{
                width: "45%",
                height: "50%",
                position: "relative",
                color: "black"
            }}>
                <div style={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0

                }}>
                    <Slider {...settings}>
                        {graphic.map((pic, index) => {
                            return (
                                <div key={index}>
                                    <img src={pic} className="portfolio-project-card__img"></img>
                                </div>
                            );
                        })}
                    </Slider >
                </div>
                {link &&
                    <a href={link}>{link}</a>
                }
            </div >
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