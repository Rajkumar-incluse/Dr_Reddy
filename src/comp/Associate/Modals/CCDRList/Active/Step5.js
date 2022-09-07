import { format } from 'date-fns';
import ApproveOrRejectBtn from "../../../../Common/ApproveOrRejectBtn";

function Step5({ type, defaultStatus, userName, currentRole, onChange }) {
  const onStattusUpdate = val => {
    onChange("FinalSignIn", currentRole, {
      name: userName,
      status: val
    })
  }

  return (
    <div className="w-96 text-center">
      <h1 className="my-6 text-xl font-medium">Final Sign In</h1>

      <div className='my-6'>
        <div>
          <div className='mb-2 font-bold'>{currentRole} by</div>
          <div className='mb-3'>{userName} {format(new Date(), "dd.MM.yyyy")}</div>
          <div className='dc'>
            <ApproveOrRejectBtn
              type={type}
              defaultStatus={defaultStatus}
              onChange={onStattusUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step5