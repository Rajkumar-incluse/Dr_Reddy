import decideStartEndDates, { effectiveDateFormarter } from '../../helper/decideStartEndDates';
import useDprList from '../../hooks/useDprList';

import PassiveCCDRList from '../Template/Modals/CCDRList/Passive';
import ActiveCCDRList from '../Template/Modals/CCDRList/Active';
import PackingList from '../Template/Modals/PackingList';
import { CCDRBtn } from '../Template/Btns';
import Loader from '../Common/Loader';

function Dpr() {
  const { open, dprList, isLoading, updateOpen, closeModal } = useDprList()

  if (isLoading) return <Loader wrapperCls='h-full' />

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
              <td className='px-2 py-4 text-gray-500 font-medium'>CCDR</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>CCDR ccdrStatus</td>
            </tr>
          </thead>

          <tbody>
            {
              dprList.map(d => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>{d.dprNo}</td>
                  <td className='px-2 py-1'>{effectiveDateFormarter(d?.effectiveDate)}</td>
                  <td className='px-2 py-1 first-letter:uppercase'>{d.transportMode}</td>
                  <td className='px-2 py-1'>{decideStartEndDates(d?.startDate, d?.endDate)}</td>
                  <td className='px-2 py-1'>{decideStartEndDates(d?.startDate, d?.endDate, false)}</td>
                  <td className='px-2 py-1'>
                    <button
                      className="w-16 h-6 p-0 text-sm text-center text-white bg-[#6e5bc5] hover:bg-[#8778c9] rounded-full"
                      onClick={() => updateOpen('packingList', d.id)}
                    >
                      View
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <button
                      className="w-16 h-6 p-0 text-sm text-center text-white bg-[#6e5bc5] hover:bg-[#8778c9] rounded-full"
                      onClick={() => updateOpen(`${d.transportMode}CCDRList`, d.id, d?.ccdrStatus?.status !== "not-started" ? 'View' : 'Edit')}
                    >
                      {d?.ccdrStatus?.status !== "not-started" ? 'View' : 'Edit'}
                    </button>
                  </td>
                  <td className='px-2 py-1'>
                    <CCDRBtn status={d?.ccdrStatus?.status} />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {
        open.type === 'packingList' &&
        <PackingList
          isOpen
          id={open.id}
          closeModal={closeModal}
        />
      }

      {
        open.type === 'passiveCCDRList' &&
        <PassiveCCDRList
          isOpen
          id={open.id}
          role="associate"
          type={open.viewType}
          closeModal={closeModal}
        />
      }

      {
        open.type === 'activeCCDRList' &&
        <ActiveCCDRList
          isOpen
          id={open.id}
          role="associate"
          type={open.viewType}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default Dpr