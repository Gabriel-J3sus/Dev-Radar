import React, { FormEvent } from 'react'

import { Logo } from '@components/icons'

import { AuthTemplateContainer } from './style'
import { Card } from '@components/ui'

export const AuthTemplate: React.FC = ({
  children
}) => {
  return (
    <AuthTemplateContainer>
      <main>
        <Logo SVGfill="logo" size="4.18rem" title="DevFinder" />

        <strong>Encontre amigos e desenvolvedores, em um só lugar.</strong>

        {children}
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
