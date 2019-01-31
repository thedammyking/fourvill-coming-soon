import React, { Component } from 'react'

import BlogLayout from '../components/blog_layout'
import SEO from '../components/seo'
import { Blog, Wrapper } from '../components/styled/blog'
import BlogPostList from '../components/blog_post_list'
import BlogCategory from '../components/blog_category'
import { graphql } from 'gatsby'

const { Consumer, Provider } = React.createContext()

class BlogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: '',
      categories: this.props.data.categories.edges,
      posts: this.props.data.posts.edges,
    }
  }

  setActiveCategory = category => {
    return this.setState({
      active: category,
    })
  }

  render() {
    const { categories, posts } = this.state

    return (
      <Provider
        value={{
          setActiveCategory: this.setActiveCategory,
          activeCategory: this.state.active,
          categories,
          posts,
        }}
      >
        <BlogLayout>
          <SEO title="Fourvill" keywords={['fourvill', 'blog']} />
          <Blog>
            <Wrapper>
              <BlogCategory />
              <BlogPostList />
            </Wrapper>
          </Blog>
        </BlogLayout>
      </Provider>
    )
  }
}

export const categoryQuery = graphql`
  query {
    categories: allWordpressCategory(skip: 1, sort: { fields: wordpress_id }) {
      edges {
        node {
          wordpress_id
          name
        }
      }
    }
    posts: allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          content
          date(formatString: "MMM DD, YYYY")
          author {
            name
          }
          categories {
            wordpress_id
          }
        }
      }
    }
  }
`

export default BlogPage
export { Consumer }
