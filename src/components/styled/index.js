import styled, { createGlobalStyle } from 'styled-components'
import { min, max } from './mediaQuery'

export const color = {
  primary: '#683A68',
  secondary: '#4664FF',
  white: '#ffffff',
  footerBackground: '#F3FBF8',
  textColor: '#A497AE',
}

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        ${min.laptop_l`font-size: 75%;`};
        ${max.laptop`font-size: 56.25%;`};
        ${max.tablet` font-size: 50%;`};
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Niramit", sans-serif;
        color: ${color.primary};
        font-weight: 400;       
    }

    input, button, a {
      border: 0;
      
      &:focus {
        outline: 0;
      }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1,h2,h3,h4,h5,h5 {
      font-family: "Hind Guntur", sans-serif;
    }

    ul {
        list-style: none;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img {
        width: 100%;
    }
`

export const Container = styled.div`
  width: 107.28rem;
  margin: 0 auto;

  ${max.tablet`width: 90%`};
`
export const Main = styled.main`
  margin: 4.61rem auto;
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
  background-color: ${color.white};

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
    width: 15.02rem;
    height: 5.526rem;
    font-size: 1.28rem;
    margin: 2.13rem 0;
    box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.15);
    border-radius: 0.3rem;

    ${max.tablet`font-size: 1.67rem;`};

    ${max.mobile_m`width: 12.01rem;
    height: 4.42rem;`};
  }

  ${P} {
    font-size: 1.491rem;
    margin-right: 1.2rem;

    ${max.tablet`font-size: 1.9rem;`};

    ${max.mobile_l`display: none`};

    ${max.mobile_m`font-size: 1.3rem;`};
  }

  ${ImageBox} {
    width: 8.23rem;
    ${max.tablet`width: 10.4rem`};
  }
`

// *******************Body***********************

export const Hero = styled.div`
  margin-bottom: 4.61rem;

  ${max.tablet`text-align: center`};

  .coming-soon-tag {
    display: none;
    font-family: 'Niramit', sans-serif;
    font-size: 12px;
    display: inline-block;
    background-color: #dbb3b1;
    color: ${color.white};
    padding: 0.2rem 1rem;
    border-radius: 25px;
    line-height: initial;
    width: 98px;
    margin: 0rem auto 2rem auto;
    ${max.tablet`display: block`};
  }

  ${H1} {
    font-size: 3.4rem;
    font-weight: 500;
    position: relative;
    line-height: 1.15;

    ${max.tablet`font-size: 4.4rem`};

    ${max.mobile_l`font-size: 4rem; font-weight: bold`};

    ${max.mobile_m`font-size: 3.2rem;`};

    span {
      font-family: 'Niramit', sans-serif;
      font-size: 1rem;
      display: inline-block;
      background-color: #dbb3b1;
      color: ${color.white};
      padding: 0.2rem 1rem;
      border-radius: 25px;
      position: absolute;
      top: 0.4rem;
      line-height: initial;

      ${max.tablet`display: none`};
    }
  }

  ${P} {
    font-size: 1.49rem;
    margin-top: 0.5rem;

    ${max.tablet`font-size: 1.7rem; width: 80%; margin: 0.5rem auto 0 auto`};

    ${max.mobile_l`width: 100%; font-size: 2rem;`};

    ${max.mobile_m`font-size: 1.6rem;`};
  }
`

export const FeatureList = styled(Wrapper)`
  justify-content: space-between;

  ${max.tablet`flex-wrap: wrap`};
`

export const FeatureCard = styled.div`
  width: 26.13rem;

  ${max.tablet`width: 48.3%; margin-bottom: 3.5rem; box-shadow: 6px 15px 20px 0px rgba(0,0,0,0.26);`};

  ${max.mobile_l`width: 100%;`};

  & > ${H3} {
    font-size: 1.49rem;
    font-weight: 400;
    margin-bottom: 0.6rem;

    ${max.tablet`display: none`};
  }

  &:nth-of-type(1) {
    ul {
      li {
        &:nth-of-type(1) {
          img {
            margin-right: 1.8rem;
            height: 1.7rem;
            width: initial;

            ${max.tablet`height: 2.4rem; margin-right: 2.5rem;`};
          }
        }
      }
    }
  }

  &:nth-of-type(2) {
    ul {
      li {
        &:last-child {
          img {
            width: 1.6rem;
            margin-right: 0.8rem;

            ${max.tablet`width: 2.3rem; margin-right: 1.3rem;`};
          }
        }
      }
    }
  }
`

export const FeatureBody = styled.div`
  width: 100%;
  background-image: linear-gradient(-205deg, ${props => props.bg});
  color: ${color.white};
  padding: 4rem 3rem;
  height: 34.79rem;
  position: relative;

  ${max.tablet`height: 45.08rem;`};
  ${max.mobile_l`height: 61.25rem; padding: 4.1rem 5.25rem`};
  ${max.mobile_m`height: 49rem; padding: 3.28rem 4.2rem`};

  & > ${H3} {
    font-size: 1.93rem;
    font-weight: 400;
    margin-bottom: 0.6rem;
    display: none;

    ${max.tablet`display: block`};

    ${max.mobile_l`font-size: 2.38rem; margin-bottom: 1rem;`};
    ${max.mobile_m`font-size: 1.904rem; margin-bottom: 0.8rem;`};
  }

  ${P} {
    font-size: 1.28rem;
    font-family: 'Niramit', sans-serif;

    ${max.tablet`font-size: 1.67rem;`};

    ${max.mobile_l`font-size: 2.25rem;`};
    ${max.mobile_m`font-size: 1.8rem;`};
  }

  ul {
    position: absolute;
    bottom: 4rem;

    li {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      img {
        width: 1.1rem;
        margin-right: 1.3rem;

        ${max.tablet`width: 1.7rem;
        margin-right: 1.7rem;`};
      }
    }
  }
`

export const AppFooter = styled.footer`
  width: 100%;
  background-color: ${color.footerBackground};

  ${max.tablet`font-size: 1.3rem`};

  ${max.mobile_l`font-size: 1.75rem`};
  ${max.mobile_m`font-size: 1.4rem`};

  ${Container} {
    padding: 2.05rem 0;
  }

  ${Wrapper} {
    flex-direction: row;
    justify-content: space-between;
    align-self: center;

    ${max.tablet`flex-direction: column; text-align: center;`};

    ${P} {
      margin-right: 2.27rem;
      ${max.tablet`margin: 0 auto`};
    }

    & > ${Wrapper} {
      &:nth-of-type(1) {
        ${max.tablet`margin-bottom: 3rem;`};

        ul {
          li {
            &:not(:last-child) {
              margin-right: 1rem;
            }
          }
        }
      }
      &:nth-of-type(2) {
        ul {
          li {
            &:not(:last-child) {
              margin-right: 2rem;
            }
          }
        }
      }
    }
  }

  ul {
    ${max.tablet`margin-top: 1rem;`};
    li {
      display: inline;

      img {
        height: 1.48rem;
        width: initial;

        ${max.mobile_l`height: 2.5rem;`};
      }

      a {
        color: #48acf0;
        text-transform: uppercase;
      }
    }
  }
`
