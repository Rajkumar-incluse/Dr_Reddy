import { useState } from "react";
import { ReactComponent as EyeClose } from '../../assets/svg/common/eye-close.svg';
import { ReactComponent as EyeOpen } from '../../assets/svg/common/eye-open.svg';

function AnimeInputField({
  wrapperCls = '', inpCls = '', spanCls = '',
  inputType = 'text', labelProps = {},
  txt = '', value = '', onChange = () => { },
  ...otherProps
}) {
  const [type, setType] = useState(inputType)

  return (
    <label
      className={`anime-input-wrapper relative ${wrapperCls}`}
      {...labelProps}
    >
      <input
        required
        type={type}
        className={`anime-input ${inpCls}`}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
      <span className={`anime-input-placeholder ${spanCls}`}>
        {txt}
      </span>

      {
        inputType === "password" && <>
          {
            type === "password"
              ? <EyeClose onClick={() => setType("text")} className='w-5 h-5 absolute bottom-2 right-1 [--svg-color:#333]' />
              : <EyeOpen onClick={() => setType("password")} className='w-5 h-5 absolute bottom-2 right-1 [--svg-color:#333]' />
          }
        </>
      }
    </label>
  )
}

export default AnimeInputField