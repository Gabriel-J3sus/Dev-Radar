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
        margin-bottom: 0.75rem;
      }

      > .input-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;

        label {
          font-weight: 700;
          color: var(--tertiary);
          margin-bottom: 0.3rem;
        }

        input {
          padding: 0.3rem 0.5rem;
        }
      }

      > button {
        margin-top: 1rem;
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
