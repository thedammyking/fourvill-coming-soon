import React from 'react'
import { PostHeader, ImageBox, P, H3, Wrapper } from './styled/blog'
import animan_pair from '../svg/trans-animal-pair.svg'

const Header = () => {
  return (
    <PostHeader>
      <div className="image">
        <ImageBox>
          <img src={animan_pair} alt="" />
        </ImageBox>
      </div>
      <div className="details">
        <Wrapper>
          <P className="author">Joe Ardooser</P>{' '}
          <P className="date">Dec 21, 2018</P>
        </Wrapper>
        <H3>Entrepreneur's guide to project management</H3>
        <P className="read-time">6 mins read</P>
      </div>
    </PostHeader>
  )
}

export default Header
