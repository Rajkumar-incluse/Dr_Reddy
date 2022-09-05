import ApproveOrRejectBtn from "../../../../Common/ApproveOrRejectBtn"

function Step5({ details, onChange }) {
  return (
    <div className="w-96 text-center">
      <h1 className="my-6 text-xl font-medium">Final Sign In</h1>

      <div className='my-6'>
        <div>
          <div className='mb-2 font-bold'>Prepared by</div>
          <div className='mb-3'>Raj kumar 12.06.2022</div>
          <div className='dc'>
            <ApproveOrRejectBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step5