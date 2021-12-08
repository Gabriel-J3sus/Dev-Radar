import React, { FormEvent, ReactElement, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { AuthTemplate } from '@components/sections'
import { Container } from '@styles/pages/signin'
import { Button, CustomInput, PasswordInput, UserForm } from '@components/ui'
import { NextPageWithLayout } from '@pages/_app'
import toast from 'react-hot-toast'

const ResetPassword: NextPageWithLayout = () => {
  const newPasswordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  async function handleResetPassword(event: FormEvent) {
    event.preventDefault()

    const newPassword = newPasswordRef.current.value
    const passwordConfirmation = confirmPasswordRef.current.value

    if (newPassword === passwordConfirmation) {
      console.log(newPassword)
      toast.success('Senha alterada com sucesso!!!')
    } else {
      toast.error('Senha incorreta!!!')
    }
  }

  return (
    <>
      <Head>
        <title>Esqueci minha senha | DevRadar</title>
      </Head>

      <UserForm title="Resetar senha" handleSubmit={handleResetPassword}>
        <span className="input-container">
          <label>Nova senha</label>
          <PasswordInput ref={newPasswordRef} />
        </span>
        <span className="input-container">
          <label>Confirmar senha</label>
          <PasswordInput ref={confirmPasswordRef} />
        </span>

        <Button type="submit">Enviar solicitação</Button>
      </UserForm>
    </>
  )
}

ResetPassword.getLayout = (page: ReactElement) => {
  return (
    <Container>
      <AuthTemplate>{page}</AuthTemplate>
    </Container>
  )
}

export default ResetPassword
