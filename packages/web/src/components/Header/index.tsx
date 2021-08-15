import React from 'react'
import { AiOutlinePoweroff, AiOutlineMessage } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

import { HeaderContainer } from './style'

interface HeaderProps {
  search: boolean;
  setSearch(x: boolean): void;
}

export const Header: React.FC<HeaderProps> = ({ search, setSearch, children }) => {
  return (
    <HeaderContainer>
      <button className="logout-button">
        <AiOutlineMessage size={28} color="#FFF" />
      </button>
      <button className="logout-button" onClick={() => setSearch(!search)} style={search ? { opacity: 1 } : {}}>
        <BsSearch size={24} color="#FFF"/>
      </button>
      <button className="logout-button">
        <AiOutlinePoweroff size={28} fill="#FFF" />
      </button>
    </HeaderContainer>
  )
}
