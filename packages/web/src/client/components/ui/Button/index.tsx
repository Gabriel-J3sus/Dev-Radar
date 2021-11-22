import { ButtonContainer } from './style'

type PropsExtended = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button: React.FC<PropsExtended> = ({ children, ref, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>
}
