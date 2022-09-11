import { useState } from "react";
import { useDispatch } from "react-redux";

import { documentTypes, updateDocStatus } from "../../action-reducers/dpr/dprAction";
import filterCheck from "../../helper/filterCheck";
import useDoc from '../../hooks/useDoc';

import DocsHandler from "../Template/Modals/DocsHandler";
import { DocBtn } from "../Template/Btns";
import Loader from '../Common/Loader';

function Select({ documents = [], dprId }) {
  const dispatch = useDispatch()

  const [selected, setSelected] = useState(
    documents.find(doc => doc.documentType === documentTypes.lrCopy)?.documentStatus?.status !== "in-progress"
      ? documents.find(doc => doc.documentType === documentTypes.lrCopy)?.documentStatus?.status
      : ""
  )

  const onChange = e => {
    setSelected(e.target.value)
    let data = [
      {
        dprId,
        documentId: documents.find(doc => doc.documentType === documentTypes.lrCopy)?.id,
        documentStatus: e.target.value,
      },
      {
        dprId,
        documentId: documents.find(doc => doc.documentType === documentTypes.sealCode)?.id,
        documentStatus: e.target.value,
      }
    ]

    dispatch(updateDocStatus(data))
  }

  if (selected) return (
    <div className={`first-letter:uppercase ${selected === "approved" ? "text-green-600" : "text-red-600"}`}>
      {selected}
    </div>
  )

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

function TransportedDoc() {
  const { data, modal, isLoading, closeModal, openModal } = useDoc()

  if (isLoading) return <Loader wrapperCls='h-full' />

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
              data
                .filter(d => filterCheck(d.documents, [documentTypes.lrCopy, documentTypes.sealCode]))
                .map(d => (
                  <tr key={d.id} className='border-y'>
                    <td className="px-4 py-2">{d.dprNo}</td>
                    <td className="px-4 py-2">
                      <DocBtn
                        documents={d.documents}
                        docType={documentTypes.lrCopy}
                        onClk={currentDoc => openModal({
                          title: 'LR Copy',
                          dprNo: d.dprNo,
                          img: currentDoc,
                        })
                        }
                      />
                    </td>
                    <td className="px-4 py-2">
                      <DocBtn
                        documents={d.documents}
                        docType={documentTypes.sealCode}
                        onClk={currentDoc => openModal({
                          title: 'Seal Code',
                          dprNo: d.dprNo,
                          img: currentDoc,
                        })
                        }
                      />
                    </td>
                    <td className="px-4 py-2">
                      <Select
                        documents={d.documents}
                        dprId={d.id}
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
          type='View'
          closeModal={closeModal}
          title={modal.data.title}
          dprNo={modal.data.dprNo}
          data={modal.data}
        />
      }
    </section>
  )
}

export default TransportedDoc