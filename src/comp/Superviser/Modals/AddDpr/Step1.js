import { useState } from "react";
import { checkDpr } from "../../../../action-reducers/dpr/dprAction";
import RadioBtns from "../../../Common/RadioBtns";

function Step1({ mode, setDprInfo, setIsStep1 }) {
  const [isInValid, setIsInValid] = useState(true)
  const [val, setVal] = useState('')
  const [list] = useState(['Active', 'Passive'])

  const onBlur = async e => {
    try {
      if (!e.target.value) return
      const data = await checkDpr(val)
      setDprInfo(pr => ({
        dprNo: data.DPR,
        shipperNo: data.Shipper_no,
        from: data.from,
        to: data.TO,
        products: [...data.TABLET],
        documentNo: data["Documnet NO"],
        referenceSOPNo: data["Reference SOP no"],
        department: data.Department,
        pickingListNo: data.PICKING_list_no,
        version: data.version,
        legacyDocNo: data["legacy doc no"],
        effectiveDate: data["Effective date"],
        transportMode: pr.transportMode || ""
      }))
      setIsInValid(false)

    } catch (error) {
      setIsInValid(true)
      console.log(error)
    }
  }

  return (
    <>
      <div className="my-6">
        <label className="text-sm text-gray-400" htmlFor="dbrNum">DPR Number</label>
        <input
          id="dbrNum"
          type="text"
          value={val}
          onChange={e => setVal(e.target.value)}
          onBlur={onBlur}
        />
      </div>

      <div className="my-6">
        <label className="mb-2 text-sm text-gray-400">DPR type</label>
        <RadioBtns
          wrapperCls="df gap-4"
          groupBy='act'
          list={list}
          selected={mode}
          onChange={v => setDprInfo(pr => ({ ...pr, transportMode: v.toLowerCase() }))}
        />
      </div>

      <button
        onClick={() => setIsStep1(p => !p)}
        className='block w-1/2 mx-auto bg-[#6e5bc5] text-white disabled:opacity-75'
        disabled={isInValid}
      >
        Next
      </button>
    </>
  )
}

export default Step1