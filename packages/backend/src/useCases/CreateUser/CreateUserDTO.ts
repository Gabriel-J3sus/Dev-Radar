// Data Transfer Object
// transfere de uma camada para outra: controller (camada de infraestrutura) para o useCase (camada interna)
// determina como vai ser a transferencia dos dados do controller para o useCase

export interface ICreateUserRequestDTO {
  name: string
  username: string
  email: string
  password: string
}
