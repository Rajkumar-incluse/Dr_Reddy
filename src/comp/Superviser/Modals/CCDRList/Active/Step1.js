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
              <div className="dc">
                <div>
                  <input
                    className="inline-block w-fit mr-1 align-middle cursor-pointer"
                    type='radio'
                    readOnly
                    checked
                  />
                  <label
                    className="inline-block cursor-pointer"
                  >
                    yes
                  </label>
                </div>
              </div>
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
              />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">3</td>
            <td className="px-4 py-1 border">Ensure the availability of crates with lid and plastic seal tie for easy handling.</td>
            <td className="px-4 py-1 border">
              <div className="dc">
                <div>
                  <input
                    className="inline-block w-fit mr-1 align-middle cursor-pointer"
                    type='radio'
                    readOnly
                    checked
                  />
                  <label
                    className="inline-block cursor-pointer"
                  >
                    yes
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">4</td>
            <td className="px-4 py-1 border">Ensure availability of Trolley, bubble sheet for packing operation.</td>
            <td className="px-4 py-1 border">
              <div className="dc">
                <div>
                  <input
                    className="inline-block w-fit mr-1 align-middle cursor-pointer"
                    type='radio'
                    readOnly
                    checked
                  />
                  <label
                    className="inline-block cursor-pointer"
                  >
                    yes
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-1 border">5</td>
            <td className="px-4 py-1 border">Ensure the equipment (cold room) are within validity period.</td>
            <td className="px-4 py-1 border">
              <div className="dc">
                <div>
                  <input
                    className="inline-block w-fit mr-1 align-middle cursor-pointer"
                    type='radio'
                    readOnly
                    checked
                  />
                  <label
                    className="inline-block cursor-pointer"
                  >
                    yes
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <td colSpan='3' className="px-4 py-1 border">
            <div className="df">
              <p className="shrink-0">Remarks (if any) :</p>
              <input className="w-full my-2" type="text" />
            </div>
          </td>
        </tfoot>
      </table>
    </div>
  )
}

export default Step1