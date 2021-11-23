import React, { useState } from 'react'

import {
  NormalInput,
  EyeOpenIcon,
  EyeClosedIcon,
  PasswordInputContainer
} from './style'
import { CustomInputType } from './types'

export const CustomInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  CustomInputType
>(({ customType, CSS, ...rest }, ref) => {
  switch (customType) {
    case 'normal':
      return (
        <NormalInput
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          ref={ref as React.Ref<HTMLInputElement>}
          style={CSS}
        />
      )
    case 'textArea':
      return (
        <textarea
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          style={CSS}
        />
      )

    default:
      throw new Error('Input must have a customType')
  }
})

export const PasswordInput = React.forwardRef<HTMLInputElement>(
  ({ ...rest }, ref) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    return (
      <PasswordInputContainer>
        <CustomInput
          customType="normal"
          className="formInput"
          type={isPasswordShown ? 'text' : 'password'}
          ref={ref}
          required
          {...rest}
        />
        <button
          className="iconButton"
          type="button"
          onClick={() => setIsPasswordShown(!isPasswordShown)}
        >
          {isPasswordShown ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </button>
      </PasswordInputContainer>
    )
  }
)
