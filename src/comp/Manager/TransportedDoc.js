import { useState } from "react";
import DocsHandler from "./Modals/DocsHandler";

const data = [
  { dprNo: '18448980' },
  { dprNo: '27618480' },
  { dprNo: '18485720' },
  { dprNo: '16735480' },
  { dprNo: '16699910' },
  { dprNo: '33479480' },
  { dprNo: '23458488' },
  { dprNo: '55445661' },
  { dprNo: '64668989' },
  { dprNo: '245678098' },
  { dprNo: '567890987' },
  { dprNo: '332211669' },
  { dprNo: '23158483' },
  { dprNo: '15005665' },
  { dprNo: '22229891' },
  { dprNo: '12409876' },
]

function TransportedDoc() {
  const [modal, setModal] = useState({
    state: false,
    data: {}
  })

  const closeModal = () => {
    setModal({
      state: false,
      data: {}
    })
  }

  const openModal = data => {
    setModal({
      state: true,
      data
    })
  }

  return (
    <section className='dfc p-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className="scroll-y w-[550px] mx-auto my-8 bg-white rounded-xl">
        <table className="w-full">
          <thead>
            <tr className='sticky top-0 bg-white font-medium text-gray-500'>
              <td className='p-4'>DPR No.</td>
              <td className='p-4'>LR Copy</td>
              <td className='p-4'>Seal Code</td>
              <td className='p-4'>Status</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map(li => (
                <tr key={li.dprNo} className='border-y'>
                  <td className="px-4 py-2">{li.dprNo}</td>
                  <td className="px-4 py-2">
                    <button
                      className="w-24 py-0.5 text-sm rounded-full text-white bg-[#6e5bc5] hover:bg-[#4b3a92]"
                      onClick={() => openModal({ title: 'LR Copy', dprNo: li.dprNo })}
                    >
                      View
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="w-24 py-0.5 text-sm rounded-full text-white bg-[#6e5bc5] hover:bg-[#4b3a92]"
                      onClick={() => openModal({ title: 'Seal Code', dprNo: li.dprNo })}
                    >
                      View
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <select className="py-1">
                      <option value="" disabled></option>
                      <option value="Approve">Approve</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <DocsHandler
        isOpen={modal.state}
        closeModal={closeModal}
        type='View'
        title={modal.data.title}
        dprNo={modal.data.dprNo}
      />
    </section>
  )
}

export default TransportedDoc