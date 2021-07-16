import React, { PropTypes } from 'react';

import PortfolioProjectCard from "../components/PortfolioProjectCard";
import ContactCard from "../components/ContactCard"

import NavBar from "../components/NavBar/NavBar"
import Link from "gatsby-link"
import OlympicsClub from '../assets/images/olympics_club.png';
import SocialMedia1 from '../assets/images/social_media_1.png';
import SocialMedia2 from '../assets/images/social_media_2.png';

let projectDescriptions = ["The UVA Olympics club needed a marketable and professional looking website. The one they had previously was poorly designed, hard to update, and contained walls of hard to read text. Half of it was still boilerplate in French.", "The goal of the project was to quantify the opinion of a population. The problem that lies is it’s difficult to get an accurate picture of the feelings of a group and to develop a rating. The solution that was devised was to use sentiment analysis combined with Web scraping to look through sub reddit communities to get data so opinions could be gauged."]
let projectLink = ["https://uvaolympics.github.io", ""]
let projectImpacts = [["New website was more modular and component based, making updates to the website much faster", "React implementation made loading times (both initial and between pages) almost instantaneous", "Contained embedded links to use to stream virtual events", "New design was cleaner and more appealing to visitors"], ["Gave organizers a view of the amount of positive engagement that the community had with the service in question. "]]
let projectSkills = [["React", "Javascript", "JSX", "Gatsby", "SASS", "Agile"], ["Web Scraping", "Sentiment Analysis", "Spring checks with team"]]
let projectGraphics = [[OlympicsClub], [SocialMedia1, SocialMedia2]]
const portfolio = () => (
  <div>
    <div style={{ position: "fixed", width: "100%", zIndex: "100", marginBottom: "5%" }}>
      <div className={"serviceinfo-banner"} style={{ borderBottom: "1px solid #e8e8e8" }}>
        <Link to="/" className={"serviceinfo-banner"}>
          <img class="home-button"></img>
          <div className="serviceinfo-card__header">
            Hoothinks
           </div>
        </Link>
        <div className={"serviceinfo-nav"}>
          <NavBar color="rgb(28, 77, 105)"></NavBar>
        </div>
      </div>
    </div>
    <div style={{ marginBottom: "10%", paddingTop: "7%" }}>
      <PortfolioProjectCard link={projectLink[0]} graphic={projectGraphics[0]} title="Olympics Club" description={projectDescriptions[0]} impact={projectImpacts[0]} skills={projectSkills[0]}></PortfolioProjectCard>
      <PortfolioProjectCard link={projectLink[1]} graphic={projectGraphics[1]} title="Social Media Project" description={projectDescriptions[1]} impact={projectImpacts[1]} skills={projectSkills[1]}></PortfolioProjectCard>
    </div>
    <ContactCard></ContactCard>
  </div>
);

export default portfolio;