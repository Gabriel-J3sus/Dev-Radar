import React from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'

import { SideBarContainer } from './style'
import { Logo } from '@components/Logo'

export const SideBar: React.FC = ({ children }) => {
  return (
    <SideBarContainer>
      <aside>
        <Logo SVGfill="logo" title="DevFinder" titleColor="title" />
        {/* <Logo SVGfill="logo" /> */}
        <h2>Encontre desenvolvedores ao redor do mundo.</h2>
      </aside>

      {children}

      <button className="logout-button">
        <AiOutlinePoweroff size={32} fill="#FFF" />
      </button>
    </SideBarContainer>
  )
}
