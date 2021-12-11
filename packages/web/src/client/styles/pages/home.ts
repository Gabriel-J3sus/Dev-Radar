import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  position: relative;

  overflow-x: hidden;

  .leaflet-container {
    z-index: 1;
    width: 100%;
  }

  .logo {
    position: absolute;
    z-index: 7;
    bottom: 0;
    left: 0;
    margin: 0 0 0.8rem 0.8rem;

    @media (max-width: 420px) {
      display: none;
    }
  }
`

export const CardsWrapper = styled.div<{ isSearchMode: boolean }>`
  max-width: 410px;

  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 3.12rem;
  z-index: 99;

  display: flex;
  gap: ${({ isSearchMode }) => (isSearchMode ? '0.5rem' : '0')};

  > .solid-button {
    height: fit-content;
    margin: auto;

    border-radius: 7px 0 0 7px;

    @media (max-width: 420px) {
      padding: 1rem 0.5rem;
    }

    @media (min-width: 421px) {
      padding: 2rem 1rem;
    }
  }

  .wrapper {
    transition: transform 0.3s, width 0.3s;
    width: ${({ isSearchMode }) => (isSearchMode ? '100%' : '0')};
    transform: ${({ isSearchMode }) =>
      isSearchMode ? 'translateX(0)' : 'translateX(100vw)'};

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2.25rem;

    > .content {
      overflow: auto;

      display: flex;
      flex-direction: column;
      gap: 1.625rem;
      padding-bottom: 1rem;
    }

    > span {
      display: ${({ isSearchMode }) => (isSearchMode ? 'flex' : 'none')};
      align-items: center;
      justify-content: center;

      box-shadow: -1px 3px 17px 0px #a789ff;
      border-radius: 20px 15px 15px 20px;

      > .solid-button {
        padding: 0.8rem 0.9rem;

        border-radius: 0 15px 15px 0;
      }
    }
  }

  @media (max-width: 550px) {
    max-height: 85vh;

    right: 0;
    margin-right: auto;
    margin-left: auto;

    padding: ${({ isSearchMode }) => (isSearchMode ? '0 1rem' : '0')};

    > .wrapper {
      margin-top: 4rem;
    }
  }

  @media (min-width: 551px) {
    max-height: 100vh;

    top: 0;
    margin-top: 1rem;

    > .wrapper {
      margin-right: ${({ isSearchMode }) => (isSearchMode ? '2rem' : '0')};
    }
  }
`
