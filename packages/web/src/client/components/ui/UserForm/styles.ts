import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  padding: 2.5em 1.5em 1.25em;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  background: var(--bg-secondary);
  border-radius: 15px;

  > h2 {
    text-align: center;
    color: var(--secondary);
    margin-bottom: 0.75rem;
  }

  > .input-container {
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
      padding: 0.3rem 0.5rem;
    }
  }

  > button {
    margin-top: 1rem;
  }

  .link {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--primary);
    text-align: center;

    > a {
      color: var(--link);
      text-decoration: underline;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`
