import { memo, useEffect, useState, useCallback } from 'react'
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 17.3850,
  lng: 78.4867
};

function GMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCZ4YsHJ-UaXOd2W95mXMNhrH2SJXNzUPU",
    libraries: ["places"]
  })

  const [map, setMap] = useState(null)
  const [direction, setDirection] = useState(null)

  useEffect(() => {
    async function getDirection() {
      const directService = new window.google.maps.DirectionsService()
      const result = await directService.route({
        origin: 'hydrapad',
        destination: 'delhi',
        travelMode: window.google.maps.TravelMode.DRIVING
      })
      setDirection(result)
    }

    if (map) {
      getDirection()
    }
  }, [map])

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      {
        direction &&
        <DirectionsRenderer directions={direction} />
      }
    </GoogleMap>
  )
}

export default memo(GMap)