import React from 'react'
import { LogOutIcon, MessageOutlineIcon, SearchIcon } from '@components/icons'

import { HeaderContainer } from './style'
import { CSSProperties } from 'styled-components'
import { Button } from '@components/ui'

interface HeaderProps {
  search: boolean
  setSearch(x: boolean): void
  CSS?: CSSProperties
}

export const Header: React.FC<HeaderProps> = ({ search, setSearch, CSS }) => {
  return (
    <HeaderContainer style={CSS}>
      <Button
        className="solid-button drop-shadow"
        style={{ transform: 'scale(0.9)' }}
      >
        <MessageOutlineIcon size={28} color="#FFF" />
      </Button>
      <Button
        className="solid-button drop-shadow"
        onClick={() => setSearch(!search)}
        style={search ? { opacity: 1 } : {}}
      >
        <SearchIcon size={24} color="#FFF" />
      </Button>
      <Button
        className="solid-button drop-shadow"
        style={{ transform: 'scale(0.9)' }}
      >
        <LogOutIcon size={28} fill="#FFF" />
      </Button>
    </HeaderContainer>
  )
}
