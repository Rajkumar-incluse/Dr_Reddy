// import ApproveOrRejectBtn from "../../../../Common/ApproveOrRejectBtn"

function Step4() {
  return (
    <div className='dfc gap-0 pb-6 max-w-[90vw] max-h-[70vh]'>
      <h1 className="my-6 text-xl font-bold">4. Cold Chain Inner Box Packing</h1>

      <div className='scroll-y pr-4 -mr-4'>
        <h4 className="mb-2 text-lg font-semibold">Instructions</h4>

        <div className="ml-4">
          <p>1. Prepare <strong>Packing list</strong> based on <strong>Picking slip</strong> and product quantity and batch number.</p>
          <p>2. Take out the finished goods required quantity from cold room as per Packing list (Quantity/batch No) and pack in the inner box and paste label on each inner box. This activity shall be performed before or after gel pack conditioning based on the requirement.</p>
          <p>3. Ensure data logger and bubble sheet shall be pre conditioned in cold room (2 to 8 &deg; C) for minimum of 2 hours before placing in the shipper.</p>
          <p>4. Ensure that data logger is switched on and placed as specified in the diagram and close the inner box lid with Bopp tape.</p>
        </div>

        <table className='w-full my-6 text-center'>
          <thead>
            <tr>
              <td className='px-4 py-1 border' rowSpan="2">Date</td>
              <td className='px-4 py-1 border' colSpan='2'>Box No</td>
              <td className='px-4 py-1 border' rowSpan="2">Product Name</td>
              <td className='px-4 py-1 border' rowSpan="2">Batch No</td>
              <td className='px-4 py-1 border' rowSpan="2">Packed qty.</td>
              <td className='px-4 py-1 border' colSpan='2'>Packing</td>
              <td className='px-4 py-1 border' rowSpan="2">TOR <br /> (C=B-A)</td>
              <td className='px-4 py-1 border' rowSpan="2">Done By</td>
            </tr>
            <tr>
              <td className='px-4 py-1 border'>From</td>
              <td className='px-4 py-1 border'>To</td>
              <td className='px-4 py-1 border'>Start time (A)</td>
              <td className='px-4 py-1 border'>End time (B)</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
              <td className='px-4 py-1 border'><input type="text" /></td>
            </tr>

            <tr>
              <td className='px-4 py-1 border' colSpan='10'>
                <div className='df justify-end'>
                  <button className='bg-[#6e5bc5] text-white'>Add</button>
                </div>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td className='px-4 py-1 border' colSpan='10'>
                <div className='text-left'>
                  <div className="my-2">
                    <strong className='font-medium'>Allowable time out of Refrigeration (TOR) :</strong> 10 min .
                  </div>
                  <div className='df my-2'>
                    <strong className='font-medium'>Maximum time out of Refrigeration (TOR) :</strong>
                    <input className='w-12 p-0 border-0 border-b rounded-none' type="text" />
                    Min.
                  </div>
                  {/* <div className="df my-2">
                    <strong className='font-medium'>Overall packing activity Verified by :</strong>
                    <span>Raj kumar 12.06.2022</span>
                    <ApproveOrRejectBtn />
                  </div> */}
                  <div className='df my-2'>
                    <strong className='shrink-0 font-medium'>Remarks (if any):</strong>
                    <input type="text" />
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Step4