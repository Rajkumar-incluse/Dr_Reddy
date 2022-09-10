import { documentTypes } from "../../action-reducers/dpr/dprAction";
import useDoc from '../../hooks/useDoc';

import DocsHandler from "../Template/Modals/DocsHandler";
import { DocBtn } from "../Template/Btns";
import Loader from '../Common/Loader';

function UploadLR() {
  const { data, modal, isLoading, closeModal, openModal, onUpload } = useDoc()

  if (isLoading) return <Loader wrapperCls='h-full' />

  return (
    <section className='dfc p-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className="scroll-y w-[550px] mx-auto my-8 bg-white rounded-xl">
        <table className="w-full">
          <thead>
            <tr className='sticky top-0 bg-white font-medium text-gray-500'>
              <td className='p-4'>DPR No.</td>
              <td className='p-4'>Signed LR Copy</td>
              <td className='p-4'>Seal Code</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map(d => (
                <tr key={d.id} className='border-y'>
                  <td className="px-4 py-2">{d.dprNo}</td>
                  <td className="px-4 py-2">
                    <DocBtn
                      documents={d.documents}
                      docType={documentTypes.signedLrCopy}
                      onClk={currentDoc => openModal({
                        documentType: documentTypes.signedLrCopy,
                        modalType: currentDoc.id ? "View" : "Upload",
                        title: "Signed LR Copy",
                        dprNo: d.dprNo,
                        dprId: d.id,
                        img: currentDoc.id ? currentDoc : ""
                      })}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <DocBtn
                      documents={d.documents}
                      docType={documentTypes.signedSealCode}
                      onClk={currentDoc => openModal({
                        documentType: documentTypes.signedSealCode,
                        modalType: currentDoc.id ? "View" : "Upload",
                        title: "Seal Code",
                        dprNo: d.dprNo,
                        dprId: d.id,
                        img: currentDoc.id ? currentDoc : ""
                      })}
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
          // hasEdit
          closeModal={closeModal}
          // openModal={openModal}
          title={modal.data.title}
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