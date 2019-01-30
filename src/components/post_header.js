import React from 'react'
import { PostHeader, ImageBox, P, H3, Wrapper } from './styled/blog'
import animan_pair from '../svg/trans-animal-pair.svg'
import { Link } from 'gatsby'

const Header = ({author, date, excerpt, readTime, title, slug}) => {
  return (
    <PostHeader>
      <div className="image">
        <ImageBox>
          <img src={animan_pair} alt="" />
        </ImageBox>
      </div>
      <div className="details">
        <Wrapper>
          <P className="author">{author}</P>{' '}
          <P className="date">{date}</P>
        </Wrapper>
        <H3 dangerouslySetInnerHTML={{
          __html: title,
        }}></H3>
        <P className="read-time">{readTime.text}</P>
        {excerpt && (
          <React.Fragment>
            <P className="excerpt" dangerouslySetInnerHTML={{
              __html: excerpt,
            }}></P>
            <Link to={`/blog/${slug}`}>Read More</Link>
          </React.Fragment>
        )}
      </div>
    </PostHeader>
  )
}

export default Header
