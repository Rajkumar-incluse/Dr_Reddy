import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getRandom from '../../helper/getRandom';
import data from '../../dummy/manager/dpr';
import DprList from './Modals/DprList';

function Dpr() {
  const [open, setOpen] = useState("")
  const navigate = useNavigate()

  const updateOpen = val => setOpen(val)

  const closeModal = () => setOpen('')

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>DPR Information</h1>
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
        <table className='w-full'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>DPR No.</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>DPR Date</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Transport Mode</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Started At</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Delivered At</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Packing list</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Track</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map((d, i) => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>1278{getRandom(10, 100)}</td>
                  <td className='px-2 py-1'>{d.start}</td>
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
                      onClick={() => navigate("/transporter/track")}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <DprList
        isOpen={open === 'dprList'}
        closeModal={closeModal}
      />
    </section>
  )
}

export default Dpr