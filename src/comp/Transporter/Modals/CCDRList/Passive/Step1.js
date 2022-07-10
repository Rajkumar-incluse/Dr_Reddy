import ApproveOrRejectBtn from "../../../../Common/ApproveOrRejectBtn"

function Step1() {
  return (
    <div className="max-w-4xl">
      <div className="df my-6">
        <h1 className="text-xl font-bold">1. General Instructions :</h1>
        <p className="text-gray-600">(Choose yes or no after verification as applicable)</p>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <td className="py-2 text-center font-semibold border">Particulars</td>
            <td className="w-40 py-2 text-center font-semibold border">Status</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="px-4 py-1 border">Ensure that the cold chain packing area is properly cleaned.</td>
            <td className="px-4 py-1 border">
              <div className="dc gap-4">
                <div>
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">Yes</label>
                </div>

                <div className="">
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">No</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">Record packing area temperature before start of the packaging activity from calibrated data logger.</td>
            <td className="px-4 py-1 border">
              <input
                type="text"
                placeholder="Temp"
                className="py-1 my-1"
              />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">Ensure the availability of approved packaging material and conditioning of cool/gel packs as per SOP No. FTGDCO59 and FTGDC060.</td>
            <td className="px-4 py-1 border">
              <div className="dc gap-4">
                <div>
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">Yes</label>
                </div>

                <div className="">
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">No</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">Ensure availability of Trolley, BOPP tape roller, bubble sheet and Strapping machine for packing operation.</td>
            <td className="px-4 py-1 border">
              <div className="dc gap-4">
                <div>
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">Yes</label>
                </div>

                <div className="">
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">No</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">Ensure that equipment (Freezer room/ Deep freezer / Cold room) are within validity period.</td>
            <td className="px-4 py-1 border">
              <div className="dc gap-4">
                <div>
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">Yes</label>
                </div>

                <div className="">
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">No</label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">Attach the pick list and calculate the no. of boxes required as per annexure no. FTGDCO56/A01.</td>
            <td className="px-4 py-1 border">
              <div className="dc gap-4">
                <div>
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">Yes</label>
                </div>

                <div className="">
                  <input className="inline-block w-fit mr-1 align-middle" type='radio' name="" id="" />
                  <label className="inline-block" htmlFor="">No</label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <td colSpan='2' className="px-4 py-1 border">
            <div className="df">
              <p className="shrink-0">Remarks (if any) :</p>
              <input className="w-full my-2" type="text" />
            </div>
          </td>
        </tfoot>
      </table>

      <div className="df my-6">
        <div>Checked By: </div>
        <div>Raj kumar</div>
        <div className="dc mr-auto">
          <ApproveOrRejectBtn />
        </div>
        <div>Date:</div>
        <div>12.06.2022</div>
      </div>
    </div>
  )
}

export default Step1