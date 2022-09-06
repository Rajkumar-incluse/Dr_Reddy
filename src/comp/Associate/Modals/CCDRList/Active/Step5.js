// import { useSelector } from "react-redux";
import ApproveOrRejectBtn from "../../../../Common/ApproveOrRejectBtn"

function Step5({ onChange }) {
  // const userDetails = useSelector(({ login }) => login?.userDetails || {})

  return (
    <div className="w-96 text-center">
      <h1 className="my-6 text-xl font-medium">Final Sign In</h1>

      <div className='my-6'>
        <div>
          <div className='mb-2 font-bold'>Prepared by</div>
          <div className='mb-3'>Raj kumar 12.06.2022</div>
          <div className='dc'>
            <ApproveOrRejectBtn
            // onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step5