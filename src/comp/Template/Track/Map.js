function Map({ lat, lng }) {
  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: "none" }}
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZ4YsHJ-UaXOd2W95mXMNhrH2SJXNzUPU&q=${lat},${lng}&center=${lat},${lng}&zoom=6`}
      title="map"
    ></iframe>
  )
}

export default Map