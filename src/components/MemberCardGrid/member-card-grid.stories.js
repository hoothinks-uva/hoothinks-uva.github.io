import React from 'react'
import MemberCardGrid from './MemberCardGrid'
import MemberCard from '../MemberCard/'

export default {
  title: 'MemberCardGrid',
  component: MemberCardGrid
}

export const OneByThree = () => (
  <MemberCardGrid>
    <MemberCard />
    <MemberCard />
    <MemberCard />
  </MemberCardGrid>
)