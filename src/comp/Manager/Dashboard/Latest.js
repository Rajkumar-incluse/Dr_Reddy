import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getAlerts, getLoggers } from '../../../action-reducers/dpr/dprAction';

import { ReactComponent as DropDownArrow } from '../../../assets/svg/arrows/dropdown.svg';

// import { ReactComponent as Arrow } from '../../../assets/svg/arrows/down.svg';

const activeLoggers = [
  {
    id: '1',
    dprNo: 'TAG 83D5',
    temp: 1.2,
    time: '3 minutes ago',
  },
  {
    id: '2',
    dprNo: 'TAG 33G8',
    temp: 1.3,
    time: '4 hours ago',
  },
  {
    id: '3',
    dprNo: 'TAG 95G4',
    temp: 2.4,
    time: 'Yesterday',
  },
  {
    id: '4',
    dprNo: 'VT 9c23',
    temp: -10.9,
    time: '02.04.22',
  },
  {
    id: '5',
    dprNo: 'VT 9c23',
    temp: 1.2,
    time: '3 minutes ago',
  },
  {
    id: '6',
    dprNo: 'TAG 95G4',
    temp: 2.4,
    time: 'Yesterday',
  },
  {
    id: '7',
    dprNo: 'VT 9c23',
    temp: -10.9,
    time: '02.04.22',
  },
  {
    id: '8',
    dprNo: 'VT 9c23',
    temp: 1.2,
    time: '3 minutes ago',
  }
]

const activeAlerts = [
  {
    id: '1',
    dprNo: 'TAG 83D5',
    message: 'Accident',
  },
  {
    id: '2',
    dprNo: 'TAG 33G8',
    message: 'Punctured',
  },
  {
    id: '3',
    dprNo: 'TAG 95G4',
    message: 'Break down',
  },
  {
    id: '4',
    dprNo: 'VT 9c23',
    message: 'Accident',
  },
  {
    id: '5',
    dprNo: 'TAG 3TG3',
    message: 'Break down',
  },
  {
    id: '6',
    dprNo: 'TAG 95G4',
    message: 'Break down',
  },
  {
    id: '7',
    dprNo: 'VT 9c23',
    message: 'Accident',
  },
  {
    id: '8',
    dprNo: 'TAG 3TG3',
    message: 'Break down',
  }
]

function Latest({ category = '' }) {
  const [showOnly5, setShowOnly5] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setData(category === "Active Loggers" ? activeLoggers : activeAlerts)
      setIsLoading(false)
    }, 6000)

    // const onSuccess= d => {
    //   setIsLoading(false)
    //   setData(d)
    // }
    // if (category === "Active Loggers") getLoggers(onSuccess)
    // else getAlerts(onSuccess)
  }, [category])

  return (
    <div className={`h-full col-span-2 pt-1 pb-4 overflow-y-hidden ${category === "Active Loggers" ? "pl-8 pr-10" : "pl-10 pr-8"}`}>
      <div className='dfc gap-0 h-[inherit] bg-white shadow-md rounded'>
        <h3 className='py-2 px-4 text-lg font-medium'>Latest {category}</h3>

        <div className='scroll-y'>
          <table className='w-full table-fixed'>
            <thead>
              <tr className='sticky top-0 z-1 bg-white text-left shadow'>
                <td className='w-32 py-2 px-4'>DPR number</td>
                <td className='py-2 px-4'>
                  {
                    category === "Active Loggers"
                      ? "Last measurement"
                      : "Message"
                  }
                </td>
                <td className='w-24'></td>
              </tr>
            </thead>

            <tbody>
              {
                isLoading &&
                [1, 2, 3, 4, 5, 6].map(d => (
                  <tr>
                    <td><div className='h-4 my-3 mx-4 bg-slate-200 rounded animate-pulse'></div></td>
                    <td><div className='h-4 my-3 mx-4 bg-slate-200 rounded animate-pulse'></div></td>
                    <td><div className='h-4 my-3 mx-4 bg-slate-200 rounded animate-pulse'></div></td>
                  </tr>
                ))
              }

              {
                !isLoading && data
                  .filter((a, i) => showOnly5 ? i < 5 : true)
                  .map(l => (
                    <tr key={l.id}>
                      <td className='py-2 px-4 align-text-top'>{l.dprNo}</td>
                      <td className='py-2 px-4'>
                        {
                          category === "Active Loggers"
                            ? <p className='mb-1'><strong>{l.temp}&deg;C</strong> ({l.time})</p>
                            : l.message
                        }

                        {/* <p className='df'>
                            <Arrow className='w-4 h-4 [--svg-color:#b91c1c] rotate-180' /> {l.up}&deg;C <Arrow className='w-4 h-4 [--svg-color:#22c55e]' /> {l.down}&deg;C = {l.equal}&deg;C
                          </p> */}
                      </td>
                      <td className='py-2'>
                        <button
                          className='text-sm bg-[#6e5bc5] text-white hover:scale-105 transition-transform'
                          onClick={() => navigate(`/manager/track`, { state: l.dprNo })}
                        >
                          Open
                        </button>
                      </td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>

        {
          !isLoading &&
          <div className='border-t pt-2'>
            <button
              className='dc mx-auto mb-2 bg-[#6e5bc5] text-white font-medium hover:scale-105 transition-transform'
              onClick={() => setShowOnly5(p => !p)}
            >
              {showOnly5 ? `See All (${data.length})` : "See Less"}
              <DropDownArrow
                className={`[--svg-color:#fff] ${showOnly5 ? "-rotate-90" : ""}`}
              />
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default Latest