import React from "react"
import Fade from 'react-reveal/Fade'

import Layout from "../components/Layout/";
import HomeCard from "../components/HomeCard/HomeCard"
import BannerCard from "../components/BannerCard"

import ContactCard from "../components/ContactCard/ContactCard"
import NavBar from "../components/NavBar/NavBar"
import BusinessPlanSVG from '../assets/images/business_plan.svg';
import DataProcessingSVG from '../assets/images/data_processing.svg';
import PitchingSVG from '../assets/images/pitching.svg';
import Logo from '../assets/images/logo.png';
import MissionCard from "../components/MissionCard";
import ServiceCard from "../components/ServiceCard";

export default () => (
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
      </div>
      <ContactCard></ContactCard>
    </div>
  </Layout>
)