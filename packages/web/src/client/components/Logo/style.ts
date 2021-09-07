import styled from 'styled-components'

export const LogoContainer = styled.div<{ titleColor?: string }>`
  width: min-content;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-family: 'Nunito', 'Roboto', sans-serif;
    color: ${({ titleColor, ...props }) => props.theme.colors[titleColor]};

    @media (max-width: 600px) {
      font-size: 2.25rem;
      line-height: 42px;
    }

    @media (min-width: 601px) {
      font-size: 3rem;
      line-height: 65px;
    }
  }
`

export const LogoSVG = styled.svg<{ SVGfill: string }>`
  path {
    fill: ${({ SVGfill, ...props }) => props.theme.colors[SVGfill]};
  }
`
