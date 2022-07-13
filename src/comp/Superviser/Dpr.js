import { useState } from 'react';
import getRandom from '../../helper/getRandom';
import data from '../../dummy/manager/dpr';

import PassiveCCDRList from './Modals/CCDRList/Passive';
import ActiveCCDRList from './Modals/CCDRList/Active';
import DprList from './Modals/DprList';
import AddDpr from './Modals/AddDpr';

function Dpr() {
  const [open, setOpen] = useState("")

  const updateOpen = val => setOpen(val)

  const closeModal = () => setOpen('')

  const onClkccdr = i => {
    const type = i % 3 === 0 ? 'activeCCDRList' : 'passiveCCDRList'
    updateOpen(type)
  }

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>DPR Information</h1>
        <button
          className='bg-[#6e5bc5] text-white'
          onClick={() => updateOpen('addDpr')}
        >
          Add DPR
        </button>
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
        <table className='w-full'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <th className='pl-12 pr-2 py-4 text-gray-500 font-medium'>DPR No.</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Transport Mode</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Started At</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Delivered At</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>Packing list</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>CCDR</th>
              <th className='px-2 py-4 text-gray-500 font-medium'>CCDR Status</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((d, i) => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>1278{getRandom(10, 100)}</td>
                  <td className='px-2 py-1'>{i % 3 === 0 ? 'Active' : 'Passive'}</td>
                  <td className='px-2 py-1'>{d.start}</td>
                  <td className='px-2 py-1'>{d.end}</td>
                  <td className='px-2 py-1'>
                    <button
                      className="w-16 h-6 p-0 text-sm text-center text-white bg-[#6e5bc5] hover:bg-[#8778c9] rounded-full"
                      onClick={() => updateOpen('dprList')}
                    >
                      View
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <button
                      className="w-16 h-6 p-0 text-sm text-center text-white bg-[#6e5bc5] hover:bg-[#8778c9] rounded-full"
                      onClick={() => onClkccdr(i)}
                    >
                      View
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <button className={`w-24 h-6 p-0 text-sm text-center rounded-full ${d.status === "completed" ? "bg-green-200 text-green-800" : ""} ${d.status === "in-progress" ? "bg-yellow-200 text-yellow-900" : ""} ${d.status === "rejected" ? "bg-red-200 text-red-900" : ""}`}>
                      {d.status}
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <AddDpr
        isOpen={open === 'addDpr'}
        closeModal={closeModal}
      />

      <DprList
        isOpen={open === 'dprList'}
        closeModal={closeModal}
      />

      {
        open === 'passiveCCDRList' &&
        <PassiveCCDRList
          isOpen={open === 'passiveCCDRList'}
          closeModal={closeModal}
        />
      }

      {
        open === 'activeCCDRList' &&
        <ActiveCCDRList
          isOpen={open === 'activeCCDRList'}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default Dpr