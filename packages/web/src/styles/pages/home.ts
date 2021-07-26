import styled from 'styled-components'

export const HomeContainer = styled.section`
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .user-content {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    > p {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;

      color: ${props => props.theme.colors.secondary};

      &::before,
      &::after {
        content: '';
        width: 100%;
        height: 1px;
        margin: 0 0.8rem;

        background: ${props => props.theme.colors.logo};
      }
    }
  }

  .map-container {
    max-width: 100vw;
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: 1;
  }
`
