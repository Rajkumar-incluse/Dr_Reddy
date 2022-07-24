import ApproveOrRejectBtn from "../../../../Common/ApproveOrRejectBtn"
import RadioBtns from "../../../../Common/RadioBtns"

function Step8() {
  return (
    <div>
      <h1 className="my-6 text-xl font-bold">8. Document Verification: </h1>

      <table className='w-full'>
        <thead>
          <tr className="text-center">
            <td className='px-4 py-2 border'>Sl. No.</td>
            <td className='px-4 py-2 border'>Details of verifications</td>
            <td className='px-4 py-2 border'>Yes/No</td>
            <td className='px-4 py-2 border'>
              Verified by <br /> (Warehose)
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='px-4 py-2 border'>1</td>
            <td className='px-4 py-2 border'>Gel pack Conditioned Frozen -18 C and below for Min 72 Hrs.</td>
            <td className='px-4 py-2 border'>
              <RadioBtns
                groupBy='Conditioned-Frozen'
              />
            </td>
            <td className='px-4 py-2 border' rowSpan='5'>
              <div className='dfc'>
                <div>Raj kumar 12.06.2022</div>
                <div>
                  <ApproveOrRejectBtn />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className='px-4 py-2 border'>2</td>
            <td className='px-4 py-2 border'>Gel pack Conditioned 2-8 for Min 72 Hrs.</td>
            <td className='px-4 py-2 border'><input type="text" /></td>
          </tr>
          <tr>
            <td className='px-4 py-2 border'>3</td>
            <td className='px-4 py-2 border'>Frozen Gel packed pre-conditioned, for min 60 minutes.</td>
            <td className='px-4 py-2 border'><input type="text" /></td>
          </tr>
          <tr>
            <td className='px-4 py-2 border'>4</td>
            <td className='px-4 py-2 border'>Required material packed as per defined procedure.</td>
            <td className='px-4 py-2 border'><input type="text" /></td>
          </tr>
          <tr>
            <td className='px-4 py-2 border'>5</td>
            <td className='px-4 py-2 border'>Cold chain compliance based on Validations.</td>
            <td className='px-4 py-2 border'><input type="text" /></td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td className='px-4 py-2 border' colSpan='4'>
              <div className="df">
                <p className="shrink-0">Remarks (if any):</p>
                <input type="text" />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="my-6">
        <strong>Note: </strong>
        If any delays in the shipment it shall be addressed through incident.
      </div>
    </div>
  )
}

export default Step8