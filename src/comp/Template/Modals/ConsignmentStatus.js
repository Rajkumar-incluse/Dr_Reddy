import Modal, { ModalHeader } from '../../UIComp/Modal';

const data = [
  {
    key: "1",
    date: "12.11.2022",
    time: "11:30 am",
    temp: "12",
    loc: "Chennai",
  },
  {
    key: "2",
    date: "13.11.2022",
    time: "11:00 pm",
    temp: "33",
    loc: "Hydrapad",
  },
  {
    key: "3",
    date: "14.11.2022",
    time: "10:30 am",
    temp: "12",
    loc: "Nakpur",
  },
  {
    key: "4",
    date: "15.11.2022",
    time: "01:30 pm",
    temp: "-8",
    loc: "Kolkata",
  },
  {
    key: "5",
    date: "16.11.2022",
    time: "12:00 am",
    temp: "15",
    loc: "Agra",
  },
  {
    key: "6",
    date: "17.11.2022",
    time: "05:30 pm",
    temp: "11",
    loc: "Kashmir",
  },
  {
    key: "7",
    date: "18.11.2022",
    time: "08:30 pm",
    temp: "-2",
    loc: "Delhi",
  },
  {
    key: "8",
    date: "19.11.2022",
    time: "09:30 am",
    temp: "18",
    loc: "Chennai",
  },
]

const dprInfo = {
  No: "1234-g-765",
  from: "Chennai, 600 000, Tamilnadu",
  to: "Dr.Reddys Lab Ltd, C/o-Pharmacare Logistics Pvt Ltd, Bhiwandi, Thane, 421 302."
}

const tabList = [
  {
    product: "Cresp 40mcg PFs",
    quantity: "13,400"
  },
  {
    product: "Grastim 300mcg/ml Vial",
    quantity: "14,000"
  },
]

function ConsignmentStatus({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="md:w-[900px]"
    >
      <ModalHeader
        title='Consignment Status'
        closeModal={closeModal}
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-lg font-semibold">Dpr No: {dprInfo.No}</h4>
          <div className="df">
            <h5 className="text-lg font-medium">From : </h5>
            <p>{dprInfo.from}</p>
          </div>

          <div className="df items-start">
            <h5 className="shrink-0 text-lg font-medium">To : </h5>
            <p>{dprInfo.to}</p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-medium my-2">Tablets List</h4>
          <div className="max-h-32 overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="sticky top-0 bg-white">
                  <td className="px-4 py-1 border">Product</td>
                  <td className="px-4 py-1 border text-center">Total</td>
                </tr>
              </thead>

              <tbody>
                {
                  tabList.map(t => (
                    <tr key={t.product}>
                      <td className="px-4 py-1 border"> {t.product} </td>
                      <td className="px-4 py-1 border text-center"> {t.quantity} </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='max-h-80 overflow-y-auto'>
        <table className='w-full'>
          <thead>
            <tr className="sticky top-0 bg-slate-200">
              <td className="px-4 py-1">Count</td>
              <td className="px-4 py-1">Date</td>
              <td className="px-4 py-1">Time</td>
              <td className="px-4 py-1">Temp</td>
              <td className="px-4 py-1">Location</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map(d => (
                <tr key={d.key} className='even:bg-slate-200'>
                  <td className="px-4 py-1">{d.key}</td>
                  <td className="px-4 py-1">{d.date}</td>
                  <td className="px-4 py-1">{d.time}</td>
                  <td className="px-4 py-1">{d.temp} &deg; C</td>
                  <tChennaid className="px-4 py-1">{d.loc}</tChennaid>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default ConsignmentStatus