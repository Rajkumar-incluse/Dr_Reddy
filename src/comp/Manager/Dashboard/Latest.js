import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
// import { getAlerts, getLoggers } from '../../../action-reducers/dpr/dprAction';

import { ReactComponent as DropDownArrow } from '../../../assets/svg/arrows/dropdown.svg';

// import { ReactComponent as Arrow } from '../../../assets/svg/arrows/down.svg';

function Latest({ category = '', isLoading, data }) {
  const [showOnly5, setShowOnly5] = useState(true)
  // const [isLoading, setIsLoading] = useState(true)
  // const [data, setData] = useState([])
  const navigate = useNavigate()

  // useEffect(() => {
  //   setTimeout(() => {
  //     setData(category === "Active Loggers" ? activeLoggers : activeAlerts)
  //     setIsLoading(false)
  //   }, 6000)

  //   // const onSuccess= d => {
  //   //   setIsLoading(false)
  //   //   setData(d)
  //   // }
  //   // if (category === "Active Loggers") getLoggers(onSuccess)
  //   // else getAlerts(onSuccess)
  // }, [category])

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
                  <tr key={d}>
                    <td><div className='h-4 my-3 mx-4 bg-slate-200 rounded animate-pulse'></div></td>
                    <td><div className='h-4 my-3 mx-4 bg-slate-200 rounded animate-pulse'></div></td>
                    <td><div className='h-4 my-3 mx-4 bg-slate-200 rounded animate-pulse'></div></td>
                  </tr>
                ))
              }

              {
                !isLoading && data.length === 0 &&
                <tr>
                  <td colSpan={3}>
                    <div className='dc mt-28'>
                      No data available
                    </div>
                  </td>
                </tr>
              }

              {
                !isLoading && data
                  .filter((a, i) => showOnly5 ? i < 5 : true)
                  .map(l => (
                    <tr key={l.id || l.dprNo}>
                      <td className='py-2 px-4 align-text-top'>{l.dprNo}</td>
                      <td className='py-2 px-4'>
                        {
                          category === "Active Loggers"
                            ? <p className='mb-1'><strong>{l.temperature}&deg;C</strong> ({l.timestamp && formatDistanceToNow(new Date(l.timestamp), { addSuffix: true })})</p>
                            : l.problem
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
          !isLoading && data.length > 0 &&
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