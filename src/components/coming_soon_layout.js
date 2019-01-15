import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './layout'
import Header from './coming_soon_header'
import { Container, Main } from '../components/styled'

const ComingSoonLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query ComingSoonSiteTitleQuery {
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

ComingSoonLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ComingSoonLayout
