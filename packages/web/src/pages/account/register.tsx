import React from 'react'

import { AuthTemplate } from '@components/AuthTemplate'
import { Container } from '@styles/pages/register'

const Register: React.FC = () => {
  return (
    <Container>
      <AuthTemplate title="Cadastrar" formType="Register" />
    </Container>
  )
}

export default Register
