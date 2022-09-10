import { format } from 'date-fns';
import cn from 'classnames';

import { documentTypes } from '../../action-reducers/dpr/dprAction';
import useDoc from '../../hooks/useDoc';

import DocsHandler from "../Template/Modals/DocsHandler";
import DocBtn from "../Template/DocBtn";
import Loader from '../Common/Loader';

function Dpr() {
  const { data, modal, isLoading, closeModal, openModal, onUpload } = useDoc()

  if (isLoading) return <Loader wrapperCls='h-full' />

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
              data.map(d => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>{d.dprNo}</td>
                  <td className='px-2 py-1'>{d?.effectiveDate && format(new Date(d?.effectiveDate), "dd-MM-yyyy hh:mm aa")}</td>
                  <td className='px-2 py-1'>
                    <DocBtn
                      documents={d.documents}
                      docType={documentTypes.sealCode}
                      onClk={currentDoc => openModal({
                        documentType: documentTypes.sealCode,
                        modalType: currentDoc.id ? "View" : "Upload",
                        dprNo: d.dprNo,
                        dprId: d.id,
                        img: currentDoc.id ? currentDoc : ""
                      })}
                    />
                  </td>
                  <td className='px-2 py-1'>
                    <button className={
                      cn("w-24 h-6 p-0 text-sm text-center rounded-full", {
                        "bg-slate-300 text-slate-800": d.ccdrStatus === "not-started",
                        "bg-yellow-200 text-yellow-900": d.ccdrStatus === "in-progress",
                        "bg-green-200 text-green-800": d.ccdrStatus === "completed" || d.ccdrStatus === "accepted",
                        "bg-red-200 text-red-900": d.ccdrStatus === "rejected",
                      })
                    }
                    >
                      {d.ccdrStatus}
                      {/* has to be seal code */}
                    </button>
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
          title='Seal Code'
          dprNo={modal.data.dprNo}
          type={modal.data.modalType}
          data={modal.data}
          onUpload={onUpload}
        />
      }
    </section>
  )
}

export default Dpr