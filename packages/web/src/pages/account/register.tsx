import React, { FormEvent, useRef } from 'react'
import Link from 'next/link'

import { Container } from '@styles/pages/register'
import FormInput from '@components/ui/FormInput'
import { useAuth } from '@hooks/useAuth'
import { NextPage } from 'next'
import { AuthTemplate } from '@components/sections'
import { Button } from '@components/ui'

const Register: NextPage = () => {
  const { register } = useAuth()
  const nameRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  async function handleSignUp(event: FormEvent) {
    event.preventDefault()

    await register({
      name: nameRef.current?.value,
      username: usernameRef?.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    })
  }

  return (
    <Container>
      <AuthTemplate title="Cadastrar" handleSubmit={handleSignUp}>
        <FormInput label="Nome" inputType="text" ref={nameRef} required />

        <FormInput
          label="Nome do usuário"
          inputType="text"
          ref={usernameRef}
          required
        />

        <FormInput label="E-mail" inputType="email" ref={emailRef} required />

        <FormInput
          label="Sennha"
          inputType="password"
          ref={passwordRef}
          required
        />

        <Button type="submit">Cadastrar</Button>

        <p className="link">
          Já tem uma conta?{' '}
          <Link href="register">
            <a>Clique aqui</a>
          </Link>
        </p>
      </AuthTemplate>
    </Container>
  )
}

export default Register
