import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsersList } from '../../action-reducers/admin/adminAction';

import { ReactComponent as Dot } from '../../assets/svg/common/dot.svg';
import user1 from '../../assets/img/user/user1.jpg';
import user2 from '../../assets/img/user/user2.webp';
import user3 from '../../assets/img/user/user3.png';
import user4 from '../../assets/img/user/user4.jpg';
import user5 from '../../assets/img/user/user5.webp';
import user6 from '../../assets/img/user/user6.png';
import user7 from '../../assets/img/user/user7.jpg';

import { DropDownWrapper } from '../UIComp/DropDown';
import AddMember from './Modals/AddMember';
import Loader from '../Common/Loader';

const getImg = i => {
  if (i % 13 === 0) return user6
  if (i % 7 === 0) return user7
  if (i % 5 === 0) return user5
  if (i > 10 && i % 4 === 0) return user4
  if (i % 3 === 0) return user3
  if (i % 2 === 0) return user2
  return user1
}

function User() {
  const [isLoading, setIsLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [list] = useState({
    list1: ["View", "Delete", "Activate"],
    list2: ["View", "Delete", "Inactivate"]
  })

  const users = useSelector(({ admin }) => admin)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersList(() => setIsLoading(false)))
  }, [dispatch])

  const updateOpen = () => setOpen(p => !p)

  if (isLoading) return <Loader wrapperCls='h-full' />

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>Members</h1>
        <button
          className='bg-[#6e5bc5] text-white'
          onClick={updateOpen}
        >
          Add user
        </button>
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
        <table className='w-full'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <th className='pl-12 pr-2 py-4 text-gray-500 font-medium'>Photo</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Name</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Mobile</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Email</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Role</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Status</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map((u, i) => (
                <tr key={u._id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>
                    <img
                      className='w-10 h-10 rounded object-cover'
                      src={getImg(i)}
                      alt="profile"
                    />
                  </td>
                  <td className='px-2 py-1'>{u.firstName} {u.lastName}</td>
                  <td className='px-2 py-1'>{u.phoneNumber}</td>
                  <td className='px-2 py-1'>{u.email}</td>
                  <td className='px-2 py-1 first-letter:uppercase'>{u.role}</td>
                  <td className='px-2 py-1'>
                    <button className={`dc w-20 h-6 p-0 rounded-full ${u.status === 'active' ? ' bg-green-200 text-green-900' : ' bg-red-200 text-red-900'}`}>
                      {u.status === 'active' ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <DropDownWrapper
                      list={u.status === 'active' ? list.list2 : list.list1}
                    >
                      <Dot className='w-5 h-5 [--svg-color:#333]' />
                    </DropDownWrapper>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {
        open &&
        <AddMember
          isOpen
          closeModal={updateOpen}
        />
      }
    </section>
  )
}

export default User