import styled from 'styled-components'

export const SelectValuesButtonContainer = styled.div`
  button {
    width: 100%;
    height: 100%;
    padding: 0.3rem 0.6rem;
    border-radius: 20px;
    border: 2px solid var(--detail);
    background: transparent;
    font-size: 0.9rem;
  }

  .active {
    border: 2px solid var(--secondary);
    color: var(--secondary);
  }
`
