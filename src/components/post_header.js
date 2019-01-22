import React from 'react'
import { PostHeader, ImageBox, P, H3, Wrapper } from './styled/blog'
import animan_pair from '../svg/trans-animal-pair.svg'
import { Link } from 'gatsby'

const Header = props => {
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
        {props.excerpt && (
          <React.Fragment>
            <P className="excerpt">{props.excerpt}</P>
            <Link to="/post">Read More</Link>
          </React.Fragment>
        )}
      </div>
    </PostHeader>
  )
}

export default Header
