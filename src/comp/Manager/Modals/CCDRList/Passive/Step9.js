import ApproveOrRejectBtn from '../../../../Common/ApproveOrRejectBtn';

function Step9() {
  return (
    <div>
      <h1 className="my-6 text-xl font-medium">Final Sign In</h1>

      <div className='grid grid-cols-2 gap-8 my-6 text-center'>
        <div>
          <div className='mb-2 font-bold'>Prepared by</div>
          <div className='mb-3'>Raj kumar 12.06.2022</div>
          <div className='dc'>
            <ApproveOrRejectBtn />
          </div>
        </div>

        {/* <div>
          <div className='mb-2 font-bold'>Checked by</div>
          <div className='mb-3'>Raj kumar 12.06.2022</div>
          <div className='dc'>
            <ApproveOrRejectBtn />
          </div>
        </div> */}

        <div>
          <div className='mb-2 font-bold'>Approved by</div>
          <div className='mb-3'>Raj kumar 12.06.2022</div>
          <div className='dc'>
            <ApproveOrRejectBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step9