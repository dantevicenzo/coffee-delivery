import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: color, background-color 0.15s;
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

  h1 {
    font-size: ${(props) =>
      props.theme.typography.baloo2.sizes.titleXl.fontSize};
    line-height: ${(props) =>
      props.theme.typography.baloo2.sizes.titleXl.lineHeight};
    font-weight: 800;
  }

  h2 {
    font-size: ${(props) =>
      props.theme.typography.baloo2.sizes.titleL.fontSize};
    line-height: ${(props) =>
      props.theme.typography.baloo2.sizes.titleL.lineHeight};
    font-weight: 800;
  }

  h3 {
    font-size: ${(props) =>
      props.theme.typography.baloo2.sizes.titleM.fontSize};
    line-height: ${(props) =>
      props.theme.typography.baloo2.sizes.titleM.lineHeight};
    font-weight: 800;
  }

  h4 {
    font-size: ${(props) =>
      props.theme.typography.baloo2.sizes.titleS.fontSize};
    line-height: ${(props) =>
      props.theme.typography.baloo2.sizes.titleS.lineHeight};
    font-weight: 700;
  }

  h5 {
    font-size: ${(props) =>
      props.theme.typography.baloo2.sizes.titleXs.fontSize};
    line-height: ${(props) =>
      props.theme.typography.baloo2.sizes.titleXs.lineHeight};
    font-weight: 700;
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

  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
  }
`
