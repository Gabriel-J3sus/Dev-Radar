import React, { FormEvent, useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Container } from '@styles/pages/register'
import { Logo } from '@components/Logo'
import Link from 'next/link'
import { FormInput } from '@components/FormInput'

const Register: React.FC = ({ children }) => {
  const formData = useRef({
    name: '',
    email: '',
    technologies: '',
    latitude: 0,
    longitude: 0,
    password: ''
  })
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const MapWithoutSSR = dynamic(() => import('@components/Map'), { ssr: false })

  function handleSubmit() {
    console.log('okkssssk')
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      err => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  return (
    <Container>
      <div className="wrapper">
        <main>
          <span>
            <Logo SVGfill="logo" title="DevFinder" />

            <p>Crie uma conta e encontre parceiros, em um só lugar.</p>
          </span>
          <Stepper submitFunction={() => handleSubmit()}>
            <div className="step-container">
              <FormInput label="Nome" inputType="text" />
              <FormInput label="Email" inputType="email" />
              <FormInput label="Tecnologias" inputType="text" />
            </div>

            <div className="step-container local-inputs">
              <div className="input-wrapper">
                <FormInput label="Latitude" inputType="text" />

                <FormInput label="Longitude" inputType="text" />
              </div>

              <p>Clique no mapa ou permita acesso a sua localização.</p>
            </div>
            <div className="step-container">
              <FormInput label="Senha" inputType="password" />
            </div>
          </Stepper>
        </main>

        <aside>
          <MapWithoutSSR coordinates={[latitude, longitude]} />
        </aside>
      </div>
    </Container>
  )
}

export default Register

interface StepperProps {
  submitFunction(): void
}

const Stepper: React.FC<StepperProps> = ({ children, submitFunction }) => {
  const [step, setStep] = useState(0)
  const childrenArray = React.Children.toArray(children)
  const currentChild = childrenArray[step]

  function isLastStep() {
    return step === childrenArray.length - 1
  }

  return (
    <form
      onSubmit={(event: FormEvent) => {
        event.preventDefault()

        if (isLastStep()) {
          submitFunction()
        } else {
          setStep(st => st + 1)
        }
      }}
    >
      <h2>Cadastrar</h2>

      {currentChild}

      <div className="controlls">
        {step > 0 ? (
          <button
            type="button"
            className="back"
            onClick={() => setStep(st => st - 1)}
          >
            Voltar
          </button>
        ) : null}

        <button type="submit" className="submit">
          {isLastStep() ? 'Cadastrar' : 'Avançar'}
        </button>
      </div>

      <p className="link">
        Deseja criar uma conta?{' '}
        <Link href="signin">
          <a>Clique aqui</a>
        </Link>
      </p>
    </form>
  )
}
