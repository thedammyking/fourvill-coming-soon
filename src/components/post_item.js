import React from 'react'
import { PostItem, ImageBox, P, H3, Wrapper } from './styled/blog'
import animan_pair from '../svg/trans-animal-pair.svg'
import { Link } from 'gatsby'

const Item = ({author, date, excerpt, readTime, title, slug}) => {
  return (
    <PostItem>
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
        <H3 ><Link to={`/blog/${slug}`} dangerouslySetInnerHTML={{
          __html: title,
        }}></Link></H3>
        <P className="read-time">{readTime.text}</P>
        {excerpt && (
          
            <div className="excerpt" dangerouslySetInnerHTML={{
              __html: excerpt,
            }}></div>
            
        )}
      </div>
    </PostItem>
  )
}

export default Item
