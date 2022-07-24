import GMap from '../Common/GMap';

// const data = ['18448980', '27618480', '18485720', '16735480', '16699910', '33479480', '23458488', '55445661', '64668989', '245678098', '567890987', '332211669', '23158483', '15005665', '22229891', '12409876']

function Track() {
  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 mb-2 px-8'>
        <h1 className='text-xl'>Track Vehicle</h1>
        <p className='ml-auto'>Selected DPR :</p>
        <p>18448980</p>
        {/* <select className=' max-w-xs'>
          {
            data.map(d => (
              <option key={d} value={d}>{d}</option>
            ))
          }
        </select> */}
      </div>

      <div className='scroll-y'>
        <GMap />
      </div>

      <div className='grid grid-cols-3 gap-4 px-4 mb-2'>
        <div>
          <div className='df'>
            <strong className='block'>Current Location</strong>
            <strong>:</strong>
            <p>17.3456789</p>
          </div>
          <div className='df'>
            <strong className='block'>Last Tracked Time</strong>
            <strong>:</strong>
            <p>18.06.2022 12.20 AM</p>
          </div>
          <div className='df'>
            <strong className='block'>Last Tracked Tremperature</strong>
            <strong>:</strong>
            <p>7&deg; C</p>
          </div>
        </div>

        <div>
          <div className='df'>
            <strong className='block'>Most Time Spent Location</strong>
            <strong>:</strong>
            <p>17.8765432</p>
          </div>
          <div className='df'>
            <strong className='block'>Highest Tremperature Recorded</strong>
            <strong>:</strong>
            <p>12&deg; C</p>
          </div>
          <div className='df'>
            <strong className='block'>Lowest Tremperature Recorded</strong>
            <strong>:</strong>
            <p>2&deg; C</p>
          </div>
        </div>

        <div>
          <div className='df'>
            <strong className='block'>No. of times Tremperature went above 12&deg; C</strong>
            <strong>:</strong>
            <p>0</p>
          </div>
          <div className='df'>
            <strong className='block'>No. of times Tremperature went below 2&deg; C</strong>
            <strong>:</strong>
            <p>0</p>
          </div>
          {/* <div className='df'>
          <strong className='block'></strong>
          <strong>:</strong>
          <p></p>
        </div> */}
        </div>
      </div>
    </section>
  )
}

export default Track