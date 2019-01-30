import React, { Component } from 'react'
import {
  CategoryRecentPosts,
  CategoryHeaderImage,
  ImageBox,
  FirstPost,
  OtherPosts,
  H3,
  P,
  Wrapper,
  H5,
} from './styled/blog'
import headerImage from '../svg/animal-pair.svg'
import { Link } from 'gatsby'
import Waypoint from 'react-waypoint'
import { Consumer } from '../pages/blog'

class CategorizedList extends Component {
  render() {
    let postList = [...this.props.postList]
    const firstPost = postList[0]
    postList.splice(0, 1)
    return (
      <Consumer>
        {({ setActiveCategory }) => {
          return (
            <div>
              <CategoryHeaderImage color={this.props.color}>
                <ImageBox>
                  <img src={headerImage} alt="" />
                </ImageBox>
              </CategoryHeaderImage>
              <Waypoint
                onEnter={() => setActiveCategory(this.props.category)}
              />
              <CategoryRecentPosts>
                <FirstPost>
                  <div className="number">
                    <span>1</span>
                  </div>
                  <div className="snippet">
                    <H3
                      dangerouslySetInnerHTML={{ __html: firstPost.node.title }}
                    />
                    <P
                      dangerouslySetInnerHTML={{
                        __html: firstPost.node.excerpt,
                      }}
                    />
                    <Link to={`/blog/${firstPost.node.slug}`}>Read More</Link>
                  </div>
                </FirstPost>
                <OtherPosts>
                  <ul>
                    {postList.map((post, i) => (
                      <li key={i}>
                        <Wrapper>
                          <H5>
                            <Link
                              to={`/blog/${post.node.slug}`}
                              dangerouslySetInnerHTML={{
                                __html: post.node.title,
                              }}
                            />
                          </H5>
                          <span>{i + 2}</span>
                        </Wrapper>
                      </li>
                    ))}
                  </ul>
                </OtherPosts>
              </CategoryRecentPosts>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
export default CategorizedList
