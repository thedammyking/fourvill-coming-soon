import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './layout'
import Header from './blog_header'
import { Container, Main } from './styled/blog'

const BlogLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query BlogSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>
          <Container>{children}</Container>
        </Main>
      </Layout>
    )}
  />
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
