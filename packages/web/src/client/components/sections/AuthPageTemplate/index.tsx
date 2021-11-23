import React, { FormEvent } from 'react'

import { Logo } from '@components/icons'

import { AuthTemplateContainer } from './style'
import { Card } from '@components/ui'

interface AuthTemplateProps {
  title: string
  handleSubmit(event: FormEvent): Promise<void>
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  children,
  ...props
}) => {
  return (
    <AuthTemplateContainer>
      <main>
        <Logo SVGfill="logo" size="4.18rem" title="DevFinder" />

        <strong>Encontre amigos e desenvolvedores, em um só lugar.</strong>

        <form onSubmit={props.handleSubmit}>
          <h2>{props.title}</h2>

          {children}
        </form>
      </main>

      <aside>
        <div className="grid-content">
          {new Array(10).fill(
            <Card
              avatar="https://github.com/Gabriel-J3sus.png"
              name="Gabriel Jesus"
              technologies="ReactJS, NodeJS"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
              githubLink="#"
            />
          )}
        </div>
      </aside>
    </AuthTemplateContainer>
  )
}
