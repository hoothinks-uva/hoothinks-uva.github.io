import React from 'react'
import BusinessPlanSVG from '../../assets/images/portfolio.svg';
import Link from "gatsby-link"

const PortfolioCard = () => {
    return (
        <div className={`portfolio-card portfolio-card__bg--1`}>
            <div className="portfolio-card__container">
                <div className="portfolio-card__content">
                    <div className="portfolio-card__title">
                        Portfolio
                    </div>
                    <div style={{ marginBottom: "5%" }}>
                        <p className="portfolio-card__text">
                            <text style={{ fontWeight: "bolder" }}>
                                Check out some of our work!
                            </text>
                        </p>
                    </div>
                    <div class="button-cta">
                        <Link to="/portfolio" class="cta">
                            <span>See more</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="portfolio-card__img-container">
                    <img src={BusinessPlanSVG} className="portfolio-card__img" />
                </div>

            </div>
        </div>
    )
}

export default PortfolioCard