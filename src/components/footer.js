import React from 'react'
import { AppFooter, Container, Wrapper, P } from './styled'
import { Link } from 'gatsby'
import instagram from '../svg/instagram.svg'
import twitter from '../svg/twitter.svg'
import mail from '../svg/mail.svg'

const Footer = () => {
  return (
    <AppFooter>
      <Container>
        <Wrapper>
          <Wrapper>
            <P>&copy; Fourvill Inc. All Rights Reserved.</P>
            <ul>
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </Wrapper>
          <Wrapper>
            <P>Have some words for the team?</P>
            <ul>
              <li>
                <img src={mail} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </Wrapper>
        </Wrapper>
      </Container>
    </AppFooter>
  )
}

export default Footer
