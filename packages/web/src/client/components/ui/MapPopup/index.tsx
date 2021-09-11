import React from 'react'
import {
  MapPopupContainer,
  GithubIconStyle as GithubIcon,
  MessageIconStyle as MessageIcon,
  ArrowRightIconStyle as ArrowRightIcon
} from './style'

export const MapPopup: React.FC = () => {
  return (
    <MapPopupContainer>
      <div className="user">
        <span>
          <strong>gabriel</strong>
          <p>reactjs</p>
        </span>

        <button>
          <ArrowRightIcon />
        </button>
      </div>
      <span>
        <GithubIcon />
        <MessageIcon />
      </span>
    </MapPopupContainer>
  )
}
