import { useState } from 'react';
import { format } from 'date-fns';

function FinalStep({ type, role, details, dprInfo, userName, onChange, isFinished }) {
  const [status, setStatus] = useState(details.FinalSignIn.ApprovedBy.status || "")

  const supervisorStatus = details.FinalSignIn.ApprovedBy.status

  const onStattusUpdate = val => {
    const currentKey = role === "supervisor" ? "ApprovedBy" : "PreparedBy"
    setStatus(val)
    onChange("FinalSignIn", currentKey, {
      name: userName,
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
            <div>
              <div className='mb-2 font-bold'>Prepared by</div>
              <div className='mb-1'>
                {details.FinalSignIn.PreparedBy.name}
                <br />
                {
                  details.FinalSignIn.PreparedBy.Date
                    ? format(new Date(details.FinalSignIn.PreparedBy.Date), "dd.MM.yyyy")
                    : format(new Date(), "dd.MM.yyyy")
                }
              </div>
              <div className='dc text-green-800'>Approved</div>
            </div>

            <div>
              <div className='mb-2 font-bold'>Approved by</div>
              {
                role !== "supervisor" && <>
                  {
                    supervisorStatus
                      ? <>
                        <div className='mb-1'>
                          {details.FinalSignIn.ApprovedBy.name}
                          <br />
                          {
                            details.FinalSignIn.ApprovedBy.Date
                              ? format(new Date(details.FinalSignIn.ApprovedBy.Date), "dd.MM.yyyy")
                              : format(new Date(), "dd.MM.yyyy")
                          }
                        </div>
                        <div className='dc text-green-800'>Approved</div>
                      </>
                      : "Pending..."
                  }
                </>
              }

              {
                role === "supervisor" && !isFinished &&
                <>
                  <div className='mb-3'>
                    {details.FinalSignIn.ApprovedBy.name || userName}
                    <br />
                    {
                      details.FinalSignIn.ApprovedBy.Date
                        ? format(new Date(details.FinalSignIn.ApprovedBy.Date), "dd.MM.yyyy")
                        : format(new Date(), "dd.MM.yyyy")
                    }
                  </div>
                  <div className='dc'>
                    <button
                      className={`text-sm text-center bg-green-200 text-green-800 rounded-full ${status === 'approved' ? 'outline outline-1 outline-green-800' : ''}`}
                      onClick={() => onStattusUpdate("approved")}
                      disabled={isFinished}
                    >
                      Approve
                    </button>

                    <button
                      className={`text-sm text-center bg-red-200 text-red-900 rounded-full ${status === 'rejected' ? 'outline outline-1 outline-red-900' : ''}`}
                      onClick={() => onStattusUpdate("rejected")}
                      disabled={isFinished}
                    >
                      Reject
                    </button>
                  </div>
                </>
              }
            </div>
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