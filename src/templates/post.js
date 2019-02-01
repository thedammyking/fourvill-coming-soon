import React, { Component } from 'react'
import BlogLayout from '../components/blog_layout'
import SEO from '../components/seo'
import { SinglePost} from '../components/styled/blog'
import Header from '../components/post_header'
import { graphql } from 'gatsby'
import readingTime from 'reading-time'

class BlogPage extends Component {
  render() {
    const post = { ...this.props.data.wordpressPost }
    const readTime = readingTime(post.content)
    return (
      <BlogLayout>
        <SEO
          title="Fourvill"
          keywords={['fourvill', 'blog', `${post.title}`]}
        />
        <SinglePost>
          <Header
            title={post.title}
            author={post.author.name}
            date={post.date}
            readTime={readTime}
          />
          <div
            className="body"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </SinglePost>
      </BlogLayout>
    )
  }
}
export default BlogPage

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMM DD, YYYY")
      author {
        name
      }
    }
  }
`
