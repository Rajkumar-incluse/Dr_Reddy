import Modal, { ModalHeader } from '../../../UIComp/Modal';
import Upload from './Upload';
import View from './View';

function DocsHandler({ isOpen, closeModal, openModal, type, dprNo = '', title = '', hasEdit = false }) {
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

      <div className='df justify-between'>
        <p><strong>DPR No:</strong> {dprNo}</p>

        {
          hasEdit && type === "View" &&
          <button
            className='block bg-[#6e5bc5] text-white hover:bg-[#6453b1] text-sm'
            onClick={() => openModal({ type: 'Upload', dprNo, title })}
          >
            Edit
          </button>
        }
      </div>

      {
        type === 'Upload'
          ? <Upload />
          : <View title={title} />
      }
    </Modal>
  )
}

export default DocsHandler