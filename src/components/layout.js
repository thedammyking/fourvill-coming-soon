import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer'
import { GlobalStyle } from '../components/styled'
import * as typeformEmbed from '@typeform/embed'

class Layout extends Component {
  componentDidMount() {
    this.mountTypeform()
  }

  mountTypeform = () => {
    const popup = typeformEmbed.makePopup(
      'https://fourvill.typeform.com/to/JWdThi',
      {
        mode: 'popup',
        hideHeaders: true,
        hideFooters: true,
        onSubmit: () => console.log('Form successfully submitted'),
      }
    )

    const buttons = document.querySelectorAll('button.start')

    buttons.forEach((element, i) => {
      element.addEventListener('click', e => {
        e.preventDefault()
        return popup.open()
      })
    })
  }
  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <GlobalStyle />
            {children}
            <Footer />
          </>
        )}
      />
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
