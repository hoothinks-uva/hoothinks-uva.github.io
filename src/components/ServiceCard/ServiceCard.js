import React from 'react'
import BusinessPlanSVG from '../../assets/images/pitching.svg';
import Link from "gatsby-link"

const ServiceCard = () => {
    return (
        <div className={`service-card service-card__bg--1`}>
            <div className="mission-card__container">
                <div className="mission-card__img-container">
                    <img src={BusinessPlanSVG} className="mission-card__img" />
                </div>
                <div className="mission-card__content">
                    <div className="mission-card__title">
                        Our Services
                    </div>
                    <div style={{marginBottom:"5%"}}>
                        <p className="mission-card__text">
                            <text style={{fontWeight: "bolder"}}>
                            Consulting & Data Analysis: <br></br> 
                            </text> 
                            <ul style={{marginLeft:"3%", marginBottom: "3%"}}>
                                <li>
                                Comprehensive Problem Identification and Solution Recommendation through the HooThinks Data Collection Framework
                                </li>
                                <li>
                                Focused Problem Identification and Solution Recommendation
                                </li>
                            </ul>
                            <text style={{ fontWeight: "bolder"}}>
                            Web Development: <br></br> 
                            </text>                 
                            <li style={{marginLeft:"3%"}}>
                            Website Improvement 
                            </li>     
                            </p>
                    </div>
                    <div class="button-cta">
                    <Link to="/services" class="cta">
                        <span>See more</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ServiceCard