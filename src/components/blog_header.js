import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  ImageBox,
  Wrapper,
  Nav,
  Button,
  AppHeader,
  NavItem,
  NavList,
} from './styled/blog'
import logo from '../svg/logo.svg'

const Header = props => (
  <AppHeader>
    <Container>
      <Nav>
        <Wrapper>
          <ImageBox>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </ImageBox>
          <NavList>
            <NavItem>
              <Link to="/">Product</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Pricing</Link>
            </NavItem>
          </NavList>
        </Wrapper>
        <Button>Get Started</Button>
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
