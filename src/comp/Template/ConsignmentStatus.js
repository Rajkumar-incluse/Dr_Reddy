import { useState } from "react";
import ConsignmentStatusModal from './Modals/ConsignmentStatus';

const data = [1, 2, 3, 4, 5, 6, 7, 8]

function Select() {
  const [selected, setSelected] = useState("")

  if (selected === "approved") return <p className="text-green-900">Approved</p>
  if (selected === "rejected") return <p className="text-red-700">Rejected</p>

  return (
    <select
      className="py-1"
      value={selected}
      onChange={e => setSelected(e.target.value)}
    >
      <option value="" disabled></option>
      <option value="approved">Approve</option>
      <option value="rejected">Reject</option>
    </select>
  )
}

function ConsignmentStatus({ role = "" }) {
  const [open, setOpen] = useState(false)

  const updateOpen = () => setOpen(p => !p)

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
              data
                .map(d => (
                  <tr key={d} className='border-y'>
                    <td className="px-4 py-2">45678-{d}-ABc</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-sm bg-[#6e5bc5] text-white hover:bg-[#3d3565]"
                        onClick={updateOpen}
                      >
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      {
                        role === "cfa"
                          ? <Select />
                          : <p className="text-green-900">Approved</p>
                      }
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>

      <ConsignmentStatusModal
        isOpen={open}
        closeModal={updateOpen}
      />
    </section>
  )
}

export default ConsignmentStatus