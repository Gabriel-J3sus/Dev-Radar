import styled from 'styled-components'

export const SideBarContainer = styled.aside`
  max-width: 380px;
  height: 100%;
  padding: 1.5rem 1.5rem 3.125rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${props => props.theme.colors.bg};
  box-shadow: -2px -1px 20px 0px ${props => props.theme.colors.secondary};

  > aside {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  .logout-button {
    width: 4.2rem;
    height: 4.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.colors.secondary};
    border-radius: 20px;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
