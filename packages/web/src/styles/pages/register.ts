import styled from 'styled-components'

export const Container = styled.section`
  padding: 3.5rem 2.06rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
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
        height: 100%;

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

          label {
            font-weight: 700;
            color: ${props => props.theme.colors.tertiary};
            margin-bottom: 0.3rem;
          }

          input {
            width: 100%;
            border: none;
            border-bottom: 2px solid ${props => props.theme.colors.border};
            padding: 0.3rem 0.5rem;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.02);
          }
        }

        button {
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
      }
    }

    aside {
      max-height: 100vh;
      height: 100%;
      overflow-y: auto;

      display: none;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.25rem;

      padding: 0 0.4rem;

      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }

  @media (min-width: 720px) {
    .wrapper {
      justify-content: flex-start;

      aside {
        display: grid;
      }
    }
  }

  @media (min-width: 920px) {
    .wrapper {
      aside {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`
