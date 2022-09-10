import { documentTypes } from "../../action-reducers/dpr/dprAction";
import useDoc from '../../hooks/useDoc';

import DocsHandler from "../Template/Modals/DocsHandler";
import { DocBtn } from "../Template/Btns";
import Loader from '../Common/Loader';

function CFADoc() {
  const { data, modal, isLoading, closeModal, openModal } = useDoc()

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
              data
                .filter(d => d.documents.reduce((prev, current) => {
                  let isPresent = [documentTypes.signedLrCopy, documentTypes.signedSealCode].includes(current.documentType)
                  if (isPresent) {
                    prev.push(current.documentType)
                  }
                  return prev
                }, []).length === 2)
                .map(d => (
                  <tr key={d.dprNo} className='border-y'>
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
                        docType={documentTypes.lrCopy}
                        onClk={currentDoc => openModal({
                          title: 'Seal Code',
                          dprNo: d.dprNo,
                          img: currentDoc,
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

export default CFADoc