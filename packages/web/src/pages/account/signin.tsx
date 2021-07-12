import React from 'react'

import { AuthTemplate } from '@components/AuthTemplate'
import { Container } from '@styles/pages/signin'

const SignIn: React.FC = () => {
  return (
    <Container>
      <AuthTemplate title="Logar" formType="SignIn" />
    </Container>
  )
}

export default SignIn
