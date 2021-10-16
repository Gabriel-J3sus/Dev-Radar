// Igual aos repositories, mas preferi separar a comunicação com serviços externos, ou repetitivos em um lugar só

import { sign } from 'jsonwebtoken'

export class GenerateTokenProvider {
  generator(userId: string): string {
    const token = sign({}, process.env.JWT_SECRET, {
      subject: userId,
      expiresIn: '1h'
    })

    return token
  }
}
