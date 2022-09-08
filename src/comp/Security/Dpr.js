import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import cn from 'classnames';

import { getDprInfo } from '../../action-reducers/dpr/dprAction';

import DocsHandler from "./Modals/DocsHandler";
import Loader from '../Common/Loader';

function Dpr() {
  const dprList = useSelector(({ dpr }) => dpr.list || [])
  const [isLoading, setIsLoading] = useState(true)
  const [modal, setModal] = useState({ state: false, data: {} })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDprInfo({}, () => setIsLoading(false)))
  }, [dispatch])

  const closeModal = () => {
    setModal(p => ({
      ...p,
      state: false,
    }))
    setTimeout(() => {
      setModal(p => ({
        ...p,
        data: {}
      }))
    }, 1000)
  }

  const openModal = data => {
    setModal({
      state: true,
      data
    })
  }

  if (isLoading) return <Loader wrapperCls='h-full' />

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>DPR Information</h1>
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
        <table className='w-full'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>DPR No.</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>DPR Date</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Seal Code</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Seal Code Status</td>
            </tr>
          </thead>

          <tbody>
            {
              dprList.map((d, i) => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>{d.dprNo}</td>
                  <td className='px-2 py-1'>{d?.effectiveDate && format(new Date(d?.effectiveDate), "dd-MM-yyyy hh:mm aa")}</td>
                  <td className='px-2 py-1'>
                    <button
                      className={`w-24 py-0.5 text-sm rounded-full text-white ${i % 2 === 0 ? "bg-green-400 hover:bg-green-600" : "bg-[#6e5bc5] hover:bg-[#4b3a92]"}`}
                      onClick={() => openModal({ type: i % 2 === 0 ? 'Upload' : "View", title: 'Seal Code', dprNo: '123456789' })}
                    >
                      {i % 2 === 0 ? 'Upload' : "View"}
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <button className={
                      cn("w-24 h-6 p-0 text-sm text-center rounded-full", {
                        "bg-slate-300 text-slate-800": d.ccdrStatus === "not-started",
                        "bg-yellow-200 text-yellow-900": d.ccdrStatus === "in-progress",
                        "bg-green-200 text-green-800": d.ccdrStatus === "completed" || d.ccdrStatus === "accepted",
                        "bg-red-200 text-red-900": d.ccdrStatus === "rejected",
                      })
                    }
                    >
                      {d.ccdrStatus}
                      {/* has to be seal code */}
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <DocsHandler
        hasEdit
        isOpen={modal.state}
        closeModal={closeModal}
        openModal={openModal}
        type={modal.data.type}
        title={modal.data.title}
        dprNo={modal.data.dprNo}
      />
    </section>
  )
}

export default Dpr