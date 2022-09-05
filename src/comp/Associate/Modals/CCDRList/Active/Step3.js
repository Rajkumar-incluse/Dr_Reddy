import { useState } from "react";

function Step3({ details, onChange }) {
  const [list] = useState(["Date", "BoxNumFrom", "BoxNumTo", "ProductName", "BatchNum", "Quantity", "StartTime", "EndTime", "TOR", "DoneBy"])

  return (
    <div className='dfc gap-0 pb-6 max-w-[90vw] max-h-[70vh]'>
      <h1 className="my-6 text-xl font-bold">3. Product packaging: </h1>

      <div className='scroll-y pr-4 -mr-4'>
        <h4 className="mb-2 text-lg font-semibold">Instructions</h4>

        <div className="ml-4">
          <p>1. Prepare <strong>Packing list</strong> based on <strong>Picking slip</strong> and product quantity and batch number.</p>
          <p>2. Take out the finished goods required quantity from cold room as per packing list (quantity/batch no.) and place in the empty crates and paste label on each crate.</p>
          <p>3. Ensure bubble sheet shall be pre conditioned in cold rrom (2 to 8 degree celsius) for minimum of 2 hours before placing in the loose crates.</p>
          <p>4. Packed crates shall be transferred to the cold room immediately.</p>
        </div>

        <table className='w-full my-6 text-center'>
          <thead>
            <tr>
              <td className='px-4 py-1 border' rowSpan="2">Date</td>
              <td className='px-4 py-1 border' colSpan='2'>Create No</td>
              <td className='px-4 py-1 border' rowSpan="2">Product Name</td>
              <td className='px-4 py-1 border' rowSpan="2">Batch No</td>
              <td className='px-4 py-1 border' rowSpan="2">Quantity</td>
              <td className='px-4 py-1 border' colSpan='2'>Crates packing (removal of product from cold room and shifting back to cold room)</td>
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
              {
                list.map(li => (
                  <td
                    key={li}
                    className='px-4 py-1 border'
                  >
                    <input
                      type="text"
                      value={details.ProductPacking[li]}
                      onChange={e => onChange("ProductPacking", li, e.target.value)}
                    />
                  </td>
                ))
              }
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
                    <input
                      className='w-12 p-0 border-0 border-b rounded-none'
                      type="text"
                      value={details.ProductPacking.MaxTOR}
                      onChange={e => onChange("ProductPacking", "MaxTOR", e.target.value)}
                    />
                    Min.
                  </div>
                  <div className='df my-2'>
                    <strong className='shrink-0 font-medium'>Remarks (if any):</strong>
                    <input
                      type="text"
                      value={details.ProductPacking.Remarks}
                      onChange={e => onChange("ProductPacking", "Remarks", e.target.value)}
                    />
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

export default Step3