import Modal, { ModalHeader } from '../../UIComp/Modal';

const list = [
  {
    key: '1',
    status: 'completed',
    task: 'Packaging list',
    by: 'Warehouse Supervisor',
  },
  {
    key: '2',
    status: 'in-progress',
    task: 'Preparation of CCDR',
    by: 'Warehouse Associate',
  },
  {
    key: '3',
    status: 'rejected',
    task: 'Approval of CCDR',
    by: 'Warehouse Supervisor',
  },
  // {
  //   key: '4',
  //   status: 'completed',
  //   task: 'Approval of Item Count',
  //   by: 'Warehouse Supervisor',
  // },
  // {
  //   key: '5',
  //   status: 'completed',
  //   task: 'Approval of Item Count',
  //   by: 'DRL Security',
  // },
  // {
  //   key: '6',
  //   status: 'rejected',
  //   task: 'Approval of Item Count',
  //   by: 'Transporter',
  // },
  {
    key: '7',
    status: 'in-progress',
    task: 'Uploading of Tax Invoice',
    by: 'DRL Manager',
  },
  {
    key: '8',
    status: 'completed',
    task: 'Uploading of Lorry Receipt (LR)',
    by: 'Transporter',
  },
  {
    key: '9',
    status: 'rejected',
    task: 'Uploading of Seal Code & Approval of Lorry Receipt (LR)',
    by: 'DRL Security',
  },
  {
    key: '10',
    status: 'in-progress',
    task: 'Shipment Dispatched',
    by: '',
  },
  {
    key: '11',
    status: 'in-progress',
    task: 'Shipment In-Transit',
    by: '',
  },
  {
    key: '12',
    status: 'completed',
    task: 'Uploading of Seal Code & Signed Copy of Lorry Receipt (LR)',
    by: 'CFA',
  },
  {
    key: '13',
    status: 'rejected',
    task: 'Shipment Delivered',
    by: '',
  }
]

function Status({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <ModalHeader
        title='CCDR Status'
        closeModal={closeModal}
      />

      <table className='w-full'>
        <tr className="sticky top-0">
          <td className="px-4 py-1 font-medium">Task</td>
          <td className="px-4 py-1 font-medium">Performed by</td>
        </tr>

        {
          list.map(l => (
            <tr key={l.key} className='even:bg-slate-200'>
              <td className="px-4 py-1">{l.task}</td>
              <td className="px-4 py-1">
                <div className='df my-px'>
                  <button className={`w-24 h-6 p-0 text-sm text-center rounded-full ${l.status === "completed" ? "bg-green-200 text-green-800" : ""} ${l.status === "in-progress" ? "bg-yellow-200 text-yellow-900" : ""} ${l.status === "rejected" ? "bg-red-200 text-red-900" : ""}`}>
                    {l.status}
                  </button>
                  <p className='text-sm'>{l.by ? `(${l.by})` : ''}</p>
                </div>
              </td>
            </tr>
          ))
        }
      </table>
    </Modal>
  )
}

export default Status