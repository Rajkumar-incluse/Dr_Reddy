import Modal, { ModalHeader } from '../../UIComp/Modal';

const data = [
  {
    sNo: '1',
    product: 'Cresp 40mcg PFS Hospital Supply DOM',
    bNo: 'N210620A',
    quantity: '150'
  },
  {
    sNo: '2',
    product: 'Cresp 40mcg PFS Hospital Supply DOM',
    bNo: 'N210620A',
    quantity: '200'
  },
  {
    sNo: '3',
    product: 'Grastim 300mcg/ml Vial',
    bNo: '4420032',
    quantity: '150'
  },
  {
    sNo: '4',
    product: 'Cresp 40mcg PFS Hospital Supply DOM',
    bNo: 'N210620A',
    quantity: '300'
  },
  {
    sNo: '5',
    product: 'Grastim 300mcg/ml Vial',
    bNo: '4420032',
    quantity: '100'
  },
  {
    sNo: '6',
    product: 'Grastim 300mcg/ml Vial',
    bNo: 'N210620A',
    quantity: '150'
  },
  {
    sNo: '7',
    product: 'Cresp 40mcg PFS Hospital Supply DOM',
    bNo: 'N210620A',
    quantity: '400'
  },
  {
    sNo: '8',
    product: 'Grastim 300mcg/ml Vial',
    bNo: '4420032',
    quantity: '250'
  },
  {
    sNo: '9',
    product: 'Cresp 40mcg PFS Hospital Supply DOM',
    bNo: 'N210620A',
    quantity: '450'
  },
]

function DprList({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <ModalHeader
        title='DPR List'
        closeModal={closeModal}
      />

      <div className='max-h-80 overflow-y-auto'>
        <table className='w-full'>
          <thead>
            <tr className="sticky top-0 bg-slate-200">
              <td className="px-4 py-1">S.No.</td>
              <td className="px-4 py-1">Product</td>
              <td className="px-4 py-1">B.No.</td>
              <td className="px-4 py-1">Quantity</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map((d, i) => (
                <tr key={i} className='even:bg-slate-200'>
                  <td className="px-4 py-1">{d.sNo} of 9</td>
                  <td className="px-4 py-1">{d.product}</td>
                  <td className="px-4 py-1">{d.bNo}</td>
                  <td className="px-4 py-1">{d.quantity}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default DprList