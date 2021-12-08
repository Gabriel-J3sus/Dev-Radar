import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  min-height: 2.75rem;
  margin-top: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background: var(--secondary);
  color: var(--bgForm);
  border-radius: 7px;
  border: 2px solid transparent;
  font-weight: 700;
  transition: all 0.3s;

  &.solid-button {
    &:hover {
      background: var(--secondary);
      color: var(--bgForm);
      filter: brightness(0.8);
    }
  }

  &:hover {
    background: var(--bgForm);
    color: var(--secondary);
    border: 2px solid var(--secondary);
  }

  &:active {
    transform: scale(1.01);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`
