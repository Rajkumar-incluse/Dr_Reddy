import { useState } from "react";
import DocsHandler from "./Modals/DocsHandler";

const data = [
  {
    dprNo: '18448980',
    lrCopy: "View",
    status: 'Approved'
  },
  {
    dprNo: '27618480',
    lrCopy: "View",
    status: 'Rejected'
  },
  {
    dprNo: '18485720',
    lrCopy: "Upload",
    status: 'Pending'
  },
  {
    dprNo: '16735480',
    lrCopy: "View",
    status: 'Approved'
  },
  {
    dprNo: '16699910',
    lrCopy: "View",
    status: 'Processing'
  },
  {
    dprNo: '33479480',
    lrCopy: "Upload",
    status: 'Pending'
  },
  {
    dprNo: '23458488',
    lrCopy: "Upload",
    status: 'Pending'
  },
  {
    dprNo: '55445661',
    lrCopy: "View",
    status: 'Rejected'
  },
  {
    dprNo: '64668989',
    lrCopy: "Upload",
    status: 'Pending'
  },
  {
    dprNo: '245678098',
    lrCopy: "View",
    status: 'Processing'
  },
  {
    dprNo: '567890987',
    lrCopy: "View",
    status: 'Rejected'
  },
  {
    dprNo: '332211669',
    lrCopy: "Upload",
    status: 'Pending'
  },
  {
    dprNo: '23158483',
    lrCopy: "Upload",
    status: 'Pending'
  },
  {
    dprNo: '15005665',
    lrCopy: "View",
    status: 'Rejected'
  },
  {
    dprNo: '22229891',
    lrCopy: "Upload",
    status: 'Pending'
  },
  {
    dprNo: '12409876',
    lrCopy: "View",
    status: 'Processing'
  },
]

function UploadLR() {
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
    <section className='dfc p-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className="scroll-y w-[550px] mx-auto my-8 bg-white rounded-xl">
        <table className="w-full">
          <thead>
            <tr className='sticky top-0 bg-white font-medium text-gray-500'>
              <td className='p-4'>DPR No.</td>
              <td className='p-4'>LR Copy</td>
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
                      className={`w-24 py-0.5 text-sm rounded-full text-white ${li.lrCopy === 'Upload' ? "bg-green-400 hover:bg-green-600" : "bg-[#6e5bc5] hover:bg-[#4b3a92]"}`}
                      onClick={() => openModal({ type: li.lrCopy, title: 'LR Copy', dprNo: li.dprNo })}
                    >
                      {li.lrCopy}
                    </button>
                  </td>
                  <td className={`px-4 py-2 ${li.status === "Approved" ? "text-green-500" : ""} ${li.status === "Processing" ? "text-green-900" : ""} ${li.status === "Pending" ? "text-yellow-500" : ""} ${li.status === "Rejected" ? "text-red-600" : ""}`}>
                    {li.status}
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

export default UploadLR