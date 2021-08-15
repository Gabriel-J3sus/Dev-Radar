import React, { FormEvent, useRef, useState } from 'react'
import Link from 'next/link'

import { Logo } from '@components/Logo'

import { AuthTemplateContainer } from './style'
import FormInput from '@components/FormInput'

interface AuthTemplateProps {
  title: 'Logar'
  emailInputRef?: React.MutableRefObject<HTMLInputElement>
  passwordInputRef?: React.MutableRefObject<HTMLInputElement>
  formAction(event: FormEvent): Promise<void>
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  title,
  emailInputRef,
  passwordInputRef,
  formAction,
  children
}) => {
  return (
    <AuthTemplateContainer>
      <main>
        <Logo SVGfill="logo" size="4.18rem" title="DevFinder" />

        <p>Encontre amigos e desenvolvedores, em um só lugar.</p>

        <form onSubmit={formAction}>
          <h2>{title}</h2>

          <FormInput label="Email" inputType="email" ref={emailInputRef} />

          <FormInput
            label="Senha"
            inputType="password"
            ref={passwordInputRef}
          />

          <button type="submit">Entrar</button>

          <p className="link">
            Deseja criar uma conta?{' '}
            <Link href="register">
              <a>Clique aqui</a>
            </Link>
          </p>
        </form>
      </main>

      <aside>
        <div className="grid-content">{children}</div>
      </aside>
    </AuthTemplateContainer>
  )
}
