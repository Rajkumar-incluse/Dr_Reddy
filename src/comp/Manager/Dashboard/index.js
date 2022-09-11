import { useSelector } from 'react-redux';

import Latest from './Latest';
import Help from './Help';
import Missions from './Missions';

function Dashboard() {
  const userDetails = useSelector(({ login }) => login.userDetails)

  return (
    <section className='grid grid-cols-4 grid-rows-[auto_auto_1fr] gap-6 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='col-span-4 px-8 py-4 bg-white'>
        <h1 className='text-2xl font-medium'>Welcome back {userDetails?.firstName} {userDetails?.lastName}</h1>
        {/* <p>Last seen 1d ago</p> */}
      </div>

      <Missions />
      <Help />

      <Latest category='Active Loggers' />
      <Latest category='Alerts' />
    </section>
  )
}

export default Dashboard