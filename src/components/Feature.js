import React from 'react'
import { FeatureCard, H3, P, FeatureBody } from './styled'

const Feature = ({ title, children, text, bg }) => {
  return (
    <FeatureCard>
      <H3>{title}</H3>
      <FeatureBody bg={bg}>
        <H3>{title}</H3>
        <P>{text}</P>
        {children}
      </FeatureBody>
    </FeatureCard>
  )
}

export default Feature
