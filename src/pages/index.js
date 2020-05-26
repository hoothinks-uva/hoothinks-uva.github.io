import React from "react"
import Fade from 'react-reveal/Fade'

import Layout from "../components/Layout/";
import HomeCard from "../components/HomeCard/HomeCard"
import ContactCard from "../components/ContactCard/ContactCard"
import NavBar from "../components/NavBar/NavBar"
import BusinessPlanSVG from '../assets/images/business_plan.svg';
import DataProcessingSVG from '../assets/images/data_processing.svg';
import PitchingSVG from '../assets/images/pitching.svg';
import Logo from '../assets/images/logo.png';

export default () => (
  <Layout>
    <div className="home">
      <div className="home-card__banner-container">
        <img src={Logo} className="home-card__logo" />
      </div>
      <div className="home-card__navbar">
        <NavBar></NavBar>
      </div>
      <div className="container">
        <Fade duration={1500} delay={200}>
          <HomeCard title="Business Plan" graphic={BusinessPlanSVG} sectionId={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum nobis architecto quas ratione ad animi laudantium,
            neque rem consequuntur suscipit saepe natus impedit. Aut minima eos
            quibusdam consequatur quidem vitae suscipit modi magni tempora rem,
            voluptatibus quam dolorem incidunt aspernatur!
          </HomeCard>
        </Fade>
        <Fade duration={1500} delay={200}>
          <HomeCard title="Data Analytics" graphic={DataProcessingSVG} sectionId={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum nobis architecto quas ratione ad animi laudantium,
            neque rem consequuntur suscipit saepe natus impedit. Aut minima eos
            quibusdam consequatur quidem vitae suscipit modi magni tempora rem,
            voluptatibus quam dolorem incidunt aspernatur!
          </HomeCard>
        </Fade>
        <Fade duration={1500} delay={200}>
          <HomeCard title="Presentations" graphic={PitchingSVG} sectionId={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum nobis architecto quas ratione ad animi laudantium,
            neque rem consequuntur suscipit saepe natus impedit. Aut minima eos
            quibusdam consequatur quidem vitae suscipit modi magni tempora rem,
            voluptatibus quam dolorem incidunt aspernatur!
          </HomeCard>
        </Fade>
      </div>
      <ContactCard></ContactCard>
    </div>
  </Layout>
)