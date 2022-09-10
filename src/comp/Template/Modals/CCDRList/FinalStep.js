import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import { getUserById } from '../../../../action-reducers/admin/adminAction';
import Loader from '../../../Common/Loader';

function UserDetails({ users = [], id, onDate = '' }) {
  const user = users.find(us => us._id === id)

  return (
    <div className='mb-1'>
      {user?.firstName} {user?.lastName}
      <br />
      {
        onDate
          ? format(new Date(onDate), "dd.MM.yyyy")
          : format(new Date(), "dd.MM.yyyy")
      }
    </div>
  )
}

function FinalStep({ type, role, details, dprInfo, onChange }) {
  const currentUser = useSelector(({ login }) => login?.userDetails || {})
  const users = useSelector(({ admin }) => admin)

  const [status, setStatus] = useState(details.FinalSignIn.ApprovedBy.status || "")
  const [isLoading1, setIsLoading1] = useState(true)
  const [isLoading2, setIsLoading2] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    if (type !== "View" && role === "associate") {
      setIsLoading1(false)
      setIsLoading2(false)
    } else {
      dispatch(getUserById(dprInfo.createdBy, () => setIsLoading1(false)))
      dispatch(getUserById(dprInfo.ccdrStatus.createdBy, () => setIsLoading2(false)))
    }
  }, [type, role, dprInfo.createdBy, dprInfo.ccdrStatus.createdBy, dispatch])

  const onStattusUpdate = val => {
    const currentKey = role === "supervisor" ? "ApprovedBy" : "PreparedBy"
    setStatus(val)
    onChange("FinalSignIn", currentKey, {
      name: `${currentUser?.firstName} ${currentUser?.lastName}`,
      status: val,
      Date: new Date().getTime()
    })
  }

  return (
    <div className="w-96 text-center">
      <h1 className="my-6 text-xl font-medium">Final Sign In</h1>

      {
        type === "View"
          ?
          <div className='grid grid-cols-2 gap-8 my-6 text-center'>
            {
              (isLoading1 || isLoading2) ?
                <Loader wrapperCls='col-span-2 h-40' />
                : <>
                  <div>
                    <div className='mb-2 font-bold'>Prepared by</div>
                    <UserDetails
                      users={users}
                      id={dprInfo?.createdBy}
                      onDate={dprInfo?.createdOn}
                    />
                    <div className='dc text-green-800'>Approved</div>
                  </div>

                  <div>
                    <div className='mb-2 font-bold'>Approved by</div>
                    {
                      dprInfo?.ccdrStatus?.status !== "in-progress" && <>
                        <UserDetails
                          users={users}
                          id={dprInfo?.ccdrStatus?.createdBy}
                          onDate={dprInfo?.ccdrStatus?.createdOn}
                        />
                        <div className={`dc first-letter:uppercase ${dprInfo?.ccdrStatus?.status === "approved" ? "text-green-800" : "text-red-800"}`}>
                          {dprInfo?.ccdrStatus?.status}
                        </div>
                      </>
                    }

                    {
                      role !== "supervisor" &&
                      dprInfo?.ccdrStatus?.status === "in-progress" &&
                      "Pending..."
                    }

                    {
                      role === "supervisor" &&
                      dprInfo?.ccdrStatus?.status === "in-progress" &&
                      <>
                        <UserDetails
                          users={users}
                          id={currentUser?.userId}
                          onDate={new Date()}
                        />
                        <div className='dc'>
                          <button
                            className={`text-sm text-center bg-green-200 text-green-800 rounded-full ${status === 'approved' ? 'outline outline-1 outline-green-800' : ''}`}
                            onClick={() => onStattusUpdate("approved")}
                          >
                            Approve
                          </button>

                          <button
                            className={`text-sm text-center bg-red-200 text-red-900 rounded-full ${status === 'rejected' ? 'outline outline-1 outline-red-900' : ''}`}
                            onClick={() => onStattusUpdate("rejected")}
                          >
                            Reject
                          </button>
                        </div>
                      </>
                    }
                  </div>
                </>
            }
          </div>
          :
          <div className='df my-6'>
            <input
              className='w-fit'
              type="checkbox"
              name="preparedBy-final-sign"
              id="preparedBy-final-sign"
              value='Yes'
              checked={!!details?.FinalSignIn?.PreparedBy?.status}
              onChange={() => onStattusUpdate('approved')}
            />
            <label className='mb-0' htmlFor="preparedBy-final-sign">I hereby verified everything</label>
          </div>
      }
    </div>
  )
}

export default FinalStep