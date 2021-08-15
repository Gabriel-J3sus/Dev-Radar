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

  body, input, button, textarea, .leaflet-container {
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

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.logo};
    border-radius: 25px;
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

  .leaflet-marker-icon {
    border-radius: 50%;
    box-shadow: 0 0 20px 1px ${props => props.theme.colors.secondary};
  }

  .leaflet-popup-content p {
    margin: 0;
  }

`
