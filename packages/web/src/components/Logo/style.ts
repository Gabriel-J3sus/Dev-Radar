import styled from 'styled-components'

export const LogoContainer = styled.div`
  width: min-content;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-family: 'Nunito', 'Roboto', sans-serif;
    font-size: 2.25rem;
    line-height: 42px;
    color: ${props => props.theme.colors.title};

    @media (min-width: 600px) {
      font-size: 3rem;
      line-height: 65px;
    }
  }
`
