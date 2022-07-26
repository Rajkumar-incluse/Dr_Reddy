import { useState } from "react";
import DocsHandler from "./Modals/DocsHandler";
import data from '../../dummy/manager/dpr';

function Dpr() {
  const [modal, setModal] = useState({
    state: false,
    data: {}
  })

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
              data.map((d, i) => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>{d.dprNum}</td>
                  <td className='px-2 py-1'>{d.start}</td>
                  <td className='px-2 py-1'>
                    <button
                      className={`w-24 py-0.5 text-sm rounded-full text-white ${i % 2 === 0 ? "bg-green-400 hover:bg-green-600" : "bg-[#6e5bc5] hover:bg-[#4b3a92]"}`}
                      onClick={() => openModal({ type: i % 2 === 0 ? 'Upload' : "View", title: 'Seal Code', dprNo: '123456789' })}
                    >
                      {i % 2 === 0 ? 'Upload' : "View"}
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <button
                      className={`w-24 h-6 p-0 text-sm text-center rounded-full ${d.status === "completed" ? "bg-green-200 text-green-800" : ""} ${d.status === "in-progress" ? "bg-yellow-200 text-yellow-900" : ""} ${d.status === "rejected" ? "bg-red-200 text-red-900" : ""}`}
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