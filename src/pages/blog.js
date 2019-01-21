import React, { Component } from 'react'

import BlogLayout from '../components/blog_layout'
import SEO from '../components/seo'
import { Blog, Wrapper } from '../components/styled/blog'
import BlogPostList from '../components/blog_post_list'
import BlogCategory from '../components/blog_category'

class BlogPage extends Component {
  state = {
    active: '',
  }

  setActiveCategory = category => {
    return this.setState({
      active: category,
    })
  }
  render() {
    return (
      <BlogLayout>
        <SEO title="Fourvill" keywords={['fourvill', 'blog']} />
        <Blog>
          <Wrapper>
            <BlogCategory active={this.state.active} />
            <BlogPostList changeCategoty={this.setActiveCategory} />
          </Wrapper>
        </Blog>
      </BlogLayout>
    )
  }
}
export default BlogPage
