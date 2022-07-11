import { useLocation, useNavigate } from 'react-router-dom';
// import { ReactComponent as Subscription } from '../../assets/svg/common/subscription.svg';
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
// import { ReactComponent as OrgInfo } from '../../assets/svg/user/multiple.svg';
import { ReactComponent as User } from '../../assets/svg/user/single.svg';
// import { ReactComponent as Chat } from '../../assets/svg/common/chat.svg';

const list = [
  {
    title: "User",
    icon: <User />,
    to: '/admin/user'
  },
  // {
  //   title: "Org Info",
  //   icon: <OrgInfo />,
  //   to: '/admin/org-info'
  // },
  // {
  //   title: "Subscription Info",
  //   icon: <Subscription />,
  //   to: '/admin/subscription'
  // },
  {
    title: "Support",
    icon: <Support />,
    to: '/admin/support'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/admin/setting'
  },
  // {
  //   title: "Chat",
  //   icon: <Chat />,
  //   to: '/admin/chat'
  // },
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