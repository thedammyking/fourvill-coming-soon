import styled, { createGlobalStyle } from 'styled-components'
import { min, max } from './mediaQuery'

export const color = {
  primary: '#683A68',
  secondary: '#4664FF',
  white: '#ffffff',
  footerBackground: '#ddd1c7',
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
  width: 89.1rem;
  margin: 0 auto;

  ${max.mobile_l`width: 85%`};
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
  background-color: #fff;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);

  ${max.mobile_l`box-shadow: none`};
`

export const Nav = styled.nav`
  width: 100%;
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${max.mobile_l`flex-direction: column;
  align-items: flex-start; margin-top: 3rem;`};

  ${Wrapper} {
    align-items: center;

    ${max.mobile_l`margin-top: 5rem;
    width: 100%;
    background: #E5F6F7;
    padding: 4rem 2rem 3rem 2rem;
    flex-direction: column;
    text-align: center;`};

    ${max.mobile_m`padding: 4rem 1rem 3rem 1rem;`};    
  }

  ${Button} {
    width: 12.27rem;
    height: 4.26rem;
    font-size: 1.28rem;
    font-weight: bold;
    margin: 2.13rem 0;
  }

  ${P} {
    font-size: 1.69rem;
    margin-right: 2.06rem;
  }

  ${ImageBox} {
    width: 11.13rem;
  }
`

// *******************Body***********************

export const FeatureList = styled.div`
${Wrapper} {
  flex-wrap: wrap;
}
`;


export const Feature = styled.div`
width: 44.62%;
margin-bottom: 5.5rem;

&:not(:nth-of-type(2n)) {
  margin-right: 10.76%;

  ${max.mobile_l`margin-right: 0;`};
}

${max.mobile_l`margin-right: 0;
width: 100%;`};

${ImageBox} {
  width: 100%;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 3rem;

    ${max.mobile_l`margin-bottom: 1.5rem;`};
}

${H3} {
  font-size: 1.4rem;
  line-height: 2.5;
}

${P} {
  font-size: 1.2rem;
}
`
