import Leaflet from 'leaflet'

export const mapIcon = (userImg: string) =>
  Leaflet.icon({
    iconUrl: userImg,

    iconSize: [45, 45],
    iconAnchor: [0, 0],
    popupAnchor: [20, 0]
  })
