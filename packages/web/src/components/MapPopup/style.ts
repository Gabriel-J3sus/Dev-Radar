import styled, { css } from 'styled-components'
import { RiMessage2Line } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { BsArrowRightShort } from 'react-icons/bs'

export const MapPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .user {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      strong {
        font-size: 1.25rem;
        font-family: 'Nunito', 'Roboto', sans-serif;
        color: ${props => props.theme.colors.title};
      }

      p {
        font-size: 1rem;
        color: ${props => props.theme.colors.detail};
      }
    }

    button {
      background: ${props => props.theme.colors.secondary};
      border-radius: 0 10px 10px 0;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.8rem;
  }
`

const icon = css`
  width: 1.5rem;
  height: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  flex-shrink: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`

export const GithubIcon = styled(FiGithub)`
  ${icon}
`
export const MessageIcon = styled(RiMessage2Line)`
  ${icon}
`

export const ArrowRightIcon = styled(BsArrowRightShort)`
  width: 2rem;
  height: 2rem;
  color: #fff;
`
