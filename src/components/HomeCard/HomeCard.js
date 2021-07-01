import React from 'react'
import Fade from 'react-reveal/Fade'

import Layout from "../Layout";
import BannerCard from "../BannerCard"

import ContactCard from "../ContactCard"
import MissionCard from "../MissionCard";
import ServiceCard from "../ServiceCard";
import PortfolioCard from "../PortfolioCard";

const HomeCard = () => {
  return (
    <Layout>
      <div className="home">
        <BannerCard></BannerCard>
        <div className="container">
          <Fade duration={1500} delay={200}>
            <MissionCard></MissionCard>
          </Fade>
          <Fade duration={1500} delay={200}>
            <ServiceCard></ServiceCard>
          </Fade>
          <Fade duration={1500} delay={200}>
            <PortfolioCard></PortfolioCard>
          </Fade>
        </div>
        <ContactCard></ContactCard>
      </div>
    </Layout>
  )
}

export default HomeCard