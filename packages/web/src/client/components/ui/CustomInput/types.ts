import React from 'react'
import { CSSProperties } from 'styled-components'

export interface NormalInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  customType: 'normal'
}

export interface TextareaInputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  customType: 'textArea'
}

export type CustomInputType = (NormalInputProps | TextareaInputProps) & {
  type: string
  CSS?: CSSProperties
}
