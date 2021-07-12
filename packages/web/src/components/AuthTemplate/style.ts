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
      max-height: 500px;
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

      .input-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1.8rem;
      }

      .input-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;

        label {
          font-weight: 700;
          color: ${props => props.theme.colors.tertiary};
          margin-bottom: 0.3rem;
        }

        input {
          width: 100%;
          border: none;
          border-bottom: 2px solid ${props => props.theme.colors.border};
          color: ${props => props.theme.colors.primary};

          padding: 0.3rem 0.5rem;
          box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.02);
          outline: none;
          transition: border-bottom-color 0.3s ease-out;

          &:focus {
            border-bottom-color: ${props => props.theme.colors.secondary};
          }
        }
      }

      > button {
        width: 100%;
        height: 2.75rem;
        margin-top: 0.3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.bgForm};
        border-radius: 7px;
        font-weight: 700;
        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.8);
        }
      }

      .iconButton {
        width: auto;
        height: auto;
        font-size: 0;
        background: none;

        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0.3rem 0.5rem 0 0;

        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }

      .link {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${props => props.theme.colors.detail};

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
    max-height: 100vh;
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

export const EyeClosedIcon = styled(AiFillEyeInvisible)`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  fill: ${props => props.theme.colors.primary};
`

export const EyeOpenIcon = styled(AiFillEye)`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  fill: ${props => props.theme.colors.primary};
`
