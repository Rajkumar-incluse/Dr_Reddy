import { useState } from "react";
import RadioBtns from "../../../Common/RadioBtns";

function Step1({ setIsStep1 }) {
  const [val, setVal] = useState('')

  return (
    <>
      <div className="my-6">
        <label className="text-sm text-gray-400" htmlFor="dbrNum">DPR Number</label>
        <input
          id="dbrNum"
          type="text"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
      </div>

      <div className="my-6">
        <label className="mb-2 text-sm text-gray-400">DPR type</label>
        <RadioBtns
          wrapperCls="df gap-4"
          list={['Active', 'Passive']}
          groupBy='act'
        />
      </div>
      <button
        onClick={() => setIsStep1(p => !p)}
        className='block w-1/2 mx-auto bg-[#6e5bc5] text-white'
      >
        Next
      </button>
    </>
  )
}

export default Step1