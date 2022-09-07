import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as User } from '../../assets/svg/user/single.svg';
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "User",
    icon: <User />,
    to: '/admin/user'
  },
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
]

function Admin() {
  return <AppWrapper list={list} />
}

export default Admin