import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as DropDownArrow } from '../../../assets/svg/arrows/dropdown.svg';
// import { ReactComponent as Arrow } from '../../../assets/svg/arrows/down.svg';
import { ReactComponent as Dot } from '../../../assets/svg/common/dot.svg';

function SeeAllBtn({ onClick, length, seeOnly5 }) {
  return (
    <button
      className='dc mx-auto mb-2 bg-[#6e5bc5] text-white font-medium hover:scale-105 transition-transform'
      onClick={onClick}
    >
      {seeOnly5 ? `See All (${length})` : "See Less"}
      <DropDownArrow
        className={`[--svg-color:#fff] ${seeOnly5 ? "-rotate-90" : ""}`}
      />
    </button>
  )
}

function Dashboard() {
  const userDetails = useSelector(({ login }) => login.userDetails)

  const [missions] = useState([
    {
      title: "Total missions",
      value: "600"
    },
    {
      title: "Ongoing missions",
      value: "42"
    },
    {
      title: "Ended missions",
      value: "10"
    },
    {
      title: "IOT Devices",
      value: "2"
    }
  ])

  const [activeLoggers] = useState([
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
  ])

  const [activeAlerts] = useState([
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
  ])

  const [showOnly5, setShowOnly5] = useState({
    activeLoggers: true,
    activeAlerts: true,
  })

  const updateShowOnly5 = val => setShowOnly5(prev => ({
    ...prev,
    [val]: !prev[val]
  }))

  return (
    <section className='grid grid-cols-4 grid-rows-[auto_auto_1fr] gap-6 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='col-span-4 px-8 py-4 bg-white'>
        <h1 className='text-2xl font-medium'>Welcome back {userDetails?.firstName} {userDetails?.lastName}</h1>
        {/* <p>Last seen 1d ago</p> */}
      </div>

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
                  <p className='mt-1 mb-6 text-2xl'>{ms.value}</p>
                  {/* <button className='p-0 mb-2 text-[#6e5bc5] font-medium'>
                See all
              </button> */}
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='pr-8'>
        <div className='h-full py-2 px-4 bg-slate-500 text-white [--svg-color:#fff] shadow-md rounded'>
          <p className='text-2xl font-medium'>We are here to <br /> help you!</p>
          <p className='df my-2 cursor-pointer'>Contact us <DropDownArrow className='shrink-0 ml-auto -rotate-90' /></p>
          <p className='df cursor-pointer'>FAQ <DropDownArrow className='shrink-0 ml-auto -rotate-90' /></p>
        </div>
      </div>

      <div className='h-full col-span-2 p-1 pl-8 pb-4 pr-10 overflow-y-hidden'>
        <div className='dfc gap-0 h-[inherit] bg-white shadow-md rounded'>
          <h3 className='py-2 px-4 text-lg font-medium'>Latest 5 Active Loggers</h3>

          <div className='scroll-y'>
            <table className='w-full'>
              <thead>
                <tr className='sticky top-0 z-1 bg-white text-left shadow'>
                  <td className='py-2 px-4'>DPR number</td>
                  <td className='py-2 px-4'>Last measurement</td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                {
                  activeLoggers
                    .filter((a, i) => showOnly5.activeLoggers ? i < 5 : true)
                    .map(l => (
                      <tr key={l.id}>
                        <td className='py-2 px-4 align-text-top'>{l.dprNo}</td>
                        <td className='py-2 px-4'>
                          <div>
                            <p className='mb-1'><strong>{l.temp}&deg;C</strong> ({l.time})</p>
                            {/* <p className='df'>
                            <Arrow className='w-4 h-4 [--svg-color:#b91c1c] rotate-180' /> {l.up}&deg;C <Arrow className='w-4 h-4 [--svg-color:#22c55e]' /> {l.down}&deg;C = {l.equal}&deg;C
                          </p> */}
                          </div>
                        </td>
                        <td className='py-2 px-4'>
                          <button className='text-sm bg-[#6e5bc5] text-white hover:scale-105 transition-transform'>
                            Open
                          </button>
                        </td>
                      </tr>
                    ))
                }
              </tbody>
            </table>
          </div>

          <div className='border-t pt-2'>
            <SeeAllBtn
              length={activeLoggers.length}
              seeOnly5={showOnly5.activeLoggers}
              onClick={() => updateShowOnly5("activeLoggers")}
            />
          </div>
        </div>
      </div>

      <div className='h-full col-span-2 p-1 pr-8 pb-4 pl-10 overflow-y-hidden'>
        <div className='dfc gap-0 h-[inherit] bg-white shadow-md rounded'>
          <h3 className='py-2 px-4 text-lg font-medium'>Latest 5 Alerts</h3>

          <div className="scroll-y">
            <table className='w-full'>
              <thead>
                <tr className='sticky top-0 bg-white text-left shadow'>
                  <td className='py-2 px-4'>DPR number</td>
                  <td className='py-2 px-4'>Problem</td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                {
                  activeAlerts
                    .filter((a, i) => showOnly5.activeAlerts ? i < 5 : true)
                    .map(a => (
                      <tr key={a.id}>
                        <td className='py-2 px-4'>{a.dprNo}</td>
                        <td className='py-2 px-4'>{a.message}</td>
                        <td className='py-2 px-4'>
                          <button className='text-sm bg-[#6e5bc5] text-white hover:scale-105 transition-transform'>
                            Open
                          </button>
                        </td>
                      </tr>
                    ))
                }
              </tbody>
            </table>
          </div>

          <div className='border-t pt-2'>
            <SeeAllBtn
              length={activeAlerts.length}
              seeOnly5={showOnly5.activeAlerts}
              onClick={() => updateShowOnly5("activeAlerts")}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard