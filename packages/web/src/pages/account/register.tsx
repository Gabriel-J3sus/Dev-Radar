import React, { FormEvent, useRef } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import { Container } from '@styles/pages/register'
import { useAuth } from '@hooks/useAuth'

import { AuthTemplate } from '@components/sections'
import { Button, CustomInput, PasswordInput } from '@components/ui'

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
      <Head>
        <title>Cadastro | DevRadar</title>
      </Head>
      <AuthTemplate title="Cadastrar" handleSubmit={handleSignUp}>
        <span className="input-container">
          <label>Nome</label>
          <CustomInput
            customType="normal"
            className="formInput"
            type="text"
            ref={nameRef}
            required
          />
        </span>

        <span className="input-container">
          <label>Nome do usuário</label>
          <CustomInput
            customType="normal"
            className="formInput"
            type="text"
            ref={usernameRef}
            required
          />
        </span>

        <span className="input-container">
          <label>E-mail</label>
          <CustomInput
            customType="normal"
            className="formInput"
            type="text"
            ref={emailRef}
            required
          />
        </span>

        <span className="input-container">
          <label>Senha</label>
          <PasswordInput ref={passwordRef} />
        </span>

        <Button type="submit">Cadastrar</Button>

        <p className="link">
          Já tem uma conta?{' '}
          <Link href="signin">
            <a>Clique aqui</a>
          </Link>
        </p>
      </AuthTemplate>
    </Container>
  )
}

export default Register
