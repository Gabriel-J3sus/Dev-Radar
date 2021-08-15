import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  > .wrapper {
    max-width: 1044px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 2.25rem;

    overflow: hidden;

    main {
      max-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;

      position: relative;

      padding: 1.5rem 0.7rem 1rem;

      z-index: 3;

      > span {
        position: absolute;

        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        > p {
          max-width: 350px;
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 2.06rem;
          text-align: center;
        }
      }

      > form {
        position: fixed;
        bottom: 0;

        max-width: 350px;
        width: 100%;
        height: auto;

        padding: 0.8rem 1.25rem 1rem;
        margin-bottom: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        background: ${props => props.theme.colors.bgForm};
        border-radius: 15px;

        > h2 {
          color: ${props => props.theme.colors.title};
          line-height: 23px;
        }

        .step-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;

          &.techs {
            overflow: scroll;
            flex-direction: row;
            flex-wrap: wrap;
            padding-right: 0.2rem;
          }
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
            gap: 0.8rem;
            text-align: center;
          }

          p {
            font-size: 0.75rem;
            font-weight: 500;
            color: ${props => props.theme.colors.secondary};
            text-align: center;
          }
        }

        .controlls {
          width: 100%;
          display: flex;
          gap: 0.3rem;
          height: 2.25rem;
          margin-top: 0.2rem;
          flex-shrink: 0;

          > .back {
            flex: 3;

            display: flex;
            align-items: center;
            justify-content: center;

            background: #bdbdbd;
            color: ${props => props.theme.colors.bgForm};
            font-weight: 700;

            border-radius: 7px;
            transition: filter 0.3s;

            &:hover {
              filter: brightness(0.8);
            }
          }

          > .submit {
            flex: 6;

            display: flex;
            align-items: center;
            justify-content: center;

            background: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.bgForm};
            font-weight: 700;

            border-radius: 7px;
            transition: filter 0.3s;

            &:hover {
              filter: brightness(0.8);
            }
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

        @media (max-width: 720px) {
          max-height: 450px;
        }

        @media (min-width: 721px) {
          max-height: 400px;
        }
      }
    }

    aside {
      max-width: 100vw;
      width: 100%;
      height: 100%;

      position: absolute;
      z-index: 1;
    }
  }

  @media (min-width: 920px) {
    > .wrapper {
      padding: 3.5rem 2.06rem;

      main {
        padding: 0;
        gap: 1.5rem;
        z-index: 0;

        > span {
          z-index: 0;
          position: initial;
          gap: 1.8rem;

          > p {
            font-size: 1.125rem;
          }
        }

        > form {
          z-index: 0;

          position: initial;
          padding: 2.5rem 1.5rem 1.25rem;
          gap: 0.75rem;

          > .step-container {
            gap: 0.5rem;
          }

          .input-wrapper {
            gap: 1.8rem;
          }

          .controlls {
            height: 2.75rem;
            margin-top: 0.3rem;

            .back {
              flex: 2;
            }
          }
        }
      }

      aside {
        position: initial;
      }
    }
  }

  @media (max-width: 380px) {
    .leaflet-control-container {
      display: none;
    }
  }
`
