import { useId } from 'react';

function Inputs({ l, groupBy }) {
  const id = useId()

  return (
    <div key={l}>
      <input
        className="inline-block w-fit mr-1 align-middle cursor-pointer"
        type='radio'
        name={groupBy}
        id={id}
      />
      <label
        className="inline-block cursor-pointer"
        htmlFor={id}
      >
        {l}
      </label>
    </div>
  )
}

function RadioBtns({ wrapperCls = 'dc gap-4', list = ["Yes", 'No'], groupBy = '' }) {
  return (
    <div className={wrapperCls}>
      {
        list.map(l => (
          <Inputs
            key={l}
            l={l}
            groupBy={groupBy}
          />
        ))
      }
    </div>
  )
}

export default RadioBtns