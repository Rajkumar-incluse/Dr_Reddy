import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import Loader from '../../Common/Loader';

import { getDprInfo } from '../../../action-reducers/dpr/dprAction';

function PackingList({ isOpen, id = '', closeModal }) {
  const packingList = useSelector(({ dpr }) => dpr.list?.find(d => d.id === id)?.packingList || [])
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDprInfo({ id }, () => setIsLoading(false)))
  }, [dispatch, id])

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls='md:w-[900px]'
    >
      <ModalHeader
        title='DPR List'
        closeModal={closeModal}
      />

      <div className='max-h-80 overflow-y-auto'>
        {
          isLoading ?
            <Loader wrapperCls='h-40' />
            :
            <table className='w-full'>
              <thead>
                <tr className="sticky top-0 bg-slate-200">
                  <td className="px-4 py-1">S.No.</td>
                  <td className="px-4 py-1">Product</td>
                  <td className="px-4 py-1">B.No.</td>
                  <td className="px-4 py-1">Quantity</td>
                </tr>
              </thead>

              <tbody>
                {
                  packingList.map((d, i) => (
                    <tr key={i} className='even:bg-slate-200'>
                      <td className="px-4 py-1">{d.sNo}</td>
                      <td className="px-4 py-1">{d.product}</td>
                      <td className="px-4 py-1">{d.bNo}</td>
                      <td className="px-4 py-1">{d.quantity}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        }
      </div>
    </Modal>
  )
}

export default PackingList