function Step3({ type, details, onChange }) {
  return (
    <div className='dfc gap-0 pb-6 max-w-[90vw] max-h-[70vh]'>
      <h1 className="my-6 text-xl font-bold">3. Packaging Operation :</h1>

      <div className='scroll-y pr-4 -mr-4'>
        <div className='border p-1 mb-6'>
          <div className='df items-start border-b'>
            <p className='p-2'>1.</p>
            <p className='px-4 py-2 flex-1 border-l'>Take out the required quantity of cured gel pack (frozen {`>`} 72hours) from Deep freezer/Freezer room and keep for conditioning at room temperature (15 to 25 &deg; C) for Poly 28 (minimum 60 minutes but not exceeding 90 minutes) and record the date and time of frozen Gel packs taken out from the deep freezer/Freezer room from FTGDCO59 A01 "Gel Packs Loading, Conditioning and Un-loading Log Sheet".</p>
          </div>

          <div className='df items-start'>
            <p className='p-2'>2.</p>
            <p className='px-4 py-2 flex-1 border-l'>Take out the required quantity of cold Gel pack from Cold room (2 to 8 &deg; C) for initiating, the soft box assembling activity. Record date and time of Gel pack removal in FTGDCO59 A01 "Gel Packs Loading, Conditioning and Un-loading Log Sheet".</p>
          </div>
        </div>

        <table className='w-full my-6 text-center'>
          <tbody>
            <tr>
              <td className='px-4 py-1 border' rowSpan='4'>Packaging material requirement details</td>
              <td className='px-4 py-1 border border-b-0'>Poly Box 28 L</td>
              <td className='px-4 py-1 border border-b-0' colSpan='2'>Gel pack</td>
              <td className='px-4 py-1 border border-b-0' colSpan='2'>Gel pack</td>
            </tr>

            <tr>
              <td className='px-4 py-1 border border-t-0'>(Qty. in nos.)</td>
              <td className='px-4 py-1 border border-t-0' colSpan='2'>(Frozen at-18 &deg; C and below)</td>
              <td className='px-4 py-1 border border-t-0' colSpan='2'>(Cold at 2-8 &deg; C)</td>
            </tr>

            <tr>
              <td className='px-4 py-1 border' rowSpan='2'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.PolyBox28L}
                  onChange={e => onChange("PackingOperation", "PolyBox28L", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border' rowSpan='2'>3 No. of 3 kg/box</td>
              <td className='px-4 py-1 border' rowSpan='2'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.GelPackFrozen}
                  onChange={e => onChange("PackingOperation", "GelPackFrozen", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border'>2 No. of 2 kg/box</td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.GelPackCold}
                  onChange={e => onChange("PackingOperation", "GelPackCold", e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className='px-4 py-1 border'>2 No. of 3 kg/box</td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className='px-4 py-1 border' rowSpan='3'>Data Logger usages detail (if applicable)</td>
              <td className='px-4 py-1 border' colSpan='3'>Data Logger No.</td>
              <td className='px-4 py-1 border'>Calibration due date</td>
              <td className='px-4 py-1 border'>Placed in Shipper no.</td>
            </tr>

            <tr>
              <td className='px-4 py-1 border'>Internal box</td>
              <td className='px-4 py-1 border' colSpan='2'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border' rowSpan='2'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className='px-4 py-1 border'>External box</td>
              <td className='px-4 py-1 border' colSpan='2'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border' rowSpan='2'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>


        <table className='w-full my-6 text-center'>
          <thead>
            <tr>
              <td className='px-4 py-1 border w-40' rowSpan='2'>Type of Gel pack</td>
              <td className='px-4 py-1 border' rowSpan='2'>In House Batch No./Lot No.</td>
              <td className='px-4 py-1 border' rowSpan='2'>Quantity</td>
              <td className='px-4 py-1 border' colSpan='2'>Gel pack Un-loading (a)</td>
              <td className='px-4 py-1 border' colSpan='2'>Gel packs placing inside box (b)</td>
              <td className='px-4 py-1 border' rowSpan='2'>Total conditioning <br /> Time (b-a) <br /> (HH:MM)</td>
            </tr>
            <tr>
              <td className='px-4 py-1 border'>Date</td>
              <td className='px-4 py-1 border'>Time</td>
              <td className='px-4 py-1 border'>Date</td>
              <td className='px-4 py-1 border'>Time</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='px-4 py-1 border'>3000grams</td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
              <td className='px-4 py-1 border'>
                <input
                  type="text"
                  disabled={type === "View"}
                  value={details.PackingOperation?.TruckChamberTemp}
                  onChange={e => onChange("PackingOperation", "TruckChamberTemp", e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className='df justify-between my-6'>
          <p className="text-gray-600"># External data logger is for reference purpose only.</p>
          <button className='bg-[#6e5bc5] text-white'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Step3