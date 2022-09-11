import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getDashboardData } from '../../../action-reducers/dpr/dprAction';

import Latest from './Latest';
import Help from './Help';
import Missions from './Missions';

function Dashboard() {
  const userDetails = useSelector(({ login }) => login.userDetails)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    const onSuccess = d => {
      setIsLoading(false)
      setData(d)
    }
    getDashboardData(onSuccess)
  }, [])

  return (
    <section className='grid grid-cols-4 grid-rows-[auto_auto_1fr] gap-6 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='col-span-4 px-8 py-4 bg-white'>
        <h1 className='text-2xl font-medium'>Welcome back {userDetails?.firstName} {userDetails?.lastName}</h1>
        {/* <p>Last seen 1d ago</p> */}
      </div>

      <Missions
        isLoading={isLoading}
        data={data?.mission}
      />
      <Help />

      <Latest
        category='Active Loggers'
        isLoading={isLoading}
        data={data?.dprList}
      />

      <Latest
        category='Alerts'
        isLoading={isLoading}
        data={data?.recentAlert}
      />
    </section>
  )
}

export default Dashboard