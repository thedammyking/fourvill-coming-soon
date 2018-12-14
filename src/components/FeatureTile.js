import React from 'react'
import PropTypes from 'prop-types'
import { Feature, ImageBox, H3, P } from './styled'
import TileOne from '../svg/tile-1.svg'

const FeatureTile = ({ image: I, title, text, color }) => {
  console.log(TileOne)
  return (
    <Feature color={color}>
      <ImageBox>
        <I/>
      </ImageBox>
      <H3>{title}</H3>
      <P>{text}</P>
    </Feature>
  )
}

FeatureTile.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default FeatureTile
