
function TxtBlock({ title = '', val = '' }) {
  return (
    <div className='df'>
      <strong className='block'>{title}</strong>
      <strong>:</strong>
      <div>{val}</div>
    </div>
  )
}

export default TxtBlock