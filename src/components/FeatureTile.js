import React from 'react'
import PropTypes from 'prop-types'
import {Feature, ImageBox, H3, P} from './styled'

const FeatureTile = ({ image: I, title, text }) => {
  return (
    <Feature>
      <ImageBox>
        <I />
      </ImageBox>
      <H3>{title}</H3>
      <P>{text}</P>
    </Feature>
  )
}

FeatureTile.propTypes = {
  image: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default FeatureTile
