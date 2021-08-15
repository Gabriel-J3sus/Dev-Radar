import styled from 'styled-components'

export const SelectValuesButtonContainer = styled.div`
  button {
    width: 100%;
    height: 100%;
    padding: 0.3rem 0.6rem;
    border-radius: 20px;
    border: 2px solid ${props => props.theme.colors.detail};
    background: transparent;
  }

  .active {
    border: 2px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
  }
`
