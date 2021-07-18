import React from 'react'

import { AuthTemplate } from '@components/AuthPageTemplate'
import { Container } from '@styles/pages/signin'
import { Card } from '@components/Card'

const SignIn: React.FC = () => {
  return (
    <Container>
      <AuthTemplate title="Logar">
        <Card
          avatar="https://github.com/Gabriel-J3sus.png"
          name="Gabriel Jesus"
          technologies="ReactJS, NodeJS"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
          githubLink="#"
        />
      </AuthTemplate>
    </Container>
  )
}

export default SignIn
