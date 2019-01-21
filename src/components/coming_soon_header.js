import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  ImageBox,
  Wrapper,
  Nav,
  P,
  Button,
  AppHeader,
} from './styled'
import logo from '../svg/logo.svg'

const Header = props => (
  <AppHeader>
    <Container>
      <Nav>
        <ImageBox>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </ImageBox>
        <Wrapper>
          <P>We'll be live soon</P>
          <Button className="start">Know when</Button>
          <Button className="get-started start">Get Started</Button>
        </Wrapper>
      </Nav>
    </Container>
  </AppHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
