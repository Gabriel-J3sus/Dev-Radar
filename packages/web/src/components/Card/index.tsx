import React from 'react'
import { CardContainer } from './style'

interface CardProps {
  avatar: string
  name: string
  technologies: string
  description: string
  githubLink: string
}

export const Card: React.FC<CardProps> = ({
  avatar,
  name,
  technologies,
  description,
  githubLink
}) => {
  return (
    <CardContainer>
      <div className="avatar">
        <img src={avatar} alt={name} className="userImg" />

        <span>
          <strong>{name}</strong>
          <p>{technologies}</p>
        </span>
      </div>

      <p>
        {description.length > 200
          ? description.substring(0, 150) + '...'
          : description}
      </p>

      <a href={githubLink}>Acessar perfil no Github</a>
    </CardContainer>
  )
}
