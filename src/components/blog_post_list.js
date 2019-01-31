import React, { Component } from 'react'
import { PostList } from './styled/blog'
import CategorizedList from './categorized_post_list'
import { Consumer } from '../pages/blog'
import Item from './post_item'
import readingTime from 'reading-time'
import Waypoint from 'react-waypoint'

const colors = ['#FFB86F', '#4664FF', '#A497AE', '#48acf0']

class BlogPostList extends Component {
  render() {
    return (
      <Consumer>
        {({ categories, posts, setActiveCategory }) => {
          return (
            <PostList>
              {categories.map((category, i) => {
                const categoryPost = posts
                  .filter(
                    post =>
                      post.node.categories.findIndex(
                        category => category.wordpress_id === 4
                      ) >= 0
                  )
                  .slice(0, 5)

                return (
                  <CategorizedList
                    key={category.node.wordpress_id}
                    color={colors[i]}
                    category={category.node.wordpress_id}
                    postList={categoryPost}
                  />
                )
              })}
              {posts.map(({node}, i) => {
                return (
                  <React.Fragment>
                  <Item key={i}
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
