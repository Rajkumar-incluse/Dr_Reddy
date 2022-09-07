import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "DPR Information",
    icon: <Dpr />,
    to: '/security/dpr'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/security/support'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/security/setting'
  },
]

function Transpoter() {
  return <AppWrapper list={list} />
}

export default Transpoter