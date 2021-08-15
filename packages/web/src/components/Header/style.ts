import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 0.6rem 0 0;

  position: fixed;
  left: 0;
  margin-left: 4rem;
  z-index: 6;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    width: 3rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.colors.secondary};
    opacity: 0.7;
    border-radius: 15px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`
