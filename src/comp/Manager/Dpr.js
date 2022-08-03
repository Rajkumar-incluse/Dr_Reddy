import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dummyData from '../../dummy/manager/dpr';

import { ReactComponent as Arrow } from '../../assets/svg/arrows/down.svg';
import PassiveCCDRList from './Modals/CCDRList/Passive';
import ActiveCCDRList from './Modals/CCDRList/Active';
import Filters from '../Common/Filters';
import DprList from './Modals/DprList';
import Status from './Modals/Status';

function Dpr() {
  const [activeStatus, setActiveStatus] = useState('')
  const [activeMode, setActiveMode] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const [dprFilter, setDprFilter] = useState('')
  const [open, setOpen] = useState("")
  const navigate = useNavigate()

  const data = useMemo(() => {
    let current = [...dummyData]

    if (activeMode === "Active") {
      current = current.filter(a => a.mode === "Active")
    }

    if (activeMode === "Passive") {
      current = current.filter(a => a.mode === "Passive")
    }

    if (activeStatus) {
      current = current.filter(a => a.status === activeStatus)
    }

    if (dprFilter === "asc") {
      current = current.sort((a, b) => a.dprNum < b.dprNum ? 1 : -1)
    }

    if (dprFilter === "desc") {
      current = current.sort((a, b) => a.dprNum < b.dprNum ? -1 : 1)
    }

    if (dateFilter === "asc") {
      current = current.sort((a, b) => new Date(a.start).getTime() < new Date(b.start).getTime() ? 1 : -1)
    }

    if (dateFilter === "desc") {
      current = current.sort((a, b) => new Date(a.start).getTime() < new Date(b.start).getTime() ? -1 : 1)
    }

    return current
  }, [dateFilter, dprFilter, activeStatus, activeMode])

  const updateOpen = val => setOpen(val)

  const updateDateFilter = () => {
    setDateFilter(p => {
      if (p === '') return 'asc'
      if (p === 'asc') return 'desc'
      return ''
    })
  }

  const updateDPRFilter = () => {
    setDprFilter(p => {
      if (p === '') return 'asc'
      if (p === 'asc') return 'desc'
      return ''
    })
  }

  const closeModal = () => setOpen('')

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>DPR Information</h1>
        <Filters
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
          activeMode={activeMode}
          setActiveMode={setActiveMode}
        />
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
        <table className='w-full'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>
                <div
                  className='df cursor-pointer'
                  onClick={updateDPRFilter}
                >
                  DPR No.
                  {
                    dprFilter &&
                    <Arrow
                      className={`w-4 h-4 ${dprFilter === 'desc' ? "rotate-180" : ''}`}
                    />
                  }
                </div>
              </td>
              <td className='px-2 py-4 text-gray-500 font-medium'>
                <div
                  className='df cursor-pointer'
                  onClick={updateDateFilter}
                >
                  DPR Date
                  {
                    dateFilter &&
                    <Arrow
                      className={`w-4 h-4 ${dateFilter === 'desc' ? "rotate-180" : ''}`}
                    />
                  }
                </div>
              </td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Transport Mode</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Started At</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Delivered At</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Packing list</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>CCDR</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Track</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>CCDR Status</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map((d, i) => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>{d.dprNum}</td>
                  <td className='px-2 py-1'>{d.start}</td>
                  <td className='px-2 py-1'>{d.mode}</td>
                  <td className='px-2 py-1'>{d.start}</td>
                  <td className='px-2 py-1'>{d.end}</td>
                  <td className='px-2 py-1'>
                    <button
                      className="w-16 h-6 p-0 text-sm text-center text-white bg-[#6e5bc5] hover:bg-[#8778c9] rounded-full"
                      onClick={() => updateOpen('dprList')}
                    >
                      View
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <button
                      className="w-16 h-6 p-0 text-sm text-center text-white bg-[#6e5bc5] hover:bg-[#8778c9] rounded-full"
                      onClick={() => updateOpen(d.mode)}
                    >
                      View
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <button
                      className="w-16 h-6 p-0 text-sm text-center text-white bg-[#6e5bc5] hover:bg-[#8778c9] rounded-full"
                      onClick={() => navigate('/manager/track')}
                    >
                      View
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <button
                      className={`w-24 h-6 p-0 text-sm text-center rounded-full ${d.status === "completed" ? "bg-green-200 text-green-800" : ""} ${d.status === "not-started" ? " bg-slate-300 text-slate-800" : ""} ${d.status === "in-progress" ? "bg-yellow-200 text-yellow-900" : ""} ${d.status === "rejected" ? "bg-red-200 text-red-900" : ""}`}
                      onClick={() => updateOpen("status")}
                    >
                      {d.status}
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {
        open === 'dprList' &&
        <DprList
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === 'Passive' &&
        <PassiveCCDRList
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === 'Active' &&
        <ActiveCCDRList
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === "status" &&
        <Status
          isOpen
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default Dpr