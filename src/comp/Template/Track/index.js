import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { vehicleTracking } from '../../../action-reducers/dpr/dprAction';
import useDprList from '../../../hooks/useDprList';

import Loader from '../../Common/Loader';
import CreateBtn from './CreateBtn';
import TxtBlock from './TxtBlock';
import Map from './Map';

function Track() {
  const { dprList, isLoading } = useDprList()
  const { state, pathname } = useLocation()

  const [selectedDprNo, setSelectedDprNo] = useState("")
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState({
    currentLocation: '',
    mostTimeSpendLocation: '',
    tempAboveTimes: '',
    tempBelowTimes: '',
    lastTrackedTime: '',
    lastTrackedTemp: '',
    highestTemp: '',
    lowestTemp: '',
    currentOrigin: "",
    currentDestination: "",
    lat: "",
    long: "",
    isLoaded: false,
  })

  useEffect(() => {
    if (state) {
      setSelectedDprNo(state)
    }
  }, [state])

  useEffect(() => {
    if (selectedDprNo) {
      setIsFetching(true)
      setData({
        currentLocation: '',
        mostTimeSpendLocation: '',
        tempAboveTimes: '',
        tempBelowTimes: '',
        lastTrackedTime: '',
        lastTrackedTemp: '',
        highestTemp: '',
        lowestTemp: '',
        currentOrigin: "",
        currentDestination: "",
        lat: "",
        long: "",
        isLoaded: false,
      })

      const onSuccess = d => {
        setIsFetching(false)
        setData({
          ...d,
          isLoaded: true
        })
      }
      vehicleTracking(selectedDprNo, onSuccess)
    }
  }, [selectedDprNo])


  if (isLoading) return <Loader wrapperCls='h-full' />

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 mb-2 px-8'>
        <h1 className='text-xl'>Track Vehicle</h1>
        <p className='ml-auto'>Select DPR : </p>
        <select
          className='max-w-[200px]'
          value={selectedDprNo}
          onChange={e => setSelectedDprNo(e.target.value)}
        >
          <option value="" disabled></option>
          {
            dprList.map(d => (
              <option key={d.id} value={d.dprNo}>
                {d.dprNo}
              </option>
            ))
          }
        </select>
      </div>

      {
        isFetching
          ? <Loader wrapperCls='h-full' />
          :
          (selectedDprNo && data.isLoaded) ?
            <>
              <div className='scroll-y'>
                <Map
                  lat={Number(data.lat)}
                  lng={Number(data.long)}
                />
              </div>

              <div className='grid grid-cols-3 gap-x-4 px-4 mb-2'>
                <TxtBlock
                  title='Current Location'
                  val={data.currentLocation}
                />

                <TxtBlock
                  title='Most Time Spent Location'
                  val={data.mostTimeSpendLocation}
                />

                <TxtBlock
                  title={<>No. of times Tremperature went above 12&deg; C</>}
                  val={data.tempAboveTimes}
                />

                <TxtBlock
                  title='Last Tracked Time'
                  val={data.lastTrackedTime}
                />

                <TxtBlock
                  title='Highest Tremperature Recorded'
                  val={<>{data.highestTemp}&deg; C</>}
                />

                <TxtBlock
                  title={<>No. of times Tremperature went below 12&deg; C</>}
                  val={data.tempBelowTimes}
                />

                <TxtBlock
                  title='Last Tracked Tremperature'
                  val={<>{data.lastTrackedTemp}&deg; C</>}
                />

                <TxtBlock
                  title='Lowest Tremperature Recorded'
                  val={<>{data.lowestTemp}&deg; C</>}
                />

                {
                  pathname === "/transporter/track" &&

                  <TxtBlock
                    title='Create message'
                    val={<CreateBtn dprNo={selectedDprNo} />}
                  />
                }
              </div>
            </>
            : <div className='dc scroll-y'>
              No data found
            </div>
      }
    </section>
  )
}

export default Track