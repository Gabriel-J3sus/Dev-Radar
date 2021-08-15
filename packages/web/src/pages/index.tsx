import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/dist/client/router'
import { BsSearch } from 'react-icons/bs'
import dynamic from 'next/dynamic'

import { Header } from '@components/Header'
import { Card } from '@components/Card'

import { HomeContainer, CardsWrapper } from '@styles/pages/home'
import { Logo } from '@components/Logo'

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
    () => dynamic(() => import('@components/Map'), { ssr: false }),
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
          <input type="text" placeholder="Pesquisar por tecnologia..." />
          <button className="search-button">
            <BsSearch size={24} color="#FFF" />
          </button>
        </span>
      </CardsWrapper>

      <div className="logo" onClick={reload}>
        <Logo SVGfill="logo" size="3.75rem" />
      </div>
    </HomeContainer>
  )
}

export default Home
