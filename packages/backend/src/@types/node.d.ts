export {}

type EnvString = Record<
  | 'DATABASE_URL'
  | 'JWT_SECRET'
  | 'NODEMAILER_HOST'
  | 'NODEMAILER_USER'
  | 'NODEMAILER_PASSWORD',
  string
>

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvString {
      NODEMAILER_PORT: number
    }
  }
}
