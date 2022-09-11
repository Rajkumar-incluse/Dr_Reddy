import { ReactComponent as DropDownArrow } from '../../../assets/svg/arrows/dropdown.svg';

function Help() {
  return (
    <div className='pr-8'>
      <div className='h-full py-2 px-4 bg-slate-500 text-white [--svg-color:#fff] shadow-md rounded'>
        <p className='text-2xl font-medium'>We are here to <br /> help you!</p>
        <p className='df my-2 cursor-pointer'>Contact us <DropDownArrow className='shrink-0 ml-auto -rotate-90' /></p>
        <p className='df cursor-pointer'>FAQ <DropDownArrow className='shrink-0 ml-auto -rotate-90' /></p>
      </div>
    </div>
  )
}

export default Help