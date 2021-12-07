import React, { FormEvent } from "react";

import { Form } from './styles'

interface UserFormProps {
    title: string
    handleSubmit(event: FormEvent): Promise<void>
}


export const UserForm: React.FC<UserFormProps> = ({ children, ...props }) => {
    return (
        <Form onSubmit={props.handleSubmit}>
          <h2>{props.title}</h2>

          {children}
        </Form>
    )
}