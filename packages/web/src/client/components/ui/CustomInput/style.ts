import { ClosedEyeIcon, OpenEyeIcon } from '@components/icons'
import styled, { css } from 'styled-components'

export const NormalInput = styled.input`
  width: 100%;
  padding: 0.8rem 0.9rem;
  border: none;
  outline: none;

  &.default {
    height: 100%;

    border: 2px solid transparent;
    border-radius: 20px 0 0 20px;
    background: var(--bg-secondary);
    transition: border-color 0.2s ease-in-out;

    &:focus {
      border-color: var(--dark-purple);
    }
  }

  &.formInput {
    border-bottom: 2px solid var(--ice);
    background: var(--bg-secondary);
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.02);
    transition: border-bottom-color 0.3s ease-out;

    &:focus {
      border-bottom-color: var(--dark-purple);
    }
  }

  &::placeholder {
    color: var(--tertiary);
  }
`

export const PasswordInputContainer = styled.span`
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

  &::placeholder {
    color: var(--tertiary);
  }
`

export const TextArea = styled.textarea``

const icons = css`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  fill: var(--primary);
`

export const EyeClosedIcon = styled(ClosedEyeIcon)`
  ${icons}
`

export const EyeOpenIcon = styled(OpenEyeIcon)`
  ${icons}
`
