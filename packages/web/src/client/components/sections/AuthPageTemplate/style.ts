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

    > p {
      text-align: center;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 2.06rem;
    }

    > form {
      width: 100%;
      padding: 2.5em 1.5em 1.25em;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      background: var(--bgForm);
      border-radius: 15px;

      > h2 {
        text-align: center;
        color: var(--title);
        line-height: 23px;
      }

      .local-inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .input-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1.8rem;
        }

        p {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--secondary);
        }
      }

      .link {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--detail);
        text-align: center;

        > a {
          color: var(--secondary);
          text-decoration: underline;
          transition: opacity 0.2s;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }

  aside {
    max-width: 100vw;
    max-height: 100vh;
    height: 100%;
    overflow-y: auto;
    overflow-y: scroll;

    .grid-content {
      height: 100%;
      width: 100%;
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
