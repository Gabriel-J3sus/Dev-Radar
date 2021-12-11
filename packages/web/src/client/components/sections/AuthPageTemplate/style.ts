import styled from 'styled-components'

export const AuthTemplateContainer = styled.article`
  max-width: 1044px;
  width: 100%;
  display: flex;
  gap: 2.25rem;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    > strong {
      text-align: center;
      font-size: 1.125rem;
      color: var(--secondary);
    }
  }

  aside {
    max-width: 100vw;
    max-height: 100vh;
    height: 100%;
    overflow-y: auto;
    overflow-y: scroll;

    .grid-content {
      flex: 1;
      display: grid;
      grid-gap: 1.25rem;

      padding: 0 0.4rem 1rem;

      @media (max-width: 920px) {
        grid-template-columns: repeat(1, 1fr);
      }

      @media (min-width: 920px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  @media (max-width: 720px) {
    justify-content: center;

    aside {
      display: none;
    }
  }

  @media (min-width: 721px) {
    justify-content: flex-start;

    aside {
      display: block;
    }
  }
`
