import React, { memo } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

// import { mapIcon } from '@utils/mapIcon'

interface MapProps {
  coordinates?: [number, number]
}

const Map: React.FC<MapProps> = ({ coordinates }) => {
  return (
    <MapContainer
      zoom={13}
      center={coordinates}
      fadeAnimation
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url={
          'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidWJlcnNoNGRvdyIsImEiOiJja2c2eHliMmwwMjFoMnhtdXlldWxrYnU5In0.3phm7wmXOpv3Je9oSLwkfw'
        }
      />

      <Marker position={coordinates} />
    </MapContainer>
  )
}

export default memo(
  Map,
  (prevProps, nextProps) =>
    prevProps.coordinates[0] !== nextProps.coordinates[0]
)
