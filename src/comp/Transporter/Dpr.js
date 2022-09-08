import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { getDprInfo } from '../../action-reducers/dpr/dprAction';

import PackingList from '../Template/Modals/PackingList';
import Loader from '../Common/Loader';

function Dpr() {
  const dprList = useSelector(({ dpr }) => dpr.list || [])
  const [isLoading, setIsLoading] = useState(true)
  const [open, setOpen] = useState({ type: "", id: "", viewType: "" })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getDprInfo({}, () => setIsLoading(false)))
  }, [dispatch])

  const updateOpen = (type, id, viewType = '') => setOpen({ type, id, viewType })

  const closeModal = () => setOpen({ type: "", id: "", viewType: "" })

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
              <td className='px-2 py-4 text-gray-500 font-medium'>Transport Mode</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Started At</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Delivered At</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Packing list</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Track</td>
            </tr>
          </thead>

          <tbody>
            {
              dprList.map((d, i) => (
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
                      onClick={() => navigate("/transporter/track")}
                    >
                      View
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
    </section>
  )
}

export default Dpr