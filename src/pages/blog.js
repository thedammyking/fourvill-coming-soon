import React from 'react'

import BlogLayout from '../components/blog_layout'
import SEO from '../components/seo'
import { Blog, Wrapper } from '../components/styled/blog'
import BlogPostList from '../components/blog_post_list'
import BlogCategory from '../components/blog_category'

const BlogPage = () => {
  return (
    <BlogLayout>
      <SEO title="Fourvill" keywords={['fourvill', 'blog']} />
      <Blog>
        <Wrapper>
          <BlogCategory />
          <BlogPostList />
        </Wrapper>
      </Blog>
    </BlogLayout>
  )
}
export default BlogPage
