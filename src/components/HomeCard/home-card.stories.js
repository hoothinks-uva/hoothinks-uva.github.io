import React from 'react'
import HomeCard from './HomeCard'

import BusinessPlanSVG from '../../assets/images/business_plan.svg';
import DataProcessingSVG from '../../assets/images/data_processing.svg';
import PitchingSVG from '../../assets/images/pitching.svg';

export default {
  title: 'HomeCard',
  component: HomeCard
}

export const BlankHomeCard = () => <HomeCard />
export const PictureRight = () => <HomeCard graphic={BusinessPlanSVG} />