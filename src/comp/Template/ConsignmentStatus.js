import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getConsignments, updateConsignments } from "../../action-reducers/dpr/dprAction";

import ConsignmentStatusModal from './Modals/ConsignmentStatus';
import Loader from '../Common/Loader';

function Select({ onClk }) {
  const [selected, setSelected] = useState("")

  const onChange = e => {
    setSelected(e.target.value)
    onClk(e.target.value)
  }

  if (selected === "approved") return <p className="text-green-600">Approved</p>
  if (selected === "rejected") return <p className="text-red-500">Rejected</p>

  return (
    <select
      className="py-1"
      value={selected}
      onChange={onChange}
    >
      <option value="" disabled></option>
      <option value="approved">Approve</option>
      <option value="rejected">Reject</option>
    </select>
  )
}

function ConsignmentStatus({ role = "" }) {
  const dprList = useSelector(({ dpr }) => dpr.consignmentList || [])
  const [isLoading, setIsLoading] = useState(true)
  const [open, setOpen] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConsignments(() => setIsLoading(false)))
  }, [dispatch])

  const updateOpen = val => setOpen(val)
  const closeModal = () => setOpen("")

  const onClk = (dprId, status) => updateConsignments({ dprId, status })

  if (isLoading) return <Loader wrapperCls='h-full' />

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className="scroll-y w-[550px] mx-auto my-8 bg-white rounded-xl">
        <table className="w-full">
          <thead>
            <tr className='sticky top-0 bg-white font-medium text-gray-500'>
              <td className='p-4'>DPR No.</td>
              <td className='p-4'>Details</td>
              <td className='p-4'>Status</td>
            </tr>
          </thead>

          <tbody>
            {
              dprList.map(d => (
                <tr key={d.id} className='border-y'>
                  <td className="px-4 py-2">{d?.dprNo}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-sm bg-[#6e5bc5] text-white hover:bg-[#3d3565]"
                      onClick={() => updateOpen(d.id)}
                    >
                      View
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    {
                      d?.status
                        ? <p className={`first-letter:uppercase ${d?.status === "approved" ? "text-green-600" : "text-red-500"}`}>
                          {d.status}
                        </p>
                        : role === "cfa" ?
                          <Select onClk={val => onClk(d.id, val)} />
                          : <p className="text-gray-400">Pending</p>
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {
        open &&
        <ConsignmentStatusModal
          isOpen
          id={open}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default ConsignmentStatus