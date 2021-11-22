import React, { FormEvent, useRef } from 'react'

import { AuthTemplate } from '@components/sections'
import { Container } from '@styles/pages/signin'
import { useAuth } from '@hooks/useAuth'
import FormInput from '@components/ui/FormInput'
import Link from 'next/link'
import { Button } from '@components/ui'

const SignIn: React.FC = () => {
  const { signIn } = useAuth()

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await signIn({
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value
    })
  }

  return (
    <Container>
      <AuthTemplate title="Logar" handleSubmit={handleSignIn}>
        <FormInput
          label="E-mail"
          inputType="email"
          ref={emailInputRef}
          required
        />

        <FormInput
          label="Senha"
          inputType="password"
          ref={passwordInputRef}
          required
        />

        <Button type="submit">Entrar</Button>

        <p className="link">
          Deseja criar uma conta?{' '}
          <Link href="register">
            <a>Clique aqui</a>
          </Link>
        </p>
      </AuthTemplate>
    </Container>
  )
}

export default SignIn
