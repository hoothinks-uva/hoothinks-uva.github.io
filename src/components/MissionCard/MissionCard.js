import React from 'react'
import BusinessPlanSVG from '../../assets/images/business_plan.svg';

const MissionCard = () => {
    return (
        <div className={`mission-card mission-card__bg--1`}>
            <div className="mission-card__container">
                <div className="mission-card__content">
                    <div className="mission-card__title">
                        Mission Statement
                    </div>
                    <div style={{marginBottom:"5%"}}>
                        <p className="mission-card__text">
                        To provide HooThinks members with real world consulting experience through projects that positively impact the University of Virginia and the Charlottesville community 
                        </p>
                    </div>
                                    <div className="mission-card__img-container">
                    <img src={BusinessPlanSVG} className="mission-card__img" />
                </div>
                </div>
                <div className="mission-card__content">
                    <div className="mission-card__title">
                        Goals
                    </div>
                    <div>
                        <p className="mission-card__text">
                        <ul>
                            <li>
                            <text style={{marginTop:"1%"}}>
                            Real World Consulting Skills: <br></br> HooThinks aims to prepare its members for consulting and technology roles after college by helping them learn and apply data analysis, consulting, and web development skills to real world projects. 
                            </text> 
                            </li>
                            <li style={{marginTop:"3%"}}>
                            <text style={{marginTop:"1%"}}>
                            Impactful Projects and Partnerships: <br></br> HooThinks prioritizes the formation of meaningful and lasting partnerships with other organizations around Grounds and within the Charlottesville community. Our purpose is twofold: By helping other organizations doing good work in the surrounding community, we are 1) supporting our fellow students and community members to generate positive change in the real world, and 2) providing our members with cutting edge data analysis and consulting skills that are strengthened through actual application. 
                            </text> 
                            </li>
                        </ul>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionCard