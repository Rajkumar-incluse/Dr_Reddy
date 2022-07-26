import seal from '../../../../assets/img/seal.png';
import tax from '../../../../assets/img/tax.png';

function View({ title = '' }) {
  return (
    <div className='h-96 mt-6 border rounded'>
      <img
        className='h-96 mx-auto object-cover rounded'
        src={title === "LR Copy" || title === "Seal Code" ? seal : tax}
        alt="uploaded"
      />
    </div>
  )
}

export default View