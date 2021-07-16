import React from 'react'
import NavBar from "../NavBar/NavBar"
import Layout from "../Layout";
import Link from "gatsby-link"
import BusinessPlanSVG from '../../assets/images/business_plan.svg';
import ContactCard from "../ContactCard"


const ServiceInfoCard = () => {
    return (
        <Layout>
            <div className={"serviceinfo-card serviceinfo-card__bg--1"}>
                <div style={{ position: "fixed", width: "100%", zIndex: "100", marginBottom: "5%" }}>
                    <div className={"serviceinfo-banner"} style={{ borderBottom: "1px solid #e8e8e8" }}>
                        <div className={"serviceinfo-banner"}>
                            <Link to="/" class="home-button"></Link>
                            <div className="serviceinfo-card__header">
                                Our Services
                        </div>
                        </div>
                        <div className={"serviceinfo-nav"}>
                            <NavBar color="rgb(28, 77, 105)"></NavBar>
                        </div>
                    </div>
                </div>

                <div className="serviceinfo-container" style={{ paddingTop: "10%" }}>
                    <div className="serviceinfo-card__content">
                        <div className="serviceinfo-card__title">
                            1. The HooThinks Data Collection Framework
                        </div>

                        <div className="serviceinfo-card__innercontent">
                            <div className="serviceinfo-card__listcontent">
                                <div className="serviceinfo-card__listtitle">
                                    Hoos Joining
                                </div>
                                <p className="mission-card__text">
                                    <ul>
                                        <li>
                                            Data collection: Focuses on organization member composition (major, year, gender, specialized skills, etc)
                                        </li>
                                        <li>
                                            Analysis: Identifies membership gaps in relation to client organization needs and goals (lack of a diverse member base, lack of certain specialized skills, etc)
                                        </li>
                                        <li>
                                            Recommendations: Suggests a recruiting strategy to close membership gaps in order to meet client organization needs and goals
                                        </li>
                                    </ul>
                                </p>


                            </div>

                            <div className="serviceinfo-card__listcontent">
                                <div className="serviceinfo-card__listtitle">
                                    Hoos Active
                                </div>
                                <p className="mission-card__text">
                                    <ul>
                                        <li>
                                            Data collection: Focuses on member activity and engagement ( # of active members vs. inactive members, motivations for being active/inactive, activity on organization channels of communication, activity on client organization’s social media accounts, etc)
                                        </li>
                                        <li>
                                            Analysis: Identifies patterns in member motivations for being active/inactive, potential causes of lower social media engagement, and possible causes of ineffective communication with organization members
                                        </li>
                                        <li>
                                            Recommendations: Suggests method for increasing member  and social media engagement based on analysis
                                        </li>
                                    </ul>
                                </p>
                            </div>

                            <div className="serviceinfo-card__listcontent">
                                <div className="serviceinfo-card__listtitle">
                                    Hoos Performing
                                </div>
                                <p className="mission-card__text">
                                    <ul>
                                        <li>
                                            Data collection: Focuses on the performance of 1) The organization as a whole, 2) the leadership team, and (if applicable) 3) organization sub-teams. Collects member and leadership team sentiment data, leadership team performance data, team performance data, and overall organization performance data.
                                        </li>
                                        <li>
                                            Analysis: Identifies performance gaps by comparing collected performance data against existing organization KPIs, in addition to identifying potential causes for these performance gaps.
                                        </li>
                                        <li>
                                            Recommendations: Suggests performance improvement strategies for the leadership team, organization sub-teams, and the organization as a whole. Also suggests additional KPIs that could be used to more accurately measure the performance of the organization.
                                        </li>
                                    </ul>
                                </p>
                            </div>

                        </div>

                        <div className="serviceinfo-card__title">
                            2. Focused Problem Identification & Solution Recommendation

                    </div>
                        <div className="serviceinfo-card__listcontent">
                            <div className="serviceinfo-card__listtitle">
                                Steps
                            </div>
                            <p className="mission-card__text">
                                <ul>
                                    <li>
                                        Client organization identifies a problem
                                    </li>
                                    <li>
                                        HooThinks project team conducts data collection (empathy interviews, member and leadership team surveys, social media activity data, etc)
                                    </li>
                                    <li>
                                        HooThinks project team analyzes collected data and identifies patterns and potential causes of specified problem(s)
                                    </li>
                                    <li>
                                        HooThinks project team makes process and strategy recommendations to organization leadership team, and identifies next steps
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="serviceinfo-card__title">
                            3. Web Development
                        </div>
                        <div className="serviceinfo-card__listcontent">
                            <div className="serviceinfo-card__listtitle">
                                Steps
                            </div>
                            <p className="mission-card__text">
                                <ul>
                                    <li>
                                        Client organization presents website and provides insights regarding current challenges
                                    </li>
                                    <li>
                                        HooThinks project team analyzes website and identifies potential causes of problem(s)
                                    </li>
                                    <li>
                                        HooThinks project team provides website improvement options, including comprehensive website redesign
                                    </li>
                                    <li>
                                        Client organization selects desired website improvement option
                                    </li>
                                    <li>
                                        HooThinks team gathers requirements, designs website, and implements design in iterative “sprints” (client organization input is integral to the design process)
                                    </li>
                                    <li>
                                        HooThinks project team presents website improvements and identifies potential next steps
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <ContactCard></ContactCard>
            </div>
        </Layout>
    )
}

export default ServiceInfoCard