import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'

import { SearchIcon } from '@components/icons'
import { Header } from '@components/sections'
import { Button, Card, CustomInput } from '@components/ui'

import { HomeContainer, CardsWrapper } from '@styles/pages/home'
import { Logo } from '@components/Logo'
import Head from 'next/head'

const Home: React.FC = () => {
  const { reload } = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const coordenates: Record<'latitude' | 'longitude', number> = {
    latitude,
    longitude
  }

  const MapWithoutSSR = useMemo(
    () => dynamic(() => import('src/client/components/Map'), { ssr: false }),
    [latitude, longitude]
  )

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
      <Head>
        <title>Mapa | DevRadar</title>
      </Head>
      <Header search={isSearchOpen} setSearch={setIsSearchOpen} />

      <MapWithoutSSR coordinates={coordenates} />

      <CardsWrapper isSearchMode={isSearchOpen}>
        <div className="content">
          {Array(10).fill(
            <Card
              avatar="https://github.com/Gabriel-J3sus.png"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum qui corporis delectus aperiam corrupti laudantium sequi eius neque iusto? Maxime in temporibus"
              githubLink="#"
              name="Gabriel Jesus"
              technologies="ReactJS"
            />
          )}
        </div>

        <span>
          <CustomInput
            customType="normal"
            className="default"
            type="text"
            placeholder="Pesquisar por tecnologia..."
          />
          <Button className="solid-button">
            <SearchIcon size={24} color="#FFF" />
          </Button>
        </span>
      </CardsWrapper>

      <div className="logo" onClick={reload}>
        <Logo SVGfill="logo" size="3.75rem" />
      </div>
    </HomeContainer>
  )
}

export default Home
