type baseTemplate = {
  opts?: ejs.Options
}
interface CreateUserMailTemplate extends baseTemplate {
  name: 'CreateUserMailTemplate'
  args?: {
    username: string
  }
}
interface ForgotPasswordMailTemplate extends baseTemplate {
  name: 'ForgotPasswordMailTemplate'
  args?: {
    token: string
  }
}

interface NewPasswordMailTemplate extends baseTemplate {
  name: 'NewPasswordMailTemplate'
  args?: {
    pinto: string
  }
}

export type IEjsProvider =
  | CreateUserMailTemplate
  | ForgotPasswordMailTemplate
  | NewPasswordMailTemplate
