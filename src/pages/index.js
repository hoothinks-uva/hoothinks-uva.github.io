import React from "react"
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
      {/* Banner here */}
      <div className="home-card__banner-container">
        <img src={Logo} className="home-card__logo" />
      </div>
      {/*
      <div className="home-card__navbar">
        <NavBar></NavBar>
      </div>
      */
      }
      <div className="container">
        <HomeCard title="Business Plan" graphic={BusinessPlanSVG} imagePosition="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum nobis architecto quas ratione ad animi laudantium,
          neque rem consequuntur suscipit saepe natus impedit. Aut minima eos
          quibusdam consequatur quidem vitae suscipit modi magni tempora rem,
          voluptatibus quam dolorem incidunt aspernatur!
        </HomeCard>
        <HomeCard title="Data Analytics" graphic={DataProcessingSVG} imagePosition="right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum nobis architecto quas ratione ad animi laudantium,
          neque rem consequuntur suscipit saepe natus impedit. Aut minima eos
          quibusdam consequatur quidem vitae suscipit modi magni tempora rem,
          voluptatibus quam dolorem incidunt aspernatur!
        </HomeCard>
        <HomeCard title="Presentations" graphic={PitchingSVG} imagePosition="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum nobis architecto quas ratione ad animi laudantium,
          neque rem consequuntur suscipit saepe natus impedit. Aut minima eos
          quibusdam consequatur quidem vitae suscipit modi magni tempora rem,
          voluptatibus quam dolorem incidunt aspernatur!
        </HomeCard>
      </div>
      <ContactCard></ContactCard>
    </div>
  </Layout>
)