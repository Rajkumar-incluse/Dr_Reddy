import { documentTypes } from "../../action-reducers/dpr/dprAction";
import filterCheck from "../../helper/filterCheck";
import useDoc from '../../hooks/useDoc';

import DocsHandler from "../Template/Modals/DocsHandler";
import { DocBtn } from "../Template/Btns";
import Loader from '../Common/Loader';

function ViewLR() {
  const { data, modal, isLoading, closeModal, openModal } = useDoc()

  if (isLoading) return <Loader wrapperCls='h-full' />

  return (
    <section className='dfc p-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className="scroll-y w-[550px] mx-auto my-8 bg-white rounded-xl">
        <table className="w-full">
          <thead>
            <tr className='sticky top-0 bg-white font-medium text-gray-500'>
              <td className='p-4'>DPR No.</td>
              <td className='p-4'>Tax Invoice</td>
              <td className='p-4'>Signed LR</td>
            </tr>
          </thead>

          <tbody>
            {
              data
                .filter(d => filterCheck(d.documents, [documentTypes.signedLrCopy, documentTypes.taxInvoice]))
                .map(d => (
                  <tr key={d.id} className='border-y'>
                    <td className="px-4 py-2">{d.dprNo}</td>
                    <td className="px-4 py-2">
                      <DocBtn
                        documents={d.documents}
                        docType={documentTypes.lrCopy}
                        onClk={currentDoc => openModal({
                          title: 'Tax Invoice',
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
                          title: 'Signed LR',
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

export default ViewLR