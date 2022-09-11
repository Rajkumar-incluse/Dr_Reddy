import { memo, useState, useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// import { useEffect } from 'react';

const containerStyle = {
  width: '100%',
  height: '100%'
};

// const center = {
//   lat: 17.3850,
//   lng: 78.4867
// };

const libraries = ["places"]

function GMap({ lat = '', lng = '', center: center2 }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCZ4YsHJ-UaXOd2W95mXMNhrH2SJXNzUPU",
    libraries
  })

  const [map, setMap] = useState(null)
  // const [center, setCenter] = useState({
  //   lat: lat ? Number(lat) : 17.3850,
  //   lng: lng ? Number(lng) : 78.4867,
  // })

  // useEffect(() => {
  //   setCenter({
  //     lat: lat ? Number(lat) : 17.3850,
  //     lng: lng ? Number(lng) : 78.4867,
  //   })
  // }, [lat, lng])

  // const [direction, setDirection] = useState(null)

  // useEffect(() => {
  //   async function getDirection() {
  //     const directService = new window.google.maps.DirectionsService()
  //     const result = await directService.route({
  //       origin: origin || 'hydrapad',
  //       destination: destination || 'delhi',
  //       travelMode: window.google.maps.TravelMode.DRIVING
  //     })
  //     setDirection(result)
  //   }

  //   if (map) {
  //     getDirection()
  //   }
  // }, [map, destination, origin])

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center2)
    map.fitBounds(bounds);
    setMap(map)
  }, [center2])

  console.log(center2)

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  if (!isLoaded && !map) return <div>Loading...</div>

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onUnmount={onUnmount}
      onLoad={onLoad}
      center={center2}
      zoom={8}
    >
      <Marker position={center2} />
      {/* {
        direction &&
        <DirectionsRenderer directions={direction} />
      } */}
    </GoogleMap>
  )
}

export default memo(GMap)