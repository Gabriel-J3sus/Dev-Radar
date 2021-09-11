import React, { useState, forwardRef, InputHTMLAttributes } from 'react'

import { EyeClosedIcon, EyeOpenIcon, FormInputContainer } from './styles'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  inputType: 'email' | 'text' | 'password' | 'number'
}

const FormInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FormInputProps
> = ({ label, inputType, ...rest }, ref) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  return (
    <FormInputContainer className="input-container" inputType={inputType}>
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
        ref={ref}
        {...rest}
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

export default forwardRef(FormInput)
