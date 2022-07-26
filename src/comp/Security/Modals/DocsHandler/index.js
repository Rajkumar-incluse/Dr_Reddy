import Modal, { ModalHeader } from '../../../UIComp/Modal';
import Upload from './Upload';
import View from './View';

function DocsHandler({ isOpen, closeModal, type, dprNo = '', title = '' }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls='w-[900px]'
    >
      <ModalHeader
        title={title + ` Document ${type}`}
        closeModal={closeModal}
      />

      <div><strong>DPR No:</strong> {dprNo}</div>

      {
        type === 'Upload'
          ? <Upload />
          : <View title={title} />
      }
    </Modal>
  )
}

export default DocsHandler