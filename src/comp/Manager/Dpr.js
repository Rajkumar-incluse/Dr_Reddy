import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import cn from 'classnames';

import { getDprInfo } from '../../action-reducers/dpr/dprAction';

import { ReactComponent as Arrow } from '../../assets/svg/arrows/down.svg';
import PassiveCCDRList from '../Template/Modals/CCDRList/Passive';
import ActiveCCDRList from '../Template/Modals/CCDRList/Active';
import PackingList from '../Template/Modals/PackingList';
import Filters from '../Common/Filters';
import Loader from '../Common/Loader';
import Status from './Modals/Status';

function Dpr() {
  const dprList = useSelector(({ dpr }) => dpr.list || [])
  const [activeStatus, setActiveStatus] = useState('')
  const [activeMode, setActiveMode] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [dprFilter, setDprFilter] = useState('')
  const [open, setOpen] = useState({ type: "", id: "", viewType: "" })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getDprInfo({}, () => setIsLoading(false)))
  }, [dispatch])

  const data = useMemo(() => {
    let current = [...dprList]

    if (activeMode === "Active") {
      current = current.filter(a => a.transportMode === "active")
    }

    if (activeMode === "Passive") {
      current = current.filter(a => a.transportMode === "passive")
    }

    if (activeStatus) {
      current = current.filter(a => a.ccdrStatus === activeStatus)
    }

    if (dprFilter === "asc") {
      current = current.sort((a, b) => a.dprNo < b.dprNo ? 1 : -1)
    }

    if (dprFilter === "desc") {
      current = current.sort((a, b) => a.dprNo < b.dprNo ? -1 : 1)
    }

    if (dateFilter === "asc") {
      current = current.sort((a, b) => new Date(a.effectiveDate).getTime() < new Date(b.effectiveDate).getTime() ? 1 : -1)
    }

    if (dateFilter === "desc") {
      current = current.sort((a, b) => new Date(a.effectiveDate).getTime() < new Date(b.effectiveDate).getTime() ? -1 : 1)
    }

    return current
  }, [dprList, dateFilter, dprFilter, activeStatus, activeMode])

  const updateOpen = (type, id, viewType = '') => setOpen({ type, id, viewType })

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

  const closeModal = () => setOpen({ type: "", id: "", viewType: "" })

  if (isLoading) return <Loader wrapperCls='h-full' />

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
              data.map(d => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>{d.dprNo}</td>
                  <td className='px-2 py-1'>{d?.effectiveDate && format(new Date(d?.effectiveDate), "dd-MM-yyyy hh:mm aa")}</td>
                  <td className='px-2 py-1 first-letter:uppercase'>{d.transportMode}</td>
                  <td className='px-2 py-1'>-</td>
                  <td className='px-2 py-1'>-</td>
                  <td className='px-2 py-1'>
                    <button
                      className="w-16 h-6 p-0 text-sm text-center text-white bg-[#6e5bc5] hover:bg-[#8778c9] rounded-full"
                      onClick={() => updateOpen('packingList', d.id)}
                    >
                      View
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <button
                      className="w-16 h-6 p-0 text-sm text-center text-white bg-[#6e5bc5] hover:bg-[#8778c9] rounded-full"
                      onClick={() => updateOpen(`${d.transportMode}CCDRList`, d.id, "View")}
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
                      className={
                        cn("w-24 h-6 p-0 text-sm text-center rounded-full", {
                          "bg-slate-300 text-slate-800": d.ccdrStatus === "not-started",
                          "bg-yellow-200 text-yellow-900": d.ccdrStatus === "in-progress",
                          "bg-green-200 text-green-800": d.ccdrStatus === "completed" || d.ccdrStatus === "accepted",
                          "bg-red-200 text-red-900": d.ccdrStatus === "rejected",
                        })
                      }
                      onClick={() => updateOpen("status", d.id)}
                    >
                      {d.ccdrStatus}
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {
        open.type === 'packingList' &&
        <PackingList
          isOpen
          id={open.id}
          closeModal={closeModal}
        />
      }

      {
        open.type === 'passiveCCDRList' &&
        <PassiveCCDRList
          isOpen
          id={open.id}
          role="manager"
          type={open.viewType}
          closeModal={closeModal}
        />
      }

      {
        open.type === 'activeCCDRList' &&
        <ActiveCCDRList
          isOpen
          id={open.id}
          role="manager"
          type={open.viewType}
          closeModal={closeModal}
        />
      }

      {
        open.type === "status" &&
        <Status
          isOpen
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default Dpr