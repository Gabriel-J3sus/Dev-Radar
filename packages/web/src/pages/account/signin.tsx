import React, { FormEvent, ReactElement, useRef } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { AuthTemplate } from '@components/sections'
import { Container } from '@styles/pages/signin'
import { useAuth } from '@hooks/useAuth'
import { Button, CustomInput, PasswordInput } from '@components/ui'
import { NextPageWithLayout } from '@pages/_app'

const SignIn: NextPageWithLayout = () => {
  const { signIn } = useAuth()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await signIn({
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    })
  }

  return (
    <AuthTemplate title="Logar" handleSubmit={handleSignIn}>
      <span className="input-container">
        <label>E-mail</label>
        <CustomInput
          customType="normal"
          className="formInput"
          type="email"
          ref={emailRef}
          required
        />
      </span>

      <span className="input-container">
        <label>Senha</label>
        <PasswordInput ref={passwordRef} />
      </span>

      <Button type="submit">Entrar</Button>

      <p className="link">
        Deseja criar uma conta?{' '}
        <Link href="register">
          <a>Clique aqui</a>
        </Link>
      </p>
    </AuthTemplate>
  )
}

SignIn.getLayout = (page: ReactElement) => {
  return (
    <Container>
      <Head>
        <title>Login | DevRadar</title>
      </Head>
      {page}
    </Container>
  )
}

export default SignIn
