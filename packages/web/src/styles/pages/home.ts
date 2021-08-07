import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  position: relative;

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

  .leaflet-container {
    z-index: 5;
  }

  > .card-container {
    max-width: 320px;
    width: 100%;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    margin: 0 2.75rem 3.12rem 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2.25rem;

    input {
      width: 100%;
      padding: 0.8rem 0.9rem;

      border: 2px solid transparent;
      border-radius: 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background: ${props => props.theme.colors.bgForm};
      outline: none;
      transition: border-color 0.2s ease-in-out;

      &:focus {
        border-color: ${props => props.theme.colors.secondary};
      }
    }

    > .content {
      width: 100%;
      height: 100%;
      overflow: auto;

      display: flex;
      flex-direction: column;
      gap: 1.625rem;
      padding: 0.6rem 0.3rem 0.6rem 0;
    }
  }
`
