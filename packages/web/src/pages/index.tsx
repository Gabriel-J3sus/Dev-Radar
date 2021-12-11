import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'

import { SearchIcon } from '@components/icons'
import { Header } from '@components/sections'
import { Button, Card, CustomInput } from '@components/ui'

import { HomeContainer, CardsWrapper } from '@styles/pages/home'
import { Logo } from '@components/Logo'
import Head from 'next/head'
import { useTheme } from '@contexts/ThemeContext'

const Home: React.FC = () => {
  const { reload } = useRouter()
  const { theme } = useTheme()
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const coordenates: Record<'latitude' | 'longitude', number> = {
    latitude,
    longitude
  }

  const MapWithoutSSR = useMemo(
    () =>
      dynamic(() => import('src/client/components/Map'), {
        ssr: false
      }),
    [theme]
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
        timeout: 3000
      }
    )
  }, [])

  return (
    <HomeContainer>
      <Head>
        <title>Mapa | DevRadar</title>
      </Head>
      <Header search={isSearchActive} setSearch={setIsSearchActive} />

      <MapWithoutSSR coordinates={coordenates} />

      <CardsWrapper isSearchMode={isSearchActive}>
        <Button
          className="solid-button"
          onClick={() => setIsSearchActive(!isSearchActive)}
        >
          <SearchIcon size={24} color="var(--white)" />
        </Button>
        <div className="wrapper">
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
              placeholder="Pesquisar"
            />
            <Button className="solid-button">
              <SearchIcon size={24} color="#var(--white)" />
            </Button>
          </span>
        </div>
      </CardsWrapper>

      <div className="logo" onClick={reload}>
        <Logo SVGfill="logo" size="3.75rem" />
      </div>
    </HomeContainer>
  )
}

export default Home
