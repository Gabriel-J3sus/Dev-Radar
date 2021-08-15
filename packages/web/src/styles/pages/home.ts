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

  .logo {
    position: absolute;
    z-index: 7;

    @media (max-width: 420px) {
      top: 0;
      right: 0;
      margin: 0.6rem 0.4rem 0 0;
    }

    @media (min-width: 421px) {
      bottom: 0;
      left: 0;
      margin: 0 0 0.8rem 0.8rem;
    }
  }
`

export const CardsWrapper = styled.div<{ isSearchMode: boolean }>`
  max-width: 320px;

  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99;

  margin-bottom: 3.12rem;

  display: ${({ isSearchMode }) => (isSearchMode ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-end;
  gap: 2.25rem;

  > .content {
    width: 100%;

    overflow: auto;

    display: flex;
    flex-direction: column;
    gap: 1.625rem;
    margin-top: 4rem;
    padding-bottom: 1rem;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: -1px 3px 17px 0px #a789ff;
    border-radius: 20px 15px 15px 20px;

    input {
      width: 75%;
      padding: 0.8rem 0.9rem;

      border: 2px solid transparent;
      border-radius: 20px 0 0 20px;
      background: ${props => props.theme.colors.bgForm};
      outline: none;
      transition: border-color 0.2s ease-in-out;

      &:focus {
        border-color: ${props => props.theme.colors.secondary};
      }
    }

    > .search-button {
      width: 25%;
      padding: 0.8rem 0.9rem;

      font-size: 0;
      border-radius: 0 15px 15px 0;
      background: ${props => props.theme.colors.secondary};
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media (max-width: 550px) {
    max-height: 80vh;

    left: 0;
    margin-right: auto;
    margin-left: auto;
    padding: 0 1rem;
  }

  @media (min-width: 551px) {
    max-height: 100vh;

    margin-right: 2rem;
  }
`
