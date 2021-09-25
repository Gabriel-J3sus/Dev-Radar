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
