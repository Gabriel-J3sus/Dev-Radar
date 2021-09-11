import styled, { css } from 'styled-components'
import { ClosedEyeIcon, OpenEyeIcon } from '@components/icons'

export const FormInputContainer = styled.span<{ inputType: string }>`
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
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--border);
    color: var(--primary);

    padding: ${props =>
      props.inputType === 'password'
        ? '0.3rem 2.5rem 0.3rem 0.5rem'
        : '0.3rem 0.5rem'};
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.02);
    outline: none;
    transition: border-bottom-color 0.3s ease-out;

    &:focus {
      border-bottom-color: var(--secondary);
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
`

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
