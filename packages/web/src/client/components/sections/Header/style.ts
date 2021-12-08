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

  .solid-button {
    width: 3rem;
    height: 3rem;

    border-radius: 15px;

    &:hover {
      opacity: 1;
    }
  }
`
