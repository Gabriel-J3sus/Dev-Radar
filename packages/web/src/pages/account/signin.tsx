import React, { FormEvent, useRef } from 'react'

import { AuthTemplate } from '@components/sections'
import { Container } from '@styles/pages/signin'
import { Card } from '@components/ui'
import { useAuth } from '@hooks/useAuth'

const SignIn: React.FC = () => {
  const { signIn } = useAuth()

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await signIn({
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value
    })
  }

  return (
    <Container>
      <AuthTemplate
        title="Logar"
        formAction={handleSignIn}
        emailInputRef={emailInputRef}
        passwordInputRef={passwordInputRef}
      >
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
