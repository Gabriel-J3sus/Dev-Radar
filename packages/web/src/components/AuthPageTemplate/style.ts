import styled from 'styled-components'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

export const AuthTemplateContainer = styled.div`
  max-width: 1044px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.25rem;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    > p {
      max-width: 350px;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 2.06rem;
      text-align: center;
    }

    > form {
      max-width: 350px;
      width: 100%;
      height: auto;

      padding: 2.5rem 1.5rem 1.25rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;

      background: ${props => props.theme.colors.bgForm};
      border-radius: 15px;

      > h2 {
        color: ${props => props.theme.colors.title};
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
          color: ${props => props.theme.colors.secondary};
        }
      }

      > button {
        width: 100%;
        height: 2.75rem;
        margin-top: 0.3rem;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.bgForm};
        border-radius: 7px;
        font-weight: 700;
        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.8);
        }
      }

      .link {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${props => props.theme.colors.detail};
        text-align: center;

        > a {
          color: ${props => props.theme.colors.secondary};
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
    min-height: 100vh;
    height: 100%;
    overflow-y: auto;
    display: none;

    .grid-content {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.25rem;

      padding: 0 0.4rem 1rem;
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  @media (min-width: 720px) {
    justify-content: flex-start;

    aside {
      display: block;
    }
  }

  @media (min-width: 920px) {
    aside {
      .grid-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`
