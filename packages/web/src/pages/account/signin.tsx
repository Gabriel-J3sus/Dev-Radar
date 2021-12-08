import React, { FormEvent, ReactElement, useRef, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { AuthTemplate } from '@components/sections'
import { Container } from '@styles/pages/signin'
import { useAuth } from '@hooks/useAuth'
import { Button, CustomInput, PasswordInput, UserForm } from '@components/ui'
import { NextPageWithLayout } from '@pages/_app'

const SignIn: NextPageWithLayout = () => {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const passwordRef = useRef<HTMLInputElement>(null)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await signIn({
      email,
      password: passwordRef.current?.value
    })
  }

  return (
    <>
      <Head>
        <title>Login | DevRadar</title>
      </Head>

      <UserForm title="Login" handleSubmit={handleSignIn}>
        <span className="input-container">
          <label>E-mail</label>
          <CustomInput
            customType="normal"
            className="formInput"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </span>

        <span className="input-container">
          <label>Senha</label>
          <PasswordInput ref={passwordRef} />
        </span>

        <p className="link" style={{ alignSelf: 'self-start' }}>
          <Link
            href="forgot-password"
            as={{ query: { email }, pathname: 'forgot-password' }}
          >
            <a style={{ textDecoration: 'none' }}>Esqueceu sua senha?</a>
          </Link>
        </p>

        <Button type="submit">Entrar</Button>

        <p className="link">
          Deseja criar uma conta?{' '}
          <Link href="register">
            <a>Cadastrar</a>
          </Link>
        </p>
      </UserForm>
    </>
  )
}

SignIn.getLayout = (page: ReactElement) => {
  return (
    <Container>
      <AuthTemplate>{page}</AuthTemplate>
    </Container>
  )
}

export default SignIn
