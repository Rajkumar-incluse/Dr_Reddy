import box from '../../../../../assets/img/box.png';

function Step5({ details, onChange }) {
  return (
    <div className='dfc gap-0 pb-6 max-w-[90vw] max-h-[70vh]'>
      <div className='df my-6'>
        <h1 className="text-xl font-bold">5. Cold Chain Outer Box Packing: </h1>
        <p>Assemble the outer box as per below diagram.</p>
      </div>

      <div className='scroll-y pr-4 -mr-4'>
        <div className="my-4 text-center">
          <h2 className='uppercase text-lg font-semibold'>PolyBox 28-chilled 72 <br /> (+2&deg;C to +8&deg;C tempature controlled shipping unit)</h2>
          <img className='mx-auto max-h-60' src={box} alt="box" />
        </div>

        <table className='w-full my-6'>
          <thead>
            <tr>
              <td className='px-4 py-1 text-center border'>Item</td>
              <td className='px-4 py-1 text-center border'>Description</td>
              <td className='px-4 py-1 text-center border'>Quantity</td>
            </tr>
          </thead>

          <tbody className=" text-center">
            <tr>
              <td className='px-4 py-2 border'>1</td>
              <td className='px-4 py-2 border'>Outer Carton</td>
              <td className='px-4 py-2 border'>1</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border'>2</td>
              <td className='px-4 py-2 border'>Molded Box</td>
              <td className='px-4 py-2 border'>1</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border'>3</td>
              <td className='px-4 py-2 border'>Molded Lid</td>
              <td className='px-4 py-2 border'>1</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border'>4</td>
              <td className='px-4 py-2 border'>Product Carton</td>
              <td className='px-4 py-2 border'>1</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border'>5</td>
              <td className='px-4 py-2 border'>Pharmacool</td>
              <td className='px-4 py-2 border'>7</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border'>6</td>
              <td className='px-4 py-2 border'>Data logger</td>
              <td className='px-4 py-2 border'>As applicable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Step5