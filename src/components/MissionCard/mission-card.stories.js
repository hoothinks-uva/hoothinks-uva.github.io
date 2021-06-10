import React from 'react'
import MissionCard from './MissionCard'

import BusinessPlanSVG from '../../assets/images/business_plan.svg';
import DataProcessingSVG from '../../assets/images/data_processing.svg';
import PitchingSVG from '../../assets/images/pitching.svg';

export default {
  title: 'MissionCard',
  component: MissionCard
}

export const BlankMissionCard = () => <MissionCard/>
export const PictureRight = () => <MissionCard graphic={BusinessPlanSVG} />