import React, { Component } from 'react'
import { PostList } from './styled/blog'
import CategorizedList from './categorized_post_list'
import { Consumer } from '../pages/blog'
import Item from './post_item'
import readingTime from 'reading-time'
import Waypoint from 'react-waypoint'
import * as PropTypes from "prop-types"

const colors = ['#FFB86F', '#4664FF', '#A497AE', '#48acf0']

class BlogPostList extends Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  render() {
    return (
      <Consumer>
        {({ categories, posts, setActiveCategory }) => {
          return (
            <PostList>
              {categories.map(({node}, i) => {
                const categoryId = node.wordpress_id
                const categoryPost = posts
                  .filter(
                    ({node: {categories}}) =>
                      categories.findIndex(
                        category => category.wordpress_id === categoryId
                      ) >= 0
                  ).slice(0, 5)

                return (
                  <CategorizedList
                    key={node.wordpress_id}
                    color={colors[i]}
                    category={node.wordpress_id}
                    postList={categoryPost}
                  />
                )
              })}
              {this.props.posts.map(({node}, i) => {
                return (
                  <React.Fragment key={i}>
                  <Item 
              title={node.title} author={node.author.name} date={node.date} readTime={readingTime(node.content)}
                excerpt={node.excerpt} slug={node.slug}
              />
              {i === 0 && <Waypoint
                onEnter={() => setActiveCategory("")}
              />}
                  </React.Fragment>
                )
              })}
            </PostList>
          )
        }}
      </Consumer>
    )
  }
}
export default BlogPostList
