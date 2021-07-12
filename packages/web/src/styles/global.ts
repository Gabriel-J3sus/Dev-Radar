import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.bg};
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
    color: ${props => props.theme.colors.primary};
  }

  a, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%; //14px
    }
  }

`
