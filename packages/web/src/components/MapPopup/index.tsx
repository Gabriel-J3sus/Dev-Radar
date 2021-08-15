import React from 'react'
import {
  MapPopupContainer,
  GithubIcon,
  MessageIcon,
  ArrowRightIcon
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
