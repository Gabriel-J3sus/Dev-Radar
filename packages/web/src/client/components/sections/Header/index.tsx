import React from 'react'
import { LogOutIcon, MapIcon, MessageOutlineIcon, SearchIcon } from '@components/icons'

import { HeaderContainer } from './style'
import { CSSProperties } from 'styled-components'
import { Button } from '@components/ui'
import { useRouter } from 'next/dist/client/router'

interface HeaderProps {
  search: boolean
  setSearch(x: boolean): void
  CSS?: CSSProperties
}

type UrlHeaderLocations = "chat" | "map" | "perfil"

const urlPathname: Partial<Record<UrlHeaderLocations, string>> = {
  chat: '/#',
  map: '/',
  perfil: '/#',
}

export const Header: React.FC<HeaderProps> = ({ search, setSearch, CSS }) => {
  const router = useRouter()

  return (
    <HeaderContainer style={CSS}>
      <Button
        className="solid-button"
        style={ router.pathname !== urlPathname.chat ? { transform: 'scale(0.9)', opacity: 0.75 } : {}}
      >
        <MessageOutlineIcon size={28} color="#FFF" />
      </Button>
      
      {/* <Button
        className="solid-button"
        onClick={() => setSearch(!search)}
        style={search ? { opacity: 1 } : {}}
      >
        <SearchIcon size={24} color="#FFF" />
      </Button> */}

      <Button
        className="solid-button"
        style={ router.pathname !== urlPathname.map ? { transform: 'scale(0.9)', opacity: 0.75 } : {}}
      >
        <MapIcon size={32} fill="#FFF" />
      </Button>

      <Button
        className="solid-button"
        style={ router.pathname !== urlPathname.perfil ? { transform: 'scale(0.9)', opacity: 0.75 } : {}}
      >
        <LogOutIcon size={28} fill="#FFF" />
      </Button>
    </HeaderContainer>
  )
}
