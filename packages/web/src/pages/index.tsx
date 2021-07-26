import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { HomeContainer } from '@styles/pages/home'
import { SideBar } from '@components/SideBar'

import Map from '@components/Map'
import { Card } from '@components/Card'

const Home: React.FC = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const MapWithoutSSR = dynamic(() => import('@components/Map'), { ssr: false })

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
    <HomeContainer>
      <SideBar>
        <div className="user-content">
          <p> Meu Perfil </p>

          <Card
            avatar="https://github.com/Gabriel-J3sus.png"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum qui corporis delectus aperiam corrupti laudantium sequi eius neque iusto? Maxime in temporibus"
            githubLink="#"
            name="Gabriel Jesus"
            technologies="ReactJS"
          />
        </div>
      </SideBar>

      <main className="map-container">
        <MapWithoutSSR coordinates={[latitude, longitude]} />
      </main>
    </HomeContainer>
  )
}

export default Home
