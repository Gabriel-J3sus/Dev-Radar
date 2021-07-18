import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import styled from 'styled-components'

export const FormInputContainer = styled.span`
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
