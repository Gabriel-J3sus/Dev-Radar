export enum PasswordHeaders {
  FP = 'FORGOT_PASSWORD',
  AP = 'ALTER_PASSWORD'
}

export interface IAlterPasswordBaseProps {
  id: string
  newPassword: string
  requestHeader?: PasswordHeaders
}

export interface IAlterPasswordRequestDTO extends IAlterPasswordBaseProps {
  oldPassword?: string
}
