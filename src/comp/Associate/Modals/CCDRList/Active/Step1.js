import RadioBtns from "../../../../Common/RadioBtns";

function Step1({ details, onChange }) {
  return (
    <div className="max-w-4xl">
      <div className="df my-6">
        <h1 className="text-xl font-bold">1. General Instructions :</h1>
        <p className="text-gray-600">(Choose yes or no after verification as applicable)</p>
      </div>

      <table className="w-full mb-4">
        <thead>
          <tr>
            <td className="py-2 text-center font-semibold border">Sr. No.</td>
            <td className="py-2 text-center font-semibold border">Particulars</td>
            <td className="w-40 py-2 text-center font-semibold border">Status</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="px-4 py-1 border">1</td>
            <td className="px-4 py-1 border">Ensure that the cold chain packing area is properly cleaned.</td>
            <td className="px-4 py-1 border">
              <RadioBtns
                groupBy='cleaned-properly'
                selected={details.GeneralInstruction.ProperCleaning}
                onChange={l => onChange("GeneralInstruction", "ProperCleaning", l)}
              />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">2</td>
            <td className="px-4 py-1 border">Record packing area temperature before start of the packaging activity from calibrated data logger.</td>
            <td className="px-4 py-1 border">
              <input
                type="text"
                placeholder="Temp"
                className="py-1 my-1"
                value={details.GeneralInstruction.Callibration}
                onChange={e => onChange("GeneralInstruction", "ProperCleaning", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">3</td>
            <td className="px-4 py-1 border">Ensure the availability of crates with lid and plastic seal tie for easy handling.</td>
            <td className="px-4 py-1 border">
              <RadioBtns
                groupBy='easy-handling'
                selected={details.GeneralInstruction.CratesAvail}
                onChange={l => onChange("GeneralInstruction", "CratesAvail", l)}
              />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">4</td>
            <td className="px-4 py-1 border">Ensure availability of Trolley, bubble sheet for packing operation.</td>
            <td className="px-4 py-1 border">
              <RadioBtns
                groupBy='packing-operation'
                selected={details.GeneralInstruction.TrolleyAvail}
                onChange={l => onChange("GeneralInstruction", "TrolleyAvail", l)}
              />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">5</td>
            <td className="px-4 py-1 border">Ensure the equipment (cold room) are within validity period.</td>
            <td className="px-4 py-1 border">
              <RadioBtns
                groupBy='validity-period'
                selected={details.GeneralInstruction.EquipmentValidity}
                onChange={l => onChange("GeneralInstruction", "EquipmentValidity", l)}
              />
            </td>
          </tr>
        </tbody>

        <tfoot>
          <td colSpan='3' className="px-4 py-1 border">
            <div className="df">
              <p className="shrink-0">Remarks (if any) :</p>
              <input
                className="w-full my-2"
                type="text"
                value={details.GeneralInstruction.Remarks}
                onChange={e => onChange("GeneralInstruction", "Remarks", e.target.value)}
              />
            </div>
          </td>
        </tfoot>
      </table>
    </div>
  )
}

export default Step1