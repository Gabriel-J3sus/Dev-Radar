import React from 'react'
import { LogOutIcon, MessageOutlineIcon, SearchIcon } from '@components/icons'

import { HeaderContainer } from './style'

interface HeaderProps {
  search: boolean;
  setSearch(x: boolean): void;
}

export const Header: React.FC<HeaderProps> = ({ search, setSearch, children }) => {
  return (
    <HeaderContainer>
      <button className="logout-button">
        <MessageOutlineIcon size={28} color="#FFF" />
      </button>
      <button className="logout-button" onClick={() => setSearch(!search)} style={search ? { opacity: 1 } : {}}>
        <SearchIcon size={24} color="#FFF"/>
      </button>
      <button className="logout-button">
        <LogOutIcon size={28} fill="#FFF" />
      </button>
    </HeaderContainer>
  )
}
