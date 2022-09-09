import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { documentTypes, getDoc } from "../../action-reducers/dpr/dprAction";

import DocsHandler from "./Modals/DocsHandler";
import Loader from '../Common/Loader';

function Btn({ documents = [], docType = '', onClk = () => { } }) {
  const isUploaded = documents.find(d => d.documentType === docType) || {}

  return (
    <button
      className={`w-24 py-0.5 text-sm rounded-full text-white ${!isUploaded?.id ? "bg-green-400 hover:bg-green-600" : "bg-[#6e5bc5] hover:bg-[#4b3a92]"}`}
      onClick={() => onClk(isUploaded)}
    >
      {isUploaded?.id ? "View" : "Upload"}
    </button>
  )
}

function UploadLR() {
  const [isLoading, setIsLoading] = useState(true)
  const [modal, setModal] = useState({ state: false, data: {} })
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const onSuccess = newData => {
      setIsLoading(false)
      setData(newData)
    }

    dispatch(getDoc(onSuccess))
  }, [dispatch])

  const closeModal = () => setModal({ state: false, data: {} })
  const openModal = data => setModal({ state: true, data })

  const onUpload = (id, docs) => {
    setData(prev => prev.map(pr => {
      if (pr.id === id) {
        return {
          ...pr,
          documents: [...pr.documents, { ...docs }]
        }
      }
      return pr
    }))
  }

  if (isLoading) return <Loader wrapperCls='h-full' />

  return (
    <section className='dfc p-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className="scroll-y w-[550px] mx-auto my-8 bg-white rounded-xl">
        <table className="w-full">
          <thead>
            <tr className='sticky top-0 bg-white font-medium text-gray-500'>
              <td className='p-4'>DPR No.</td>
              <td className='p-4'>Tax Invoice</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map(d => (
                <tr key={d.id} className='border-y'>
                  <td className="px-4 py-2">{d.dprNo}</td>
                  <td className="px-4 py-2">
                    <Btn
                      documents={d.documents}
                      docType={documentTypes.taxInvoice}
                      onClk={currentDoc => openModal({
                        documentType: documentTypes.taxInvoice,
                        modalType: currentDoc.id ? "View" : "Upload",
                        dprNo: d.dprNo,
                        dprId: d.id,
                        img: currentDoc.id ? currentDoc : ""
                      })
                      }
                    />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {
        modal.state &&
        <DocsHandler
          isOpen
          hasEdit
          closeModal={closeModal}
          openModal={openModal}
          title='Tax Invoice'
          dprNo={modal.data.dprNo}
          type={modal.data.modalType}
          data={modal.data}
          onUpload={onUpload}
        />
      }
    </section>
  )
}

export default UploadLR