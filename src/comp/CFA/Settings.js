import { useId, useState } from 'react';
import uerImg from '../../assets/img/user/user3.png';

function Input({ name = '', label = '', value = '', onChange }) {
  const id = useId()

  return (
    <div className='df gap-4 my-4'>
      <label
        htmlFor={id}
        className='w-32 mb-0 shrink-0 cursor-pointer'
      >
        {label}
      </label>

      <strong>:</strong>

      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

function Settings() {
  const [show, setShow] = useState("profile")
  const [edit, setEdit] = useState(false)
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    oldPassword: '',
    newPassword: '',
  })

  const updateEdit = () => setEdit(p => !p)

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className='h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='max-w-xl my-8 mx-auto p-8 bg-white rounded-2xl'>
        {
          !edit &&
          <button
            className='block mx-auto bg-[#6e5bc5] text-white hover:bg-[#6453b1]'
            onClick={updateEdit}
          >
            Edit
          </button>
        }

        <img className='w-40 h-40 mx-auto rounded-full' src={uerImg} alt="user" />
        <div className='dc gap-6 font-semibold text-lg my-4'>
          <p
            onClick={() => setShow("profile")}
            className={`${show === "profile" ? "text-[#6e5bc5]" : ""} cursor-pointer`}
          >
            Profile
          </p>
          <p
            onClick={() => setShow("password")}
            className={`${show === "password" ? "text-[#6e5bc5]" : ""} cursor-pointer`}
          >
            Password Reset
          </p>
        </div>

        {
          show === "profile" &&
          <>
            <Input
              name="firstName"
              label='First Name'
              value={details.firstName}
              onChange={onChange}
            />

            <Input
              name="lastName"
              label='Last Name'
              value={details.lastName}
              onChange={onChange}
            />

            <Input
              name="email"
              label='Email'
              value={details.email}
              onChange={onChange}
            />

            <Input
              name="phone"
              label='Phone number'
              value={details.phone}
              onChange={onChange}
            />
          </>
        }


        {
          show === "password" &&
          <>
            <Input
              name="oldPassword"
              label='Old Password'
              value={details.oldPassword}
              onChange={onChange}
            />
            <Input
              name="newPassword"
              label='New Password'
              value={details.newPassword}
              onChange={onChange}
            />
            <Input
              name="confirmPassword"
              label='Confirm Password'
              value={details.newPassword}
              onChange={onChange}
            />
          </>
        }

        {
          edit &&
          <div className='dc gap-4'>
            <button
              className='block bg-[#6e5bc5] text-white hover:bg-[#6453b1]'
              onClick={updateEdit}
            >
              Cancel
            </button>

            <button
              className='block bg-[#6e5bc5] text-white hover:bg-[#6453b1]'
              onClick={updateEdit}
            >
              Update
            </button>
          </div>
        }
      </div>
    </section>
  )
}

export default Settings