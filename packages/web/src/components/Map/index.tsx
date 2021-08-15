import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

import { mapIcon } from '@utils/mapIcon'
import { Card } from '@components/Card'
import { MapPopup } from '@components/MapPopup'

interface MapProps {
  coordinates: Record<'latitude' | 'longitude', number>
}

const Map: React.FC<MapProps> = ({ coordinates }) => {
  return (
    <MapContainer
      zoom={13}
      center={[coordinates.latitude, coordinates.longitude]}
      fadeAnimation
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url={
          'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidWJlcnNoNGRvdyIsImEiOiJja2c2eHliMmwwMjFoMnhtdXlldWxrYnU5In0.3phm7wmXOpv3Je9oSLwkfw'
        }
      />

      <Marker
        icon={mapIcon('https://github.com/Gabriel-J3sus.png')}
        position={[coordinates.latitude, coordinates.longitude]}
      >
        <Popup
          closeButton={false}
          minWidth={240}
          maxWidth={240}
          className="map-popup"
        >
          <MapPopup />
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
