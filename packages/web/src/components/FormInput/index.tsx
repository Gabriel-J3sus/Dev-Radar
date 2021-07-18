import React, { useState } from 'react'

import { EyeClosedIcon, EyeOpenIcon, FormInputContainer } from './styles'

interface FormInputProps {
  label: string
  inputType: 'email' | 'text' | 'password'
}

export const FormInput: React.FC<FormInputProps> = ({ label, inputType }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  return (
    <FormInputContainer className="input-container">
      <label>{label}</label>
      <input
        type={
          inputType === 'password'
            ? isPasswordShown
              ? 'text'
              : 'password'
            : inputType
        }
        required
      />

      {inputType === 'password' && (
        <button
          className="iconButton"
          type="button"
          onClick={() => setIsPasswordShown(!isPasswordShown)}
        >
          {isPasswordShown ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </button>
      )}
    </FormInputContainer>
  )
}
