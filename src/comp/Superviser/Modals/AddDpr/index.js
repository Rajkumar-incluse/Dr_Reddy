import { useState } from 'react';
import Modal, { ModalHeader } from '../../../UIComp/Modal';
import Step1 from './Step1';
import Step2 from './Step2';

function AddDpr({ isOpen, closeModal }) {
  const [isStep1, setIsStep1] = useState(true)
  // const [] = useState({
  //   dprNo: "",
  //   shipperNo: "",
  //   from: "",
  //   to: "",
  //   products: [],
  //   documentNo: "",
  //   referenceSOPNo: "",
  //   department: "",
  //   pickingListNo: "",
  //   version: "",
  //   legacyDocNo: "",
  //   effectiveDate: "",
  //   transportMode: "",
  //   packingList: []
  // })

  // {
  //   "sNo": "",
  //   "product": "",
  //   "bNo": "",
  //   "quantity": ""
  // }

  const onClose = () => {
    setIsStep1(true)
    closeModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={onClose}
      contentCls={isStep1 ? 'w-[400px]' : 'dfc gap-0 w-[90vw] h-[90vh]'}
    >
      <ModalHeader
        title='Add DPR'
        closeModal={onClose}
      />

      {
        isStep1
          ? <Step1 setIsStep1={setIsStep1} />
          : <Step2 />
      }
    </Modal>
  )
}

export default AddDpr