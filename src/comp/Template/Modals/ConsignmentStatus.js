import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { getTemparatures } from "../../../action-reducers/dpr/dprAction";

import Modal, { ModalHeader } from '../../UIComp/Modal';
import Loader from '../../Common/Loader';

function ConsignmentStatus({ isOpen, id, dprNo, closeModal }) {
  const [isLoading, setIsLoading] = useState(true)
  const [dprInfo, setData] = useState([])

  useEffect(() => {
    const update = (res) => {
      setData(res)
      setIsLoading(false)
    }
    getTemparatures({ id, dprNo }, update)
  }, [id, dprNo])

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="md:w-[900px]"
    >
      <ModalHeader
        title='Consignment Status'
        closeModal={closeModal}
      />

      {
        isLoading ? <Loader wrapperCls='min-h-[450px]' />
          : <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-lg font-semibold">Dpr No: {dprInfo.dprNo}</h4>
                <div className="df">
                  <h5 className="text-lg font-medium">From : </h5>
                  <p>{dprInfo.from}</p>
                </div>

                <div className="df items-start">
                  <h5 className="shrink-0 text-lg font-medium">To : </h5>
                  <p>{dprInfo.to}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium my-2">Tablets List</h4>
                <div className="max-h-32 overflow-y-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="sticky top-0 bg-white">
                        <td className="px-4 py-1 border">Product</td>
                        <td className="px-4 py-1 border text-center">Total</td>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        Object?.entries(dprInfo?.products[0])?.map(([key, value]) => (
                          <tr key={key}>
                            <td className="px-4 py-1 border"> {key} </td>
                            <td className="px-4 py-1 border text-center"> {value} </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='max-h-80 overflow-y-auto'>
              <table className='w-full'>
                <thead>
                  <tr className="sticky top-0 bg-slate-200">
                    <td className="px-4 py-1">Count</td>
                    <td className="px-4 py-1">Date</td>
                    <td className="px-4 py-1">Time</td>
                    <td className="px-4 py-1">Temp</td>
                    <td className="px-4 py-1">Location</td>
                  </tr>
                </thead>

                <tbody>
                  {
                    dprInfo?.temp?.map((d, i) => (
                      <tr key={d.id} className='even:bg-slate-200'>
                        <td className="px-4 py-1">{i + 1}</td>
                        <td className="px-4 py-1">{format(new Date(d?.timestamp), "dd.MM.yyyy")}</td>
                        <td className="px-4 py-1">{format(new Date(d?.timestamp), "hh:mm aa")}</td>
                        <td className="px-4 py-1">{d.temperature} &deg; C</td>
                        <td className="px-4 py-1">{d.city}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </>
      }
    </Modal>
  )
}

export default ConsignmentStatus