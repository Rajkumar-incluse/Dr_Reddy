
function ThreeBtns({ type, clkView = () => { }, clkUpload = () => { } }) {
  return (
    <>
      {
        type === "View" ?
          <div className="df">
            <button
              className='w-20 py-0.5 text-sm rounded-full text-white bg-[#6e5bc5] hover:bg-[#4b3a92]'
              onClick={clkView}
            >
              View
            </button>
            <button
              className='w-20 py-0.5 text-sm rounded-full text-white bg-[#6e5bc5] hover:bg-[#4b3a92]'
              onClick={clkUpload}
            >
              Edit
            </button>
          </div>
          :
          <button
            className='w-20 py-0.5 text-sm rounded-full text-white bg-green-400 hover:bg-green-600'
            onClick={clkUpload}
          >
            Upload
          </button>
      }
    </>
  )
}

export default ThreeBtns