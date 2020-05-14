import React from "react"
import Layout from "../components/Layout/";
import HomeCard from "../components/HomeCard/HomeCard"

import BusinessPlanSVG from '../assets/images/business_plan.svg';
import DataProcessingSVG from '../assets/images/data_processing.svg';
import PitchingSVG from '../assets/images/pitching.svg';

export default () => (
  <Layout>
    <div className="home">
      {/* Banner here */}
      <div className="container">
        <HomeCard graphic={BusinessPlanSVG} imagePosition="left"/>
        <HomeCard graphic={DataProcessingSVG} imagePosition="right"/>
        <HomeCard graphic={PitchingSVG} imagePosition="left"/>
      </div>
    </div>
  </Layout>
) 