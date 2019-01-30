import styled from 'styled-components'
import { min, max } from './mediaQuery'

export const color = {
  primary: '#683A68',
  secondary: '#4664FF',
  white: '#ffffff',
  footerBackground: '#F3FBF8',
  textColor: '#A497AE',
  accent: '#FFB86F',
  blogText: '#2A2D34',
  readMore: '#4664FF',
}

export const Container = styled.div`
  width: 118.93rem;
  margin: 0 auto;

  ${max.tablet`width: 90%`};
`
export const Main = styled.main`
  margin: 11.91rem auto;
`

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`

export const H1 = styled.h1``

export const H3 = styled.h3``

export const H5 = styled.h5``

export const P = styled.p``

export const Button = styled.button`
  cursor: pointer;
  color: ${color.white};
  background-color: ${color.secondary};
  text-align: center;
  border-radius: 0.2rem;
`

export const ImageBox = styled.div``

//****************HEADER********************* */

export const AppHeader = styled.header`
  width: 100%;
  background-color: #f7f6fb;
  position: fixed;
  top: 0;
  z-index: 999;

  ${max.tablet`background-color: #F7F6FB`};
  ${max.mobile_l`background-color: ${color.white}`};
`

export const Nav = styled.nav`
  width: 100%;
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Wrapper} {
    align-items: center;
  }

  ${Button} {
    width: 15.34rem;
    height: 4.3rem;
    font-size: 1.28rem;
    margin: 1.5rem 0;
    border-radius: 0.3rem;

    ${max.tablet`font-size: 1.67rem; width: 15.02rem;
    height: 5.526rem;`};

    ${max.mobile_l`display: none;`};

    ${max.mobile_m`width: 12.01rem;
    height: 4.42rem;`};
  }

  ${ImageBox} {
    width: 8.23rem;
    ${max.tablet`width: 10.4rem`};
  }
`

export const NavList = styled.ul`
  display: flex;
  margin-left: 4.54rem;
`

export const NavItem = styled.li`
  font-size: 1.2rem;

  &:not(:last-child) {
    margin-right: 3.27rem;
  }
`

// *******************Body***********************
export const Blog = styled.div`
  width: 94%;
  margin: 0 auto;
`

export const PostList = styled.div`
  width: 86.4%;
  margin-left: 13.6%;
`

export const CategoriesContainer = styled.div`
  width: 11.6%;
  position: fixed;
`

export const CategoryList = styled.ul``

export const CategoryItem = styled.li`
  padding: 0 1.1rem;

  ${props =>
    props.active
      ? `color: ${color.accent};
  border-left: 2px solid currentColor;`
      : ``};

  ${P} {
    font-size: 1.28rem;
    line-height: 1.2;
  }

  &:not(:last-child) {
    margin-bottom: 2.13rem;
  }
`

export const CategoryHeaderImage = styled.div`
  height: 28.76rem;
  width: 100%;
  background: ${props => (props.color ? props.color : color.accent)};
  padding: 6rem 0 0 5.25rem;

  ${ImageBox} {
    width: 32.07rem;
  }
`

export const CategoryRecentPosts = styled(Wrapper)`
  justify-content: space-between;
  padding: 3rem 0;
  border-bottom: 1px dotted #dcc9c975;
  margin-bottom: 3rem;
`

export const FirstPost = styled(Wrapper)`
  width: 54%;
  justify-content: space-between;

  .number {
    span {
      background: #eee0cb;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: block;
      font-size: 1.5rem;
      text-align: center;
    }
  }

  .snippet {
    width: 46.9rem;

    ${H3} {
      font-size: 3.4rem;
      color: ${color.blogText};
      line-height: 1.2;
      margin-bottom: 1rem;
    }

    .excerpt{
       p {
      font-size: 1.5rem;
      line-height: 1.3;
      margin-bottom: 3.5rem;
    }
}
    a {
      font-size: 1.3rem;
      color: ${color.readMore};
    }
  }
`

export const OtherPosts = styled.div`
  width: 29.3%;

  ul {
    width: 100%;

    li {
      &:not(:first-child) {
        padding-top: 2rem;
      }

      &:not(:last-child) {
        padding-bottom: 1.5rem;
        border-bottom: 1px dotted #dcc9c975;
      }

      ${Wrapper} {
        justify-content: space-between;
        align-items: center;
      }

      span {
        font-size: 1.14rem;
        color: ${color.accent};
      }
    }
  }

  ${H5} {
    font-size: 1.5rem;
    width: 23.3rem;
    line-height: 1.2;
  }
`

// =================== SINGLE POST=======================
export const SinglePost = styled.div`
  width: 60.6%;
  margin: 0 auto;

  .body {
    width: 80%;
    margin: 0 auto;

    p {
      font-size: 1.5rem;
      line-height: 1.3;
      margin: 2rem 0;
    }
  }
`
export const PostHeader = styled(Wrapper)`
  padding-top: 3rem;

  .image {
    position: relative;
    width: 12.53rem;
    height: 22.26rem;
    background: ${color.secondary};
    margin-left: 8.48rem;
    margin-right: 3.7rem;
  }

  ${ImageBox} {
    position: absolute;
    width: 18.18rem;
    left: -8.48rem;
    top: 5.49rem;
  }

  .details {
    width: 74.34%;

    & > ${Wrapper} {
      font-size: 1.3rem;

      .author {
        color: ${color.accent};
        margin-right: 2.4rem;
      }
    }

    ${H3} {
      font-size: 3.2rem;
      line-height: 1.2;
      margin: 1rem 0;
    }

    .read-time {
      background: #dce8e4;
      width: 7.95rem;
      text-align: center;
      border-radius: 25px;
    }

    .excerpt {
      font-size: 1.5rem;
      line-height: 1.3;
      margin: 2rem 0;
    }

    a {
      font-size: 1.3rem;
      color: ${color.readMore};
    }
  }
`
