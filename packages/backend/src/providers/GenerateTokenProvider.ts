// Igual aos repositories, mas preferi separar a comunicação com serviços externos, ou repetitivos em um lugar só

import { sign } from 'jsonwebtoken'

interface GenerateTokenProviderProps {
  userId: string
  expiresIn?: string | number
}

export class GenerateTokenProvider {
  generator({ expiresIn, userId }: GenerateTokenProviderProps): string {
    const token = sign({}, process.env.JWT_SECRET, {
      subject: userId,
      expiresIn: expiresIn || '1d'
    })

    return token
  }
}
