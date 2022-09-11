import { useEffect } from 'react';
import { useState } from 'react';
import { createMsg, getMsg } from '../../../action-reducers/dpr/dprAction';
import Modal, { ModalHeader } from '../../UIComp/Modal';

function CreateBtn({ dprNo }) {
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [val, setVal] = useState('')

  useEffect(() => {
    getMsg()
  }, [])

  const updateOpen = () => setOpen(p => !p)

  const closeModal = () => {
    setIsLoading(false)
    setOpen(false)
  }

  const onSubmit = () => {
    setIsLoading(true)
    createMsg({ problem: val, dprNo }, closeModal)
  }

  return (
    <>
      <button
        className='bg-[#6e5cc2] text-white text-sm hover:opacity-90'
        onClick={updateOpen}
      >
        Create
      </button>

      <Modal
        isOpen={open}
        closeModal={closeModal}
        contentCls="md:w-[450px]"
      >
        <ModalHeader
          title='Create message'
          closeModal={closeModal}
        />

        <textarea
          cols="30"
          rows="10"
          value={val}
          onChange={e => setVal(e.target.value)}
        ></textarea>

        <button
          className='block mt-4 mx-auto w-full max-w-[200px] bg-[#6e5cc2] text-white text-sm hover:opacity-90 disabled:opacity-90'
          disabled={isLoading}
          onClick={onSubmit}
        >
          Submit
        </button>
      </Modal>
    </>
  )
}

export default CreateBtn