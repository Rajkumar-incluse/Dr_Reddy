import ApproveOrRejectBtn from "../../../../Common/ApproveOrRejectBtn"
import RadioBtns from "../../../../Common/RadioBtns"

function Step4() {
  return (
    <div className='dfc gap-0 pb-6 max-w-[90vw] max-h-[70vh]'>
      <h1 className="my-6 text-xl font-bold">4. Shifting of packed crates from cold room to reefer container (active cooling):</h1>

      <div className='scroll-y pr-4 -mr-4'>
        <h4 className="mb-2 text-lg font-semibold">Instructions</h4>

        <div className="ml-4">
          <p>1. Ensure the availability of reefer vehicle with adequate cleaning.</p>
          <p>2. Ensure the use of wheel chokes while vehicle is stationed.</p>
          <p>3. Ensure the data logger calibration is within due date.</p>
          <p>4. Ensure the chamber temperature is between 4 to 6 degree celsius before loading the product crates.</p>
          <p>5. Ensure the data logger shall be placed at the marked area inside the chamber.</p>
          <p>6. Data logger shall be preconditioned at 2 to 8 degree celsius inside the reefer truck chamber.</p>
          <p>7. Ensure one door is always closed while transferring the product crates into the chamber.</p>
          <p>8. Ensure the crates are placed as per the marked instructions in the chamber.</p>
        </div>

        <table className='w-full table-fixed my-6'>
          <tr>
            <td className="px-4 py-1 border">Reefer truck chamber temperature</td>
            <td className="px-4 py-1 border"><input type="text" /></td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">Time at which packed crates are taken out of cold room (X):</td>
            <td className="px-4 py-1 border"><input type="text" /></td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">Time at which packed crates are shifted into reefer container (Y):</td>
            <td className="px-4 py-1 border"><input type="text" /></td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">Time out of refrigeration: (Z=Y-X) (Allowable time out of refrigeration (TOR): 12 min.)</td>
            <td className="px-4 py-1 border"><input type="text" /></td>
          </tr>
        </table>

        <table className="w-full my-6 text-center">
          <thead>
            <tr className="font-medium">
              <td className="px-4 py-1 border">Data logger usages detail</td>
              <td className="px-4 py-1 border">Data logger number</td>
              <td className="px-4 py-1 border">Calibration due date</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-4 py-1 border"><input type="text" /></td>
              <td className="px-4 py-1 border"><input type="text" /></td>
              <td className="px-4 py-1 border"><input type="text" /></td>
            </tr>
          </tbody>
        </table>

        <h4 className="mb-2 font-medium">Shipment Tracking</h4>

        <table className="w-full mb-6 text-center">
          <thead>
            <tr>
              <td className="px-4 py-1 border">Tracking mode (Web/SAP/Phone/Mail etc.)</td>
              <td className="px-4 py-1 border">Shipment reaced to CFA/Stockiest (Date/Time)</td>
              <td className="px-4 py-1 border">Cold chain compliance <br /> by reviewing the temp. data</td>
              <td className="px-4 py-1 border">Verified by</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-4 py-1 border"><input type="text" /></td>
              <td className="px-4 py-1 border"><input type="text" /></td>
              <td className="px-4 py-1 border text-left">
                <RadioBtns
                  list={['Compliance', 'Not compliance']}
                  groupBy='compliance'
                />
              </td>
              <td className="px-4 py-1 border">
                <div className="dfc">
                  <div>Raj kumar 12.06.2022</div>
                  <div className='dc'>
                    <ApproveOrRejectBtn />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <strong>Note:</strong> Shipment tracking details shall be entered after delivery at destination point and if any discrepancies in the shipment it shall be addressed through incident.
        </div>
      </div>
    </div>
  )
}

export default Step4