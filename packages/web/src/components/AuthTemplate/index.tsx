import React, { useState } from 'react'
import Link from 'next/link'

import { Card } from '@components/Card'
import { Logo } from '@components/Logo'

import { AuthTemplateContainer, EyeClosedIcon, EyeOpenIcon } from './style'

interface AuthTemplateProps {
  title: 'Logar' | 'Cadastrar'
  formType: 'Register' | 'SignIn'
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  title,
  formType
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  return (
    <AuthTemplateContainer>
      <main>
        <Logo SVGfill="logo" title="DevFinder" />

        <p>Encontre amigos e desenvolvedores, em um só lugar.</p>

        <form>
          <h2>{title}</h2>

          {formType === 'Register' && (
            <span className="input-container">
              <label>Name</label>
              <input type="text" required />
            </span>
          )}
          <span className="input-container">
            <label>Email</label>
            <input type="email" required />
          </span>

          {formType === 'Register' && (
            <span className="input-container">
              <label>Tecnologias</label>
              <input type="text" required />
            </span>
          )}

          {formType === 'Register' && (
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
          )}

          <span className="input-container">
            <label>Senha</label>
            <input type={isPasswordShown ? 'text' : 'password'} required />

            <button
              className="iconButton"
              type="button"
              onClick={() => setIsPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </button>
          </span>

          <button type="submit">
            {formType === 'Register' ? 'Salvar' : 'Entrar'}
          </button>

          {formType === 'Register' ? (
            <p className="link">
              Já possui uma conta?{' '}
              <Link href="signin">
                <a>Clique aqui</a>
              </Link>
            </p>
          ) : (
            <p className="link">
              Deseja criar uma conta?{' '}
              <Link href="register">
                <a>Clique aqui</a>
              </Link>
            </p>
          )}
        </form>
      </main>

      <aside>
        <div className="grid-content">
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
        </div>
      </aside>
    </AuthTemplateContainer>
  )
}
