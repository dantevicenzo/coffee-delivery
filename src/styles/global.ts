import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.yellowDark};
  }

  body {
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.baseText};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.typography.baloo2.fontFamily};
    color: ${(props) => props.theme.color.baseTitle};
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.typography.roboto.fontFamily};
    line-height: 1.3;
    font-weight: 400;
    font-size: 1rem;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
`
