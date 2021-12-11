import { createGlobalStyle, css } from 'styled-components'
import { theme as colors } from './themes/Theme'

export default createGlobalStyle`
  :root {
    ${({ theme }) => css`
      ${Object.entries(theme.colors).map(
        ([key, color]) => `--${key}:${color};`
      )}
    `}
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {

    background: var(--bg-primary);
  }

  body, input, button, textarea, .leaflet-container {
    font: 400 1rem 'Roboto', sans-serif;
    color: var(--primary);
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
    background: #8257E5;
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

  .leaflet-popup-content-wrapper, .leaflet-popup-tip {
    background: var(--bg-secondary);
  }

  .leaflet-marker-icon {
    border-radius: 50%;
    box-shadow: 0 0 20px 1px var(--purple);
  }

  .leaflet-popup-content p {
    margin: 0;
  }

`
