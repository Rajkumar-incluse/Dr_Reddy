import { useEffect, useState } from 'react';
// import { getMissions } from '../../../action-reducers/dpr/dprAction';

import { ReactComponent as Dot } from '../../../assets/svg/common/dot.svg';

function Missions({ isLoading, data }) {
  const [missions, setMissions] = useState([
    {
      key: "total",
      title: "Total missions",
      value: ""
    },
    {
      key: "ongoing",
      title: "Ongoing missions",
      value: ""
    },
    {
      key: "ended",
      title: "Ended missions",
      value: ""
    },
    {
      key: "iotDevices",
      title: "IOT Devices",
      value: ""
    }
  ])

  useEffect(() => {
    if (data) {
      setMissions(prev => prev.map(pr => ({
        ...pr,
        value: data[pr.key] ?? "2"
      })))
    }

    // const onSuccess= d => {
    //   setIsLoading(false)
    //   setMissions(prev => prev.map(pr => ({
    //     ...pr,
    //     value: missionSummary[pr.key] || "2"
    //   })))
    // }
    // getMissions(onSuccess)
  }, [data])


  return (
    <div className='col-span-3 pl-8'>
      <div className='bg-white shadow-md rounded'>
        <div className='df py-2 px-4 border-b'>
          <h2 className='text-lg font-medium'>Summary</h2>
          <Dot className='w-4 h-4 shrink-0 ml-auto' />
        </div>

        <div className='grid grid-cols-4 text-center'>
          {
            missions.map(ms => (
              <div
                key={ms.title}
                className='border-r font-medium'
              >
                <p className='mt-4 text-sm'>{ms.title}</p>
                {
                  isLoading
                    ? <p className='h-4 mt-2 mb-5 mx-10 bg-slate-200 rounded animate-pulse'></p>
                    : <p className='mt-2 mb-5 text-2xl'>{ms.value}</p>
                }
                {/* <button className='p-0 mb-2 text-[#6e5bc5] font-medium'>
                See all
              </button> */}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Missions