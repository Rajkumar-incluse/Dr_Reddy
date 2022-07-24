import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Location } from '../../assets/svg/common/location.svg';
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Upload } from '../../assets/svg/common/upload.svg';
import { ReactComponent as Doc } from '../../assets/svg/common/doc.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';

const list = [
  {
    title: "DPR Information",
    icon: <Dpr />,
    to: '/transporter/dpr'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/transporter/support'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/transporter/setting'
  },
  {
    title: "Track",
    icon: <Location />,
    to: '/transporter/track'
  },
  {
    title: "Upload Document",
    icon: <Upload />,
    to: '/transporter/upload'
  },
  {
    title: "View Document",
    icon: <Doc />,
    to: '/transporter/view'
  },
]

function Sidebar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <aside className='dfc px-2 py-4 bg-[#6e5cc2] text-white [--svg-color:#fff] text-sm'>
      {
        list.map(l => (
          <div
            key={l.title}
            className={`df px-4 py-2 cursor-pointer ${pathname === l.to ? "border-l-2 border-white bg-[#8373cb]" : "hover:bg-[#a190ea] rounded"}`}
            onClick={() => navigate(l.to)}
          >
            {l.icon}
            {l.title}
          </div>
        ))
      }
    </aside>
  )
}

export default Sidebar