import { useState } from "react";
import DocsHandler from "./Modals/DocsHandler";

const data = [
  {
    dprNo: '18448980',
    taxInvoice: "View",
    sealCode: 'View'
  },
  {
    dprNo: '27618480',
    taxInvoice: "View",
    sealCode: 'Upload'
  },
  {
    dprNo: '18485720',
    taxInvoice: "Upload",
    sealCode: 'View'
  },
  {
    dprNo: '16735480',
    taxInvoice: "View",
    sealCode: 'View'
  },
  {
    dprNo: '16699910',
    taxInvoice: "View",
    sealCode: 'Upload'
  },
  {
    dprNo: '33479480',
    taxInvoice: "Upload",
    sealCode: 'View'
  },
  {
    dprNo: '23458488',
    taxInvoice: "Upload",
    sealCode: 'View'
  },
  {
    dprNo: '55445661',
    taxInvoice: "View",
    sealCode: 'Upload'
  },
  {
    dprNo: '64668989',
    taxInvoice: "Upload",
    sealCode: 'View'
  },
  {
    dprNo: '245678098',
    taxInvoice: "View",
    sealCode: 'Upload'
  },
  {
    dprNo: '567890987',
    taxInvoice: "View",
    sealCode: 'Upload'
  },
  {
    dprNo: '332211669',
    taxInvoice: "Upload",
    sealCode: 'View'
  },
  {
    dprNo: '23158483',
    taxInvoice: "Upload",
    sealCode: 'View'
  },
  {
    dprNo: '15005665',
    taxInvoice: "View",
    sealCode: 'Upload'
  },
  {
    dprNo: '22229891',
    taxInvoice: "Upload",
    sealCode: 'View'
  },
  {
    dprNo: '12409876',
    taxInvoice: "View",
    sealCode: 'Upload'
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
              <td className='p-4'>Tax Invoice</td>
              <td className='p-4'>Seal Code</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map(li => (
                <tr key={li.dprNo} className='border-y'>
                  <td className="px-4 py-2">{li.dprNo}</td>
                  <td className="px-4 py-2">
                    <button
                      className={`w-24 py-0.5 text-sm rounded-full text-white ${li.taxInvoice === 'Upload' ? "bg-green-400 hover:bg-green-600" : "bg-[#6e5bc5] hover:bg-[#4b3a92]"}`}
                      onClick={() => openModal({ type: li.taxInvoice, title: 'Tax Invoice', dprNo: li.dprNo })}
                    >
                      {li.taxInvoice}
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className={`w-24 py-0.5 text-sm rounded-full text-white ${li.sealCode === 'Upload' ? "bg-green-400 hover:bg-green-600" : "bg-[#6e5bc5] hover:bg-[#4b3a92]"}`}
                      onClick={() => openModal({ type: li.sealCode, title: 'Seal Code', dprNo: li.dprNo })}
                    >
                      {li.sealCode}
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

export default UploadLR