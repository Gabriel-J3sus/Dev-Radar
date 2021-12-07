import React, { FormEvent, ReactElement, useEffect, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { AuthTemplate } from '@components/sections'
import { Container } from '@styles/pages/signin'
import { Button, CustomInput, UserForm } from '@components/ui'
import { NextPageWithLayout } from '@pages/_app'


const ForgotPassword: NextPageWithLayout = () => {
  const emailRef = useRef<HTMLInputElement>(null)

  async function handleForgotPassword(event: FormEvent) {
    event.preventDefault()

    console.log(emailRef.current.value)
  }

  useEffect(() => {
    if(typeof window !== undefined){
      const url = new URL(window.location.href)

      const params = url.searchParams.get('email')
      
      if(params){
        emailRef.current.value = params
      }
    }
  },[])

  return (
    <>
      <Head>
        <title>Esqueci minha senha | DevRadar</title>
      </Head>
        <UserForm title="Esqueceu sua senha?" handleSubmit={handleForgotPassword}>
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
