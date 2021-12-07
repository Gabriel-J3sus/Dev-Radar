import React, { FormEvent, ReactElement } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { AuthTemplate } from '@components/sections'
import { Container } from '@styles/pages/signin'
import { Button, UserForm } from '@components/ui'
import { NextPageWithLayout } from '@pages/_app'

const ForgotPassword: NextPageWithLayout = () => {
  async function handleResetPassword(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Esqueci minha senha | DevRadar</title>
      </Head>
      
        <UserForm title="Resetae senha" handleSubmit={handleResetPassword}>
          <span className="input-container">
            <label>E-mail</label>
            {/* <CustomInput
              customType="normal"
              className="formInput"
              type="email"
              ref={emailRef}
              required
            /> */}
          </span>

          <Button type="submit">Enviar solicitação</Button>

          <p className="link">
            Lembrou sua senha?{' '}
            <Link href="signin">
              <a>Clique aqui</a>
            </Link>
          </p>
        </UserForm>
      
    </>
  )
}

ForgotPassword.getLayout = (page: ReactElement) => {
  return (
    <Container>
      <AuthTemplate>
        {page}
      </AuthTemplate>
    </Container>
  )
}

export default ForgotPassword
