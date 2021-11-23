import { CustomInputType } from './types'

export const CustomInput: React.FC<CustomInputType> = ({ ...rest }) => {
  switch (rest.customType) {
    case 'normal':
      break
    case 'textArea':
      break

    default:
      throw new Error('Input must have a customType')
  }
}
