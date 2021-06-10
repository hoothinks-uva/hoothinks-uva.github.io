import React from 'react'
import ServiceCard from './ServiceCard'

import BusinessPlanSVG from '../../assets/images/business_plan.svg';
import DataProcessingSVG from '../../assets/images/data_processing.svg';
import PitchingSVG from '../../assets/images/pitching.svg';

export default {
  title: 'ServiceCard',
  component: ServiceCard
}

export const BlankServiceCard = () => <ServiceCard/>
export const PictureRight = () => <ServiceCard graphic={BusinessPlanSVG} />