import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  padding: 1.25rem;
  background: ${props => props.theme.colors.bgForm};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  transition: transform 0.3s;

  .avatar {
    display: flex;
    align-items: center;
    gap: 1rem;

    .userImg {
      width: 3.37rem;
      height: 3.37rem;
      border-radius: 50%;
    }

    > span {
      display: flex;
      flex-direction: column;

      strong {
        font-family: 'Nunito', 'Roboto', sans-serif;
        color: ${props => props.theme.colors.title};
      }

      p {
        font-size: 0.8rem;
        color: ${props => props.theme.colors.detail};
      }
    }
  }

  a,
  p {
    font-size: 0.875rem;
  }

  > p {
    line-height: 20px;
  }

  a {
    color: ${props => props.theme.colors.secondary};
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  &:hover {
    transform: translateY(5px);
  }
`
