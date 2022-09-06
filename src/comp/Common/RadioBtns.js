import { useId } from 'react';

function Inputs({ l, selected, disabled, groupBy, onChange = () => { }, }) {
  const id = useId()

  return (
    <div key={l}>
      <input
        className="inline-block w-fit mr-1 align-middle cursor-pointer"
        checked={selected.toLowerCase() === l.toLowerCase()}
        onChange={() => onChange(l)}
        disabled={disabled}
        value={l}
        name={groupBy}
        type='radio'
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

function RadioBtns({
  wrapperCls = 'dc gap-4',
  list = ["Yes", 'No'],
  groupBy = '', selected = '',
  onChange = () => { },
  disabled = false,
}) {
  return (
    <div className={wrapperCls}>
      {
        list.map(l => (
          <Inputs
            key={l}
            l={l}
            groupBy={groupBy}
            selected={selected}
            disabled={disabled}
            onChange={onChange}
          />
        ))
      }
    </div>
  )
}

export default RadioBtns