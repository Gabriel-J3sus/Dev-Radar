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

  .drop-shadow {
    width: 3rem;
    height: 3rem;

    opacity: 0.7;
    border-radius: 15px;

    &:hover {
      opacity: 1;
    }
  }
`
