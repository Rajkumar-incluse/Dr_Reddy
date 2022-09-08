import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../../action-reducers/admin/adminAction';

import Modal, { ModalHeader } from '../../UIComp/Modal';
import user from '../../../assets/img/user.png';

function AddMember({ isOpen, closeModal }) {
  const [isLoading, setIsLoading] = useState(false)
  const [details, setDetails] = useState({
    phoneNumber: "9999666667",
    firstName: "",
    lastName: "Kumar",
    email: "r1@gmail.com",
    role: ""
  })
  const inputRef = useRef()
  const dispatch = useDispatch()

  const onFileChange = e => {
    // let files = e.target.files
    // const allFiles = Object.keys(files).map(each => files[each])
    // inputRef.current.value = ""
  }

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = () => {
    setIsLoading(true)
    dispatch(registerUser(details, closeModal))
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title='Add Member'
        closeModal={closeModal}
      />

      <div className='dc mt-8'>
        <div
          className='w-32 h-32 rounded-full bg-slate-200 cursor-pointer'
          onClick={() => inputRef.current.click()}
        >
          <img src={user} alt="user" />
        </div>

        <input
          onClickCapture={e => e.stopPropagation()}
          className='hidden'
          onChange={onFileChange}
          type="file"
          ref={inputRef}
        />
      </div>

      <div className='grid grid-cols-2 gap-4 mt-8'>
        <div>
          <label htmlFor="add-user-">First Name</label>
          <input
            id='add-user-firstName'
            type="text"
            name='firstName'
            value={details.firstName}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="add-user-lastName">Last Name</label>
          <input
            id='add-user-lastName'
            type="text"
            name='lastName'
            value={details.lastName}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="add-user-email">Email</label>
          <input
            id='add-user-email'
            type="text"
            name='email'
            value={details.email}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="add-user-phoneNumber">Mobile</label>
          <input
            id='add-user-phoneNumber'
            type="text"
            name='phoneNumber'
            value={details.phoneNumber}
            onChange={onChange}
          />
        </div>

        <div className='col-span-2'>
          <label htmlFor="add-user-role">Role</label>
          <select
            name="role"
            id="add-user-role"
            value={details.role}
            onChange={onChange}
          >
            <option value="" disabled></option>
            <option value="supervisor">Ware house supervisor</option>
            <option value="associate">Ware house associate</option>
            <option value="manager">Manager</option>
            <option value="cfa">CFA</option>
            <option value="transporter">Transporter</option>
            <option value="security">Security</option>
          </select>
        </div>
      </div>

      <button
        className='block w-1/2 mx-auto mt-12 bg-[#6e5bc5] text-white hover:scale-105 transition-transform rounded disabled:opacity-80 disabled:cursor-default'
        disabled={isLoading}
        onClick={onSubmit}
      >
        Create
      </button>
    </Modal>
  )
}

export default AddMember