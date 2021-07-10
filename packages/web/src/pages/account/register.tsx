import React from 'react'

import { Card } from '../../components/Card'
import { Logo } from '../../components/Logo'

import { Container } from '../../styles/pages/register'

const Register: React.FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <main>
          <Logo SVGfill="logo" title="DevFinder" />

          <p>Encontre amigos e desenvolvedores, em um só lugar.</p>

          <form>
            <h2>Cadastrar</h2>

            <span className="input-container">
              <label>Name</label>
              <input type="text" required />
            </span>

            <span className="input-container">
              <label>Email</label>
              <input type="email" required />
            </span>

            <span className="input-container">
              <label>Tecnologias</label>
              <input type="text" required />
            </span>

            <div className="input-wrapper">
              <span className="input-container">
                <label>Latitude</label>
                <input type="text" required />
              </span>

              <span className="input-container">
                <label>Longitude</label>
                <input type="text" required />
              </span>
            </div>

            <span className="input-container">
              <label>Senha</label>
              <input type="password" required />
            </span>

            <button type="submit">Salvar</button>
          </form>
        </main>

        <aside>
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />

          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            name="Gabriel Jesus"
            technologies="ReactJS, NodeJS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic temporibus porro, voluptas nam molestiae ea nostrum ipsum iure quo consequuntur modi explicabo totam architecto facilis neque. Possimus, iste consectetur!"
            githubLink="#"
          />
        </aside>
      </div>
    </Container>
  )
}

export default Register
