import styled from 'styled-components'

export const ButtonContainer = styled.button`
  min-height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background: var(--dark-purple);
  color: var(--white);
  border-radius: 7px;
  border: 2px solid transparent;
  font-weight: 700;
  transition: all 0.3s;

  &.solid-button {
    &:hover {
      background: var(--purple);
      color: var(--white);
      filter: brightness(0.8);
    }
  }

  &:hover {
    background: var(--bg-secondary);
    color: var(--purple);
    border: 2px solid var(--purple);
  }

  &:active {
    transform: scale(1.01);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`
