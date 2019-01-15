import React from 'react'

import BlogLayout from '../components/blog_layout'
import SEO from '../components/seo'
import { SinglePost } from '../components/styled/blog'
import Header from '../components/post_header'

const BlogPage = () => {
  return (
    <BlogLayout>
      <SEO title="Fourvill" keywords={['fourvill', 'blog']} />
      <SinglePost>
        <Header />
      </SinglePost>
    </BlogLayout>
  )
}
export default BlogPage
