import React, { FormEvent, ReactElement, useRef } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { AuthTemplate } from '@components/sections'
import { Container } from '@styles/pages/signin'
import { useAuth } from '@hooks/useAuth'
import { Button, CustomInput, PasswordInput } from '@components/ui'
import { NextPageWithLayout } from '@pages/_app'
import { useRouter } from 'next/dist/client/router'

const ForgotPassword: NextPageWithLayout = () => {
  const router = useRouter()
  const { signIn } = useAuth()
  console.log(router.query)
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
    <>
      <Head>
        <title>Esqueci minha senha | DevRadar</title>
      </Head>
      <AuthTemplate title="Esqueceu sua senha?" handleSubmit={handleSignIn}>
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

        <Button type="submit">Enviar solicitação</Button>

        <p className="link">
          Lembrou sua senha?{' '}
          <Link href="signin">
            <a>Clique aqui</a>
          </Link>
        </p>
      </AuthTemplate>
    </>
  )
}

ForgotPassword.getLayout = (page: ReactElement) => {
  return <Container>{page}</Container>
}

export default ForgotPassword
