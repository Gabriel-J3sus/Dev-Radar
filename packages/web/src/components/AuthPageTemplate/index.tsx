import React, { useState } from 'react'
import Link from 'next/link'

import { Logo } from '@components/Logo'

import { AuthTemplateContainer } from './style'
import { FormInput } from '@components/FormInput'

interface AuthTemplateProps {
  title: 'Logar'
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  title,
  children
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  return (
    <AuthTemplateContainer>
      <main>
        <Logo SVGfill="logo" title="DevFinder" />

        <p>Encontre amigos e desenvolvedores, em um só lugar.</p>

        <form>
          <h2>{title}</h2>

          {/* {formType === 'Register' && (
            <span className="input-container">
              <label>Name</label>
              <input type="text" required />
            </span>
          )} */}
          <FormInput label="Email" inputType="email" />

          {/* {formType === 'Register' && (
            <span className="input-container">
              <label>Tecnologias</label>
              <input type="text" required />
            </span>
          )} */}

          {/* {formType === 'Register' && (
            <div className="local-inputs">
              <div className="input-wrapper">
                <span className="input-container">
                  <label>Latitude</label>
                  <input type="text" required />
                </span>

                <span className="input-container">
                  <label>Longitude</label>
                  <input type="text" required />
                </span>
              </div>

              <p>Clique no mapa ou permita acesso a sua localização.</p>
            </div>
          )} */}

          <FormInput label="Senha" inputType="password" />

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
